<script setup lang="ts">
// Looping mock-up of how we split a lot into sections, drawn over an aerial
// photo of a real lot: whole lot open, the top half worked on while traffic
// uses the bottom, flip, then the finished lot with a checkmark. Each half has
// its own driveway off the street, so the open half stays reachable while the
// other is closed.
const image = '/images/lot-section-image.png'
// The same lot after the work: fresh seal and stripes. Same framing as the photo above.
const renewedImage = '/images/lot-section-renewed.png'

const phases = [
  {
    label: "Open Lot",
    caption:
      "We start with the whole lot open and plan the sections around your busiest hours.",
  },
  {
    label: "First Section",
    caption:
      "The first section is coned off and our crew works there while customers keep using the bottom half.",
  },
  {
    label: "Next Section",
    caption:
      "Then we flip it. Traffic moves to the finished top half while we complete the next section.",
  },
  {
    label: "Renewed Lot",
    caption:
      "The whole lot is back in service, and we walk it with you before we call it done.",
  },
];
const durations = [3200, 5200, 5200, 3800];

const phase = ref(0);
const workingHalf = computed<"top" | "bottom" | null>(() =>
  phase.value === 1 ? "top" : phase.value === 2 ? "bottom" : null,
);

// Only run the loop while the section is on screen.
const root = ref<HTMLElement | null>(null);
const visible = useElementVisibility(root);
let timer: ReturnType<typeof setTimeout> | undefined;
const schedule = () => {
  timer = setTimeout(() => {
    phase.value = (phase.value + 1) % phases.length;
    schedule();
  }, durations[phase.value]);
};
watch(visible, (isVisible) => {
  clearTimeout(timer);
  if (isVisible) schedule();
});
onBeforeUnmount(() => clearTimeout(timer));

// Lot geometry (SVG units = pixels of /images/lot-section-image.png, 1711 x
// 919). Four rows of angled stalls: two bays, each a pair of rows around a
// two-lane aisle, split by a cross lane whose yellow centre line (y=518) is
// where the lot is sectioned off. x0 is the x of a reference stall line (at its
// bottom end for rows that lean right, its top end for rows that lean left).
const halves = ["top", "bottom"] as const;
const IMG_W = 1711;
const IMG_H = 919;
// Size the photo is served at on 1x screens (same shape; it shows about 850px
// wide on desktop). NuxtImg adds a 2x version, which is about the photo's own
// size, so retina screens still get it sharp without a bigger download.
const IMG_LOAD_W = 856;
const IMG_LOAD_H = 460;
const SPLIT_Y = 518;
const rows = [
  { half: "top", x0: 290, pitch: 46.25, yt: 208, yb: 290, lean: 40, dir: 1 },
  { half: "top", x0: 203, pitch: 49.5, yt: 405, yb: 487, lean: 49, dir: -1 },
  { half: "bottom", x0: 205, pitch: 50, yt: 560, yb: 640, lean: 43, dir: 1 },
  { half: "bottom", x0: 250, pitch: 50, yt: 758, yb: 845, lean: 45, dir: -1 },
] as const;
// The same four rows in the renewed photo: wider stalls, so fewer of them.
const renewedRows = [
  { half: "top", x0: 187, pitch: 55.4, yt: 210, yb: 285, lean: 44, dir: 1 },
  { half: "top", x0: 196, pitch: 55.4, yt: 410, yb: 486, lean: 44, dir: -1 },
  { half: "bottom", x0: 200, pitch: 55.8, yt: 568, yb: 640, lean: 44, dir: 1 },
  { half: "bottom", x0: 198, pitch: 55.5, yt: 764, yb: 840, lean: 42, dir: -1 },
] as const;

const palette = ["#e5e7eb", "#94a3b8", "#60a5fa", "#f87171"];
// Seeded, so the server and client render the same lot.
let seed = 7;
const rand = () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647;
};
// A car in roughly half the stalls, turned to follow the stall lines.
const makeParked = (layout: readonly (typeof rows)[number][] | typeof renewedRows) =>
  layout.flatMap((r) =>
    Array.from({ length: 30 }, (_, k) => k - 3).flatMap((k) => {
      const lineX = r.x0 + k * r.pitch;
      const cx = lineX + r.lean / 2 + r.pitch / 2;
      if (cx < 200 || cx > 1480 || rand() > 0.5) return [];
      const cy = (r.yt + r.yb) / 2;
      const angle =
        ((Math.atan(r.lean / (r.yb - r.yt)) * 180) / Math.PI) * r.dir;
      return [
        {
          half: r.half,
          color: palette[Math.floor(rand() * palette.length)],
          transform: `translate(${cx.toFixed(1)} ${cy}) rotate(${angle.toFixed(1)}) translate(-14 -30)`,
        },
      ];
    }),
  );
const parked = makeParked(rows);
const parkedRenewed = makeParked(renewedRows);
// Which set of parked cars is showing in each half: the old stalls until the
// crew starts, nothing while the half is closed, then the renewed stalls once
// the half has reopened (top after step 2, bottom after step 3).
const showParked = (half: "top" | "bottom", renewed: boolean) => {
  const untouched = half === "top" ? phase.value === 0 : phase.value <= 1;
  const reopened = half === "top" ? phase.value >= 2 : phase.value >= 3;
  return renewed ? reopened : untouched;
};

// Moving cars. `from`/`to` are offsets for the drive animation.
type Car = {
  pos: number;
  from: number;
  to: number;
  dur: number;
  delay: number;
  color: string;
};
const car = (
  pos: number,
  from: number,
  to: number,
  dur: number,
  delay: number,
  color: string,
): Car => ({ pos, from, to, dur, delay, color });
// Aisle lanes (y of lane centre): west-bound on the north side, east-bound south.
const topAisle = [
  car(382, 170, 1520, 26, -4, "#60a5fa"),
  car(322, 1530, 160, 28, -14, "#e5e7eb"),
];
const bottomAisle = [
  car(728, 170, 1520, 28, -15, "#f87171"),
  car(670, 1530, 160, 26, -6, "#94a3b8"),
];
// The street along the left edge: x of the lane's car, vertical travel.
const street = [
  car(80, 1000, -100, 20, -5, "#e5e7eb"),
  car(20, -100, 1000, 22, -13, "#60a5fa"),
];
const driveStyle = (c: Car) => ({
  "--from": `${c.from}px`,
  "--to": `${c.to}px`,
  animationDuration: `${c.dur}s`,
  animationDelay: `${c.delay}s`,
});

const badge = (half: "top" | "bottom") => {
  if (phase.value === 3) return { text: "DONE", color: "#16a34a" };
  if (workingHalf.value === half)
    return { text: "WORK ZONE", color: "#d97706" };
  return { text: "OPEN", color: "#16a34a" };
};

// The photo shows the lot as it is today (worn and cracked). The renewed photo
// is faded in over each half as the crew finishes it (top during step 2,
// bottom during step 3), and fades back out when the loop restarts. Each copy
// is clipped to its half of the paved area.
const pct = (n: number, of: number) => `${((n / of) * 100).toFixed(2)}%`;
const LOT = { left: 130, right: 1548, top: 195, bottom: 850 };
const clip = (top: number, bottom: number, left: number, right: number) =>
  `inset(${pct(top, IMG_H)} ${pct(IMG_W - right, IMG_W)} ${pct(IMG_H - bottom, IMG_H)} ${pct(left, IMG_W)})`;
const halfClip = {
  top: clip(LOT.top, SPLIT_Y, LOT.left, LOT.right),
  bottom: clip(SPLIT_Y, LOT.bottom, LOT.left, LOT.right),
};
const isDone = (half: "top" | "bottom") =>
  half === "top" ? phase.value >= 1 : phase.value >= 2;
const renewedStyle = (half: "top" | "bottom") => ({
  clipPath: halfClip[half],
  opacity: isDone(half) ? 1 : 0,
  transition:
    phase.value === 0 ? "opacity .7s ease" : "opacity 3.5s ease .6s",
});

// Lane the crew truck drives along and the centre line of each badge.
const laneY = { top: 352, bottom: 698 };
const seamCones = [180, 420, 660, 900, 1140, 1380, 1520];
const entranceCones = { top: [300, 340, 380], bottom: [650, 692, 735] };
</script>

<template>
  <section
    ref="root"
    class="container mx-auto px-4 pb-20 pt-8 md:pb-28 md:pt-12"
  >
    <div class="mx-auto w-full text-center lg:w-7/12">
      <p
        class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg eyebrow-dash"
      >
        Minimal Downtime
      </p>
      <h2 class="mt-3 !text-2xl capitalize md:!text-3xl lg:!text-4xl">
        We Work In Systems, So You Stay Open
      </h2>
      <p class="mt-4">
        We split your lot in two and work one side at a time. Your customers,
        tenants and deliveries keep moving on the other side, so there is never
        a day the whole lot is closed.
      </p>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: { duration: 600, ease: 'easeOut' },
      }"
      class="mx-auto mt-10 max-w-6xl rounded-3xl bg-neutral-50 p-3 dark:bg-neutral-900 sm:p-5"
    >
      <!-- Steps sit to the left of the lot on desktop, below it on small screens. -->
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <!-- The real aerial photo, with the animation drawn over it in the same
             coordinates (viewBox = photo size in pixels). -->
        <div
          class="relative order-1 w-full min-w-0 overflow-hidden rounded-2xl lg:order-2 lg:flex-1"
          :style="{ aspectRatio: `${IMG_W} / ${IMG_H}` }"
        >
          <NuxtImg
            :src="image"
            :width="IMG_LOAD_W"
            :height="IMG_LOAD_H"
            format="webp"
            loading="lazy"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <NuxtImg
            v-for="half in halves"
            :key="`renewed${half}`"
            :src="renewedImage"
            :width="IMG_LOAD_W"
            :height="IMG_LOAD_H"
            format="webp"
            loading="lazy"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 h-full w-full object-cover"
            :style="renewedStyle(half)"
          />
          <svg
            :viewBox="`0 0 ${IMG_W} ${IMG_H}`"
            class="absolute inset-0 block h-full w-full"
            role="img"
            aria-label="Animated aerial view of a parking lot: the full lot is open, then the top half is closed for work while traffic uses the bottom half, then the halves swap, and the finished lot is shown with a checkmark."
          >
            <defs>
              <g id="lot-car-h">
                <rect width="66" height="30" rx="9" fill="currentColor" />
                <rect
                  x="15"
                  y="4"
                  width="36"
                  height="22"
                  rx="6"
                  fill="rgba(0,0,0,.28)"
                />
              </g>
              <g id="lot-car-v">
                <rect width="28" height="60" rx="9" fill="currentColor" />
                <rect
                  x="4"
                  y="13"
                  width="20"
                  height="34"
                  rx="6"
                  fill="rgba(0,0,0,.28)"
                />
              </g>
              <g id="lot-truck">
                <rect
                  width="34"
                  height="22"
                  rx="3"
                  fill="#f59e0b"
                  stroke="#92400e"
                  stroke-width="1.5"
                />
                <rect
                  x="36"
                  y="1"
                  width="18"
                  height="20"
                  rx="5"
                  fill="#fff"
                  stroke="#92400e"
                  stroke-width="1.5"
                />
                <rect x="43" y="4" width="8" height="14" rx="2" fill="#93c5fd" />
                <circle cx="14" cy="11" r="4" fill="#ef4444" />
              </g>
            </defs>

            <!-- Parked cars: emptied while a half is worked on, then back in the renewed stalls -->
            <g v-for="renewed in [false, true]" :key="String(renewed)">
              <use
                v-for="(c, i) in renewed ? parkedRenewed : parked"
                :key="i"
                href="#lot-car-v"
                :transform="c.transform"
                :style="{ color: c.color }"
                class="transition-opacity duration-700"
                :class="
                  showParked(c.half, renewed) ? 'opacity-100' : 'opacity-0'
                "
              />
            </g>

            <!-- Traffic: street always, each aisle only while its half is open -->
            <g>
              <g
                v-for="(c, i) in street"
                :key="i"
                class="lot-car-y"
                :style="driveStyle(c)"
              >
                <use
                  href="#lot-car-v"
                  :x="c.pos"
                  y="0"
                  :style="{ color: c.color }"
                />
              </g>
            </g>
            <g
              class="transition-opacity duration-700"
              :class="workingHalf === 'top' ? 'opacity-0' : 'opacity-100'"
            >
              <g
                v-for="(c, i) in topAisle"
                :key="i"
                class="lot-car"
                :style="driveStyle(c)"
              >
                <use
                  href="#lot-car-h"
                  :y="c.pos - 15"
                  :style="{ color: c.color }"
                />
              </g>
            </g>
            <g
              class="transition-opacity duration-700"
              :class="workingHalf === 'bottom' ? 'opacity-0' : 'opacity-100'"
            >
              <g
                v-for="(c, i) in bottomAisle"
                :key="i"
                class="lot-car"
                :style="driveStyle(c)"
              >
                <use
                  href="#lot-car-h"
                  :y="c.pos - 15"
                  :style="{ color: c.color }"
                />
              </g>
            </g>

            <!-- Crew truck working the closed half's aisle -->
            <g
              v-for="(y, half) in laneY"
              :key="half"
              class="transition-opacity duration-700"
              :class="workingHalf === half ? 'opacity-100' : 'opacity-0'"
            >
              <g
                class="lot-car"
                :style="driveStyle(car(0, 190, 1380, 14, -2, ''))"
              >
                <use
                  href="#lot-truck"
                  :transform="`translate(0 ${y - 18}) scale(1.6)`"
                />
              </g>
            </g>

            <!-- Work zone highlight -->
            <rect
              v-for="(y, half) in { top: 200, bottom: 524 }"
              :key="`zone${half}`"
              x="150"
              :y="y"
              width="1392"
              height="320"
              rx="14"
              fill="#f59e0b"
              fill-opacity=".26"
              stroke="#f59e0b"
              stroke-width="5"
              stroke-dasharray="22 14"
              class="transition-opacity duration-700"
              :class="workingHalf === half ? 'opacity-100' : 'opacity-0'"
            />

            <!-- Cones: along the cross lane, and across the closed half's driveway -->
            <g
              class="transition-opacity duration-700"
              :class="workingHalf ? 'opacity-100' : 'opacity-0'"
            >
              <g
                v-for="x in seamCones"
                :key="x"
                :transform="`translate(${x} ${SPLIT_Y}) scale(1.7)`"
              >
                <polygon points="0,-11 7,8 -7,8" fill="#f97316" />
                <rect x="-3" y="-2" width="6" height="3" fill="#fff" />
                <rect x="-9" y="8" width="18" height="4" rx="2" fill="#c2410c" />
              </g>
            </g>
            <g
              v-for="(ys, half) in entranceCones"
              :key="`entr${half}`"
              class="transition-opacity duration-700"
              :class="workingHalf === half ? 'opacity-100' : 'opacity-0'"
            >
              <g
                v-for="y in ys"
                :key="y"
                :transform="`translate(146 ${y}) scale(1.7)`"
              >
                <polygon points="0,-11 7,8 -7,8" fill="#f97316" />
                <rect x="-3" y="-2" width="6" height="3" fill="#fff" />
                <rect x="-9" y="8" width="18" height="4" rx="2" fill="#c2410c" />
              </g>
            </g>

            <!-- Section badges, over the grass at the right of the lot -->
            <g v-for="(y, half) in laneY" :key="`badge${half}`">
              <rect
                x="1556"
                :y="y - 25"
                width="150"
                height="50"
                rx="25"
                class="transition-colors duration-500"
                :fill="badge(half).color"
              />
              <text
                x="1631"
                :y="y + 8"
                text-anchor="middle"
                fill="#fff"
                font-size="22"
                font-weight="700"
                letter-spacing=".5"
              >
                {{ badge(half).text }}
              </text>
            </g>

            <!-- Completed checkmark -->
            <g :transform="`translate(855 ${SPLIT_Y}) scale(1.7)`">
              <g
                class="lot-check transition-all duration-500"
                :class="
                  phase === 3 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                "
              >
                <circle r="42" fill="#16a34a" stroke="#fff" stroke-width="5" />
                <path
                  d="M-18 2 L-5 15 L19 -13"
                  fill="none"
                  stroke="#fff"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>

        <div class="order-2 lg:order-1 lg:w-60 lg:shrink-0">
          <ol
            class="flex flex-wrap justify-center gap-2 lg:flex-col lg:flex-nowrap lg:justify-start"
            aria-label="Steps shown in the animation"
          >
            <li
              v-for="(p, i) in phases"
              :key="p.label"
              class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-500 lg:rounded-2xl lg:py-3 lg:text-base"
              :class="
                phase === i
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
              "
            >
              {{ i + 1 }}. {{ p.label }}
            </li>
          </ol>
          <p
            class="mx-auto mt-3 min-h-[3rem] max-w-xl text-center text-sm md:text-base lg:mt-4 lg:min-h-[6rem] lg:text-left"
            aria-live="off"
          >
            {{ phases[phase].caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lot-car,
.lot-car-y {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.lot-car {
  animation-name: lot-drive;
}
.lot-car-y {
  animation-name: lot-drive-y;
}
@keyframes lot-drive {
  0% {
    transform: translateX(var(--from));
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    transform: translateX(var(--to));
    opacity: 0;
  }
}
@keyframes lot-drive-y {
  0% {
    transform: translateY(var(--from));
    opacity: 0;
  }
  6% {
    opacity: 1;
  }
  94% {
    opacity: 1;
  }
  100% {
    transform: translateY(var(--to));
    opacity: 0;
  }
}
.lot-check {
  transform-box: fill-box;
  transform-origin: center;
}
@media (prefers-reduced-motion: reduce) {
  .lot-car,
  .lot-car-y {
    animation-play-state: paused;
  }
}
</style>
