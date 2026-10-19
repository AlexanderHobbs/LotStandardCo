<script setup lang="ts">
  import type { Map as LeafletMap, Marker, GeoJSON } from 'leaflet'

  type StripedLot = {
    id: string
    name: string
    city: string
    type: string
    services: string[]
    lat: number
    lng: number
    before: string
    after: string
  }

  const serviceCounties = [
    {
      slug: 'logan',
      name: 'Logan County',
      lots: [
        {
          id: 'logan-1',
          name: 'Sample Main Street Plaza',
          city: 'Booneville',
          type: 'Retail plaza',
          services: ['Line Striping', 'Sealcoating'],
          lat: 35.1387,
          lng: -93.9226,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
        {
          id: 'logan-2',
          name: 'Sample Community Bank',
          city: 'Paris',
          type: 'Bank branch',
          services: ['Line Striping', 'ADA Compliance Marking'],
          lat: 35.2918,
          lng: -93.7294,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
      ],
    },
    {
      slug: 'franklin',
      name: 'Franklin County',
      lots: [
        {
          id: 'franklin-1',
          name: 'Sample Courthouse Square Parking',
          city: 'Ozark',
          type: 'Municipal lot',
          services: ['Line Striping', 'Signage Installation'],
          lat: 35.487,
          lng: -93.8272,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
        {
          id: 'franklin-2',
          name: 'Sample Family Clinic',
          city: 'Charleston',
          type: 'Medical office',
          services: ['ADA Compliance Marking', 'Warehouse Floor Marking'],
          lat: 35.2984,
          lng: -94.0388,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
      ],
    },
    {
      slug: 'sebastian',
      name: 'Sebastian County',
      lots: [
        {
          id: 'sebastian-1',
          name: 'Sample Riverfront Shopping Center',
          city: 'Fort Smith',
          type: 'Shopping center',
          services: ['Line Striping', 'Sealcoating', 'Safety Markings'],
          lat: 35.3859,
          lng: -94.3985,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
        {
          id: 'sebastian-2',
          name: 'Sample Greenwood Church',
          city: 'Greenwood',
          type: 'Church campus',
          services: ['Line Striping', 'ADA Compliance Marking'],
          lat: 35.2151,
          lng: -94.2527,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
      ],
    },
    {
      slug: 'crawford',
      name: 'Crawford County',
      lots: [
        {
          id: 'crawford-1',
          name: 'Sample Main Street Grocery',
          city: 'Van Buren',
          type: 'Grocery store',
          services: ['Line Striping', 'Sealcoating'],
          lat: 35.4368,
          lng: -94.3483,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
        {
          id: 'crawford-2',
          name: 'Sample Alma Distribution Yard',
          city: 'Alma',
          type: 'Warehouse',
          services: ['Line Striping', 'Signage Installation'],
          lat: 35.4776,
          lng: -94.2222,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
      ],
    },
    {
      slug: 'washington',
      name: 'Washington County',
      lots: [
        {
          id: 'washington-1',
          name: 'Sample Campus Apartments',
          city: 'Fayetteville',
          type: 'Apartment community',
          services: ['Line Striping', 'Warehouse Floor Marking', 'Sealcoating'],
          lat: 36.0626,
          lng: -94.1574,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
        {
          id: 'washington-2',
          name: 'Sample Springdale Business Park',
          city: 'Springdale',
          type: 'Office park',
          services: ['Line Striping', 'ADA Compliance Marking'],
          lat: 36.1867,
          lng: -94.1288,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
      ],
    },
    {
      slug: 'benton',
      name: 'Benton County',
      lots: [
        {
          id: 'benton-1',
          name: 'Sample Downtown Bentonville Retail',
          city: 'Bentonville',
          type: 'Retail center',
          services: ['Line Striping', 'Sealcoating', 'Signage Installation'],
          lat: 36.3729,
          lng: -94.2088,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
        {
          id: 'benton-2',
          name: 'Sample Rogers Medical Plaza',
          city: 'Rogers',
          type: 'Medical office',
          services: ['ADA Compliance Marking', 'Line Striping'],
          lat: 36.332,
          lng: -94.1185,
          before: '/images/placeholder-red.svg',
          after: '/images/placeholder-red.svg',
        },
      ],
    },
  ]

  // Interactive service-area map (Leaflet + OpenStreetMap, no API key).
  //  - every county we serve is outlined in red
  //  - clicking a county tab (or the county on the map) zooms to it and drops a
  //    pin on each lot we've striped there; pins open before/after photos
  // The tabs and lot list are plain HTML, so they're crawlable without JS.
  // Leaflet itself is only downloaded once the section nears the viewport.

  // On a town page (/areas/<town>) the map opens on that town's county; every
  // other page starts on the all-counties view.
  const route = useRoute()
  const TOWN_COUNTY: Record<string, string> = {
    alma: 'crawford',
    bentonville: 'benton',
    booneville: 'logan',
    charleston: 'franklin',
    fayetteville: 'washington',
    'fort-smith': 'sebastian',
    greenwood: 'sebastian',
    ozark: 'franklin',
    paris: 'logan',
    rogers: 'benton',
    springdale: 'washington',
    'van-buren': 'crawford',
  }
  const defaultCounty = () => {
    const town = route.path.match(/^\/areas\/([^/]+)\/?$/)?.[1]
    return (town && TOWN_COUNTY[town]) || 'all'
  }

  const selected = ref<string>(defaultCounty())
  // The footer (and this map) persists between pages, so re-pick the default
  // county when visitors move from one town page to another.
  watch(() => route.path, () => {
    selected.value = defaultCounty()
  })
  const rootEl = ref<HTMLElement | null>(null)
  const mapEl = ref<HTMLElement | null>(null)
  const mapReady = ref(false)

  // TEMPORARILY OFF: completed-lot pins, counts and before/after cards stay
  // hidden until we have real before/after photos. Flip to true to restore.
  const SHOW_COMPLETED_LOTS = false

  const totalLots = serviceCounties.reduce((sum, c) => sum + c.lots.length, 0)
  const activeCounty = computed(() =>
    serviceCounties.find((c) => c.slug === selected.value),
  )

  let map: LeafletMap | null = null
  let L: typeof import('leaflet') | null = null
  let countyLayer: GeoJSON | null = null
  const markers = new Map<string, Marker>()
  let markerLayer: import('leaflet').LayerGroup | null = null

  const BRAND = '#566568'
  const esc = (text: string) =>
    text.replace(
      /[&<>"']/g,
      (c) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[c] as string,
    )

  const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40"><path d="M15 0C6.7 0 0 6.6 0 14.8 0 26 15 40 15 40s15-14 15-25.2C30 6.6 23.3 0 15 0z" fill="${BRAND}" stroke="#fff" stroke-width="2"/><circle cx="15" cy="14.5" r="5.5" fill="#fff"/></svg>`

  const popupHtml = (lot: StripedLot) => `
    <div style="width:270px;font-family:inherit">
      <strong style="font-size:15px;display:block">${esc(lot.name)}</strong>
      <span style="font-size:12px;color:#6b7280">${esc(lot.city)} &middot; ${esc(lot.type)}</span>
      <div style="display:flex;gap:6px;margin:8px 0">
        <figure style="margin:0;flex:1">
          <img src="${esc(lot.before)}" alt="Before: ${esc(lot.name)}" width="1200" height="800" loading="lazy" style="width:100%;border-radius:8px;display:block" />
          <figcaption style="font-size:11px;font-weight:600;text-align:center;margin-top:2px">BEFORE</figcaption>
        </figure>
        <figure style="margin:0;flex:1">
          <img src="${esc(lot.after)}" alt="After: ${esc(lot.name)}" width="1200" height="800" loading="lazy" style="width:100%;border-radius:8px;display:block" />
          <figcaption style="font-size:11px;font-weight:600;text-align:center;margin-top:2px;color:${BRAND}">AFTER</figcaption>
        </figure>
      </div>
      <span style="font-size:12px">${lot.services.map(esc).join(' &middot; ')}</span>
    </div>`

  const styleFor = (slug: string) => {
    const isSelected = selected.value === slug
    const dimmed = selected.value !== 'all' && !isSelected
    return {
      color: BRAND,
      weight: isSelected ? 4 : 2,
      opacity: dimmed ? 0.45 : 1,
      fillColor: '#2b86ff',
      fillOpacity: isSelected ? 0.22 : dimmed ? 0.03 : 0.09,
    }
  }

  const render = () => {
    if (!map || !L || !countyLayer || !markerLayer) return

    countyLayer.eachLayer((layer: any) => {
      layer.setStyle(styleFor(layer.feature.properties.slug))
    })

    markerLayer.clearLayers()
    markers.clear()

    const county = activeCounty.value
    if (!county) {
      map.flyToBounds(countyLayer.getBounds().pad(0.05), { duration: 0.8 })
      return
    }

    for (const lot of SHOW_COMPLETED_LOTS ? county.lots : []) {
      const marker = L.marker([lot.lat, lot.lng], {
        title: lot.name,
        icon: L.divIcon({
          className: '',
          html: pinSvg,
          iconSize: [30, 40],
          iconAnchor: [15, 40],
          popupAnchor: [0, -36],
        }),
      }).bindPopup(popupHtml(lot), { maxWidth: 300 })
      marker.addTo(markerLayer)
      markers.set(lot.id, marker)
    }

    const layer = (countyLayer.getLayers() as any[]).find(
      (l) => l.feature.properties.slug === county.slug,
    )
    if (layer) map.flyToBounds(layer.getBounds().pad(0.1), { duration: 0.8 })
  }

  const select = (slug: string) => {
    selected.value = slug
  }

  // "View on map" from the lot list: open that lot's popup.
  const focusLot = (lot: StripedLot) => {
    const marker = markers.get(lot.id)
    if (!map || !marker) return
    map.flyTo([lot.lat, lot.lng], Math.max(map.getZoom(), 12), {
      duration: 0.6,
    })
    marker.openPopup()
    mapEl.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const initMap = async () => {
    if (map || !mapEl.value) return
    const [leaflet, geo] = await Promise.all([
      import('leaflet'),
      import('@/data/service-counties.geo.json'),
      import('leaflet/dist/leaflet.css'),
    ])
    L = (leaflet as any).default || leaflet
    if (!L || !mapEl.value) return

    map = L.map(mapEl.value, {
      scrollWheelZoom: false, // don't hijack page scrolling
      dragging: !L.Browser.mobile, // one-finger drags scroll the page on phones
    }).setView([35.75, -94.0], 8)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    countyLayer = L.geoJSON((geo as any).default || geo, {
      style: (feature) => styleFor(feature?.properties.slug),
      onEachFeature: (feature, layer) => {
        const county = serviceCounties.find(
          (c) => c.slug === feature.properties.slug,
        )
        layer.bindTooltip(county?.name || '', { sticky: true })
        layer.on('click', () => select(feature.properties.slug))
      },
    }).addTo(map)

    markerLayer = L.layerGroup().addTo(map)
    mapReady.value = true
    render()
  }

  watch(selected, render)

  // Load the map only when the section is about to scroll into view.
  const { stop } = useIntersectionObserver(
    rootEl,
    ([entry]) => {
      if (entry?.isIntersecting) {
        initMap()
        stop()
      }
    },
    { rootMargin: '300px' },
  )

  onBeforeUnmount(() => {
    map?.remove()
    map = null
  })
</script>

<template>
  <section ref="rootEl" class="container mx-auto px-4 pb-12">
    <div class="mx-auto mb-8 text-center lg:w-8/12">
      <p class="text-sm md:text-base lg:text-lg font-medium mb-2 text-primary-600 uppercase dark:text-primary-200">
        Our Service Area
      </p>
      <h2 class="capitalize !text-2xl md:!text-3xl lg:!text-4xl">Serving Arkansas's Greatest Counties</h2>
      <p>
        We stripe and maintain parking lots in {{ serviceCounties.length }}
        Arkansas counties.<template v-if="SHOW_COMPLETED_LOTS">
          Pick a county to see lots we've completed there, with before and
          after photos.</template
        ><template v-else> Pick a county to zoom in on it.</template>
      </p>
    </div>

    <!-- County tabs -->
    <div
      class="mb-6 flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Counties we serve"
    >
      <button
        type="button"
        role="tab"
        :aria-selected="selected === 'all'"
        class="rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-inset transition-colors"
        :class="
          selected === 'all'
            ? 'bg-primary-600 text-white ring-primary-600'
            : 'bg-white ring-neutral-300 hover:bg-neutral-100 dark:bg-neutral-950 dark:ring-neutral-700 dark:hover:bg-neutral-900'
        "
        @click="select('all')"
      >
        All Counties
      </button>
      <button
        v-for="county in serviceCounties"
        :key="county.slug"
        type="button"
        role="tab"
        :aria-selected="selected === county.slug"
        class="rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-inset transition-colors"
        :class="
          selected === county.slug
            ? 'bg-primary-600 text-white ring-primary-600'
            : 'bg-white ring-neutral-300 hover:bg-neutral-100 dark:bg-neutral-950 dark:ring-neutral-700 dark:hover:bg-neutral-900'
        "
        @click="select(county.slug)"
      >
        {{ county.name }}
      </button>
    </div>

    <div class="gap-6 lg:grid lg:grid-cols-3">
      <!-- Map -->
      <div
        class="relative z-0 mb-6 overflow-hidden rounded-3xl shadow-xl lg:col-span-2 lg:mb-0"
      >
        <div
          ref="mapEl"
          class="h-[380px] w-full bg-neutral-100 dark:bg-neutral-900 lg:h-[560px]"
          role="region"
          aria-label="Map of the counties we serve"
        />
        <div
          v-if="!mapReady"
          class="absolute inset-0 flex items-center justify-center text-sm text-neutral-500"
        >
          Loading map&hellip;
        </div>
      </div>

      <!-- Lot list for the selected county -->
      <div
        class="rounded-3xl bg-neutral-50 p-6 dark:bg-neutral-900 lg:max-h-[560px] lg:overflow-y-auto"
        role="tabpanel"
      >
        <template v-if="!activeCounty">
          <h3 class="font-bold !text-base md:!text-lg lg:!text-xl">Where we work</h3>
          <p v-if="SHOW_COMPLETED_LOTS" class="mb-4 text-sm">
            {{ totalLots }}+ completed lots across {{ serviceCounties.length }}
            counties. Select a county to see them on the map.
          </p>
          <p v-else class="mb-4 text-sm">
            We serve {{ serviceCounties.length }} counties. Select a county to
            zoom in on the map.
          </p>
          <ul class="space-y-2">
            <li v-for="county in serviceCounties" :key="county.slug">
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold shadow-sm ring-1 ring-neutral-200 transition-colors hover:bg-neutral-100 dark:bg-neutral-950 dark:ring-neutral-800 dark:hover:bg-neutral-800"
                @click="select(county.slug)"
              >
                <span>
                  {{ county.name }}
                </span>
                <span
                  v-if="SHOW_COMPLETED_LOTS"
                  class="text-xs text-primary-600 dark:text-primary-200"
                >
                  {{ county.lots.length }} lots
                </span>
              </button>
            </li>
          </ul>
        </template>

        <template v-else>
          <h3 class="font-bold !text-base md:!text-lg lg:!text-xl">{{ activeCounty.name }}</h3>
          <p v-if="SHOW_COMPLETED_LOTS" class="mb-4 text-sm">
            {{ activeCounty.lots.length }} completed lots
          </p>
          <p v-else class="text-sm">We stripe and maintain lots here.</p>
          <ul v-if="SHOW_COMPLETED_LOTS" class="space-y-4">
            <li
              v-for="lot in activeCounty.lots"
              :key="lot.id"
              class="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-950 dark:ring-neutral-800"
            >
              <div class="mb-2 flex gap-2">
                <figure class="flex-1">
                  <img
                    :src="lot.before"
                    :alt="`Before: ${lot.name}`"
                    width="1200"
                    height="800"
                    loading="lazy"
                    class="w-full rounded-lg"
                  >
                  <figcaption
                    class="mt-1 text-center text-[11px] font-semibold"
                  >
                    BEFORE
                  </figcaption>
                </figure>
                <figure class="flex-1">
                  <img
                    :src="lot.after"
                    :alt="`After: ${lot.name}`"
                    width="1200"
                    height="800"
                    loading="lazy"
                    class="w-full rounded-lg"
                  />
                  <figcaption
                    class="mt-1 text-center text-[11px] font-semibold text-primary-600 dark:text-primary-200"
                  >
                    AFTER
                  </figcaption>
                </figure>
              </div>
              <p class="font-semibold">{{ lot.name }}</p>
              <p class="text-xs text-neutral-500 dark:text-neutral-400">
                {{ lot.city }} &middot; {{ lot.type }}
              </p>
              <p class="mt-1 text-xs">{{ lot.services.join(' · ') }}</p>
              <button
                type="button"
                class="mt-2 text-xs font-semibold text-primary-600 hover:underline dark:text-primary-200"
                @click="focusLot(lot)"
              >
                View on map &rarr;
              </button>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </section>
</template>
