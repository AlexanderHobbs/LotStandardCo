<script setup lang="ts">
  // Three-step "Get A Free Quote" form: Project -> Details -> Contact.
  // Submissions go to Web3Forms, which emails them to the address the access
  // key was created for (set in the Web3Forms dashboard, not in this code).
  import siteMeta from '@/site'

  // Web3Forms access keys are meant to be public, so it is safe in client code.
  const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
  const WEB3FORMS_ACCESS_KEY = '68f1cbc8-8801-47b2-a5fa-21cfb913cd22'

  const { allServices: services } = useServices()
  const serviceOptions = services.map((service) => service.name)

  const STEPS = ['Project', 'Details', 'Contact'] as const
  const startOptions = [
    'As soon as possible',
    'Within 2 weeks',
    'Within 1-2 months',
    '3+ months out',
    'Just researching/budgeting',
  ]
  const referralSources = [
    'Google search',
    'Google Maps / Business Profile',
    'Facebook',
    'Instagram',
    'LinkedIn',
    'Nextdoor',
    'Yelp',
    'Online ad',
    'Referral from a friend or colleague',
    'Referral from a current customer',
    'Property manager or HOA',
    'Saw our truck or crew on the job',
    'Yard sign or job-site signage',
    'Flyer, mailer or door hanger',
    'Local newspaper or radio',
    'Chamber of commerce or networking event',
    'Email or newsletter',
    'Previous customer',
    'Other',
  ]

  // Value is the two-letter code that gets submitted; the label is what visitors see.
  const states = [
    ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'],
    ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'],
    ['DC', 'District of Columbia'], ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'],
    ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'],
    ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'],
    ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
    ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'],
    ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'],
    ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
    ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'],
    ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'],
    ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'], ['WA', 'Washington'],
    ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
  ] as const

  const step = ref(1)
  const direction = ref<'forward' | 'back'>('forward')
  const submitted = ref(false)
  const submitting = ref(false)
  const submitError = ref(false)
  const showErrors = ref(false)

  const form = reactive({
    services: [] as string[],
    start: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    referral: '',
    message: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false,
    botField: '',
  })

  // Arriving from a service page (/contact?service=<slug>) preselects it.
  const route = useRoute()
  const preselectService = () => {
    const slug = String(route.query.service ?? '')
    const match = services.find((service) => service.slug === slug)
    if (match && !form.services.includes(match.name)) form.services.push(match.name)
  }
  onMounted(preselectService)
  watch(() => route.query.service, preselectService)

  const toggleService = (name: string) => {
    const index = form.services.indexOf(name)
    if (index === -1) form.services.push(name)
    else form.services.splice(index, 1)
  }

  const zipOk = computed(() => /^\d{5}(-\d{4})?$/.test(form.zip.trim()))
  const phoneOk = computed(() => form.phone.replace(/\D/g, '').length >= 10)
  const emailOk = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
  const errors = computed(() => ({
    services: form.services.length ? '' : 'Please select at least one service.',
    start: form.start ? '' : 'Please choose when you want to start.',
    address: form.address.trim() ? '' : 'This field is required.',
    city: form.city.trim() ? '' : 'This field is required.',
    state: form.state ? '' : 'Please choose a state.',
    zip: !form.zip.trim() ? 'This field is required.' : zipOk.value ? '' : 'Please enter a valid ZIP code.',
    referral: form.referral ? '' : 'This field is required.',
    message: form.message.trim() ? '' : 'This field is required.',
    firstName: form.firstName.trim() ? '' : 'This field is required.',
    lastName: form.lastName.trim() ? '' : 'This field is required.',
    email: !form.email ? 'This field is required.' : emailOk.value ? '' : 'Please enter a valid email address.',
    phone: !form.phone.trim() ? 'This field is required.' : phoneOk.value ? '' : 'Please enter a valid phone number.',
    consent: form.consent ? '' : 'Please agree to continue.',
  }))
  const stepFields: Record<number, (keyof typeof errors.value)[]> = {
    1: ['services', 'start'],
    2: ['address', 'city', 'state', 'zip', 'referral', 'message'],
    3: ['firstName', 'lastName', 'email', 'phone', 'consent'],
  }
  const stepValid = (n: number) => stepFields[n]!.every((field) => !errors.value[field])
  const err = (field: keyof typeof errors.value) => (showErrors.value ? errors.value[field] : '')

  const submit = async () => {
    // A human never fills the hidden field; pretend it worked so bots get no signal.
    if (form.botField) {
      submitted.value = true
      return
    }
    submitting.value = true
    submitError.value = false
    const name = `${form.firstName.trim()} ${form.lastName.trim()}`
    try {
      const result = await $fetch<{ success: boolean }>(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: {
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New quote request from ${name}`,
          from_name: 'Lot Standard Co website',
          // Web3Forms uses "email" as the Reply-To, so replying goes to the customer.
          name,
          email: form.email,
          phone: form.phone,
          services: form.services.join(', '),
          start: form.start,
          address: form.address,
          city: form.city,
          state: form.state,
          zip: form.zip,
          referral: form.referral,
          message: form.message,
          consent: form.consent ? 'Agreed to terms & policies' : '',
        },
      })
      if (!result.success) throw new Error('Web3Forms rejected the submission')
      submitted.value = true
    } catch {
      submitError.value = true
    } finally {
      submitting.value = false
    }
  }

  const next = () => {
    if (!stepValid(step.value)) {
      showErrors.value = true
      return
    }
    showErrors.value = false
    if (step.value < STEPS.length) {
      direction.value = 'forward'
      step.value++
    } else {
      submit()
    }
  }
  const back = () => {
    showErrors.value = false
    direction.value = 'back'
    step.value--
  }

  // Animate the card height between steps so the layout doesn't jump.
  const heightEl = ref<HTMLElement | null>(null)
  const onBeforeLeave = (el: Element) => {
    if (heightEl.value) heightEl.value.style.height = `${(el as HTMLElement).offsetHeight}px`
  }
  const onEnter = (el: Element) => {
    if (!heightEl.value) return
    const target = (el as HTMLElement).offsetHeight
    requestAnimationFrame(() => {
      if (heightEl.value) heightEl.value.style.height = `${target}px`
    })
  }
  const onAfterEnter = () => {
    if (heightEl.value) heightEl.value.style.height = ''
  }

  const inputClass =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-tertiary-900 outline-none transition-colors focus:border-[#fcc419] focus:ring-2 focus:ring-[#fcc419]/40'
  // Step 2's tighter fields (less vertical padding) and the red border for a field with an error.
  const compactInput = inputClass.replace('py-3', 'py-2.5')
  const errorBorder = '!border-error-600'
</script>
<template>
  <div class="quote-form w-full rounded-3xl bg-white p-6 text-left text-tertiary-900 shadow-2xl md:p-8">
    <div v-if="submitted" class="py-6 text-center" role="status">
      <span class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fcc419]">
        <BaseIcon name="i-mdi-check" height="30px" />
      </span>
      <h2 class="font-bold !text-xl md:!text-2xl">Request sent</h2>
      <p class="mt-2 text-gray-600">
        Thanks! We'll be in touch within one business day.
      </p>
    </div>

    <form v-else novalidate @submit.prevent="next">
      <div class="mb-6">
        <h2 class="font-bold !text-xl md:!text-2xl">Get A Free Quote</h2>
        <p class="mt-1 text-sm text-gray-600">
          Tell us about your property and we'll reply within one business day.
        </p>
      </div>

      <!-- Progress -->
      <div class="mb-6">
        <div class="mb-2 flex items-center justify-between text-xs font-semibold md:text-sm">
          <span>Step {{ step }} of {{ STEPS.length }}</span>
          <span class="text-gray-500">{{ STEPS.join(' → ') }}</span>
        </div>
        <div
          class="h-1.5 overflow-hidden rounded-full bg-gray-200"
          role="progressbar"
          aria-valuemin="1"
          :aria-valuemax="STEPS.length"
          :aria-valuenow="step"
        >
          <div
            class="progress-fill h-full rounded-full"
            :style="{ width: `${(step / STEPS.length) * 100}%` }"
          />
        </div>
      </div>

      <div ref="heightEl" class="height-wrap">
        <Transition
          :name="`step-${direction}`"
          mode="out-in"
          @before-leave="onBeforeLeave"
          @enter="onEnter"
          @after-enter="onAfterEnter"
        >
          <!-- Step 1 -->
          <div v-if="step === 1" key="1" class="space-y-5">
            <fieldset>
              <legend class="mb-2 font-bold">Service needed</legend>
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  v-for="option in serviceOptions"
                  :key="option"
                  type="button"
                  :aria-pressed="form.services.includes(option)"
                  class="service-option flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors"
                  :class="
                    form.services.includes(option)
                      ? 'border-[#fcc419] bg-[#fcc419]/15'
                      : 'border-gray-300 hover:border-gray-400'
                  "
                  @click="toggleService(option)"
                >
                  <span
                    class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors"
                    :class="
                      form.services.includes(option)
                        ? 'border-[#fcc419] bg-[#fcc419]'
                        : 'border-gray-400'
                    "
                  >
                    <BaseIcon
                      v-if="form.services.includes(option)"
                      name="i-mdi-check"
                      height="14px"
                    />
                  </span>
                  {{ option }}
                </button>
              </div>
              <p v-if="err('services')" class="mt-2 text-sm text-error-600">{{ err('services') }}</p>
            </fieldset>
            <div>
              <label for="qf-start" class="mb-2 block font-bold">When do you want to start?</label>
              <select id="qf-start" v-model="form.start" :class="inputClass">
                <option value="" disabled>Choose one</option>
                <option v-for="option in startOptions" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
              <p v-if="err('start')" class="mt-2 text-sm text-error-600">{{ err('start') }}</p>
            </div>
          </div>

          <!-- Step 2: kept compact so it is never taller than step 1. Errors show
               beside each label (and as a red border) instead of on a new line. -->
          <div v-else-if="step === 2" key="2" class="space-y-3">
            <div>
              <label for="qf-address" class="mb-1 flex items-baseline justify-between gap-2 text-sm font-bold">
                Property Address
                <span v-if="err('address')" class="text-xs font-normal text-error-600">{{ err('address') }}</span>
              </label>
              <input id="qf-address" v-model="form.address" type="text" autocomplete="street-address" :class="[compactInput, err('address') && errorBorder]" >
            </div>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_9rem_6.5rem]">
              <div class="col-span-2 sm:col-span-1">
                <label for="qf-city" class="mb-1 flex items-baseline justify-between gap-2 text-sm font-bold">
                  City
                  <span v-if="err('city')" class="text-xs font-normal text-error-600">{{ err('city') }}</span>
                </label>
                <input id="qf-city" v-model="form.city" type="text" autocomplete="address-level2" :class="[compactInput, err('city') && errorBorder]" >
              </div>
              <div>
                <label for="qf-state" class="mb-1 flex items-baseline justify-between gap-2 text-sm font-bold">
                  State
                  <span v-if="err('state')" class="text-xs font-normal text-error-600">Required</span>
                </label>
                <select id="qf-state" v-model="form.state" autocomplete="address-level1" :class="[compactInput, err('state') && errorBorder]">
                  <option value="" disabled>Select</option>
                  <option v-for="[code, name] in states" :key="code" :value="code">
                    {{ name }}
                  </option>
                </select>
              </div>
              <div>
                <label for="qf-zip" class="mb-1 flex items-baseline justify-between gap-2 text-sm font-bold">
                  ZIP
                  <span v-if="err('zip')" class="text-xs font-normal text-error-600">{{ form.zip.trim() ? 'Invalid' : 'Required' }}</span>
                </label>
                <input
                  id="qf-zip"
                  v-model="form.zip"
                  type="text"
                  inputmode="numeric"
                  autocomplete="postal-code"
                  maxlength="10"
                  :class="[compactInput, err('zip') && errorBorder]"
                >
              </div>
            </div>
            <div>
              <label for="qf-referral" class="mb-1 flex items-baseline justify-between gap-2 text-sm font-bold">
                Where did you hear about us?
                <span v-if="err('referral')" class="text-xs font-normal text-error-600">{{ err('referral') }}</span>
              </label>
              <select id="qf-referral" v-model="form.referral" :class="[compactInput, err('referral') && errorBorder]">
                <option value="" disabled>Select an option</option>
                <option v-for="source in referralSources" :key="source" :value="source">
                  {{ source }}
                </option>
              </select>
            </div>
            <div>
              <label for="qf-message" class="mb-1 flex items-baseline justify-between gap-2 text-sm font-bold">
                Message
                <span v-if="err('message')" class="text-xs font-normal text-error-600">{{ err('message') }}</span>
              </label>
              <textarea id="qf-message" v-model="form.message" rows="2" :class="[compactInput, 'resize-none', err('message') && errorBorder]" />
            </div>
          </div>

          <!-- Step 3 -->
          <div v-else key="3" class="space-y-5">
            <p class="hidden">
              <label>Don't fill this out if you're human: <input v-model="form.botField" tabindex="-1" autocomplete="off" ></label>
            </p>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label for="qf-first-name" class="mb-2 block font-bold">First name</label>
                <input id="qf-first-name" v-model="form.firstName" type="text" autocomplete="given-name" :class="inputClass" >
                <p v-if="err('firstName')" class="mt-2 text-sm text-error-600">{{ err('firstName') }}</p>
              </div>
              <div>
                <label for="qf-last-name" class="mb-2 block font-bold">Last name</label>
                <input id="qf-last-name" v-model="form.lastName" type="text" autocomplete="family-name" :class="inputClass" >
                <p v-if="err('lastName')" class="mt-2 text-sm text-error-600">{{ err('lastName') }}</p>
              </div>
            </div>
            <div>
              <label for="qf-email" class="mb-2 block font-bold">Email</label>
              <input id="qf-email" v-model="form.email" type="email" autocomplete="email" :class="inputClass" >
              <p v-if="err('email')" class="mt-2 text-sm text-error-600">{{ err('email') }}</p>
            </div>
            <div>
              <label for="qf-phone" class="mb-2 block font-bold">Phone number</label>
              <input id="qf-phone" v-model="form.phone" type="tel" autocomplete="tel" :class="inputClass" >
              <p v-if="err('phone')" class="mt-2 text-sm text-error-600">{{ err('phone') }}</p>
            </div>
            <div>
              <label for="qf-consent" class="flex cursor-pointer items-start gap-3 text-sm">
                <input
                  id="qf-consent"
                  v-model="form.consent"
                  type="checkbox"
                  class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-[#fcc419]"
                >
                <span>I agree to the Lot Standard Co terms &amp; policies.</span>
              </label>
              <p v-if="err('consent')" class="mt-2 text-sm text-error-600">{{ err('consent') }}</p>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Buttons -->
      <div class="mt-6 flex items-center gap-4">
        <Transition name="back-btn">
          <button
            v-if="step > 1"
            type="button"
            class="back-btn inline-flex items-center gap-1 whitespace-nowrap font-semibold text-gray-600 transition-colors hover:text-tertiary-900"
            @click="back"
          >
            <BaseIcon name="i-mdi-arrow-left" height="18px" />
            Back
          </button>
        </Transition>
        <button
          type="submit"
          :disabled="submitting"
          class="continue-btn inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#fcc419] text-lg font-bold text-tertiary-900 transition-all hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-900 disabled:opacity-60"
        >
          {{ step === STEPS.length ? (submitting ? 'Sending…' : 'Send Request') : 'Continue' }}
          <BaseIcon name="i-mdi-arrow-right" height="20px" class="continue-arrow" />
        </button>
      </div>
      <p v-if="submitError" class="mt-3 text-sm text-error-600" role="alert">
        Sorry, we couldn't send your request. Please try again or call us at
        <a :href="`tel:${siteMeta.business.phone}`" class="font-semibold underline">{{ siteMeta.business.phoneDisplay }}</a>.
      </p>
    </form>
  </div>
</template>
<style scoped>
  .progress-fill {
    background: linear-gradient(to right, #3a4550, #fcc419);
    transition: width 0.45s cubic-bezier(0.65, 0, 0.25, 1);
  }
  .height-wrap {
    transition: height 0.3s ease;
  }

  /* Step transitions: slide out one way, in from the other. */
  .step-forward-enter-active,
  .step-forward-leave-active,
  .step-back-enter-active,
  .step-back-leave-active {
    transition:
      opacity 0.2s ease,
      transform 0.25s ease;
  }
  .step-forward-leave-to,
  .step-back-enter-from {
    opacity: 0;
    transform: translateX(-24px);
  }
  .step-forward-enter-from,
  .step-back-leave-to {
    opacity: 0;
    transform: translateX(24px);
  }

  /* Back button grows in beside Continue. */
  .back-btn-enter-active,
  .back-btn-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      max-width 0.3s ease,
      margin 0.3s ease;
    max-width: 6rem;
    overflow: hidden;
  }
  .back-btn-enter-from,
  .back-btn-leave-to {
    opacity: 0;
    transform: translateX(-8px);
    max-width: 0;
    margin-right: -1rem;
  }

  .continue-arrow {
    transition: transform 0.2s ease;
  }
  .continue-btn:hover .continue-arrow {
    transform: translateX(4px);
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-fill,
    .height-wrap,
    .step-forward-enter-active,
    .step-forward-leave-active,
    .step-back-enter-active,
    .step-back-leave-active,
    .back-btn-enter-active,
    .back-btn-leave-active,
    .continue-arrow {
      transition: none;
    }
  }
</style>
