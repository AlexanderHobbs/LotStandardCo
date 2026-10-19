import { backgroundImageUrls } from '../theme/tokens'

const heroImageUrl =
  backgroundImageUrls['design-image-large'] ||
  backgroundImageUrls['design-image']

// Size/format the hero is served at. Shared by the CSS background and the
// preload in HeroSection so the browser fetches one file, not two.
const heroImageModifiers = { width: 1920, format: 'webp', quality: 70 }

export { heroImageUrl, heroImageModifiers }
