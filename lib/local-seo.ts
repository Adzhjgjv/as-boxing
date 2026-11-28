export const businessName = 'AS Boxing & Fitness'
export const businessPhoneDisplay = '07946 497738'
export const businessPhoneTel = '+447946497738'
export const businessStreetAddress = 'Belvedere Boxing Club, 66 Gilbert Rd'
export const businessLocality = 'Belvedere'
export const businessPostalCode = 'DA17 5DA'
export const businessCountry = 'GB'
export const businessAddressLine = `${businessStreetAddress}, ${businessLocality} ${businessPostalCode}`
export const businessNap = `${businessName}, ${businessAddressLine}, ${businessPhoneDisplay}`
export const instagramUrl = 'https://www.instagram.com/as.boxingfitness/'
export const businessId = 'https://www.asboxingfitness.com/#business'

export const areaServed = [
  { '@type': 'AdministrativeArea', name: 'Bexley' },
  { '@type': 'City', name: 'Erith' },
  { '@type': 'City', name: 'Belvedere' },
]

export const areaPageLinks = [
  { href: '/boxing-coach-bexley', label: 'Boxing Coach Bexley' },
  { href: '/boxing-coach-belvedere', label: 'Boxing Coach Belvedere' },
] as const

export const servicesInArea = [
  { href: '/one-to-one-boxing-coaching', label: '1-to-1 boxing coaching' },
  { href: '/boxing-for-beginners-belvedere', label: 'boxing for beginners' },
  { href: '/boxing-fitness-belvedere', label: 'boxing fitness and conditioning' },
  { href: '/boxing-personal-trainer-bexley', label: 'personal training' },
  { href: '/private-boxing-training-bexley', label: 'private boxing training' },
  { href: '/boxing-coaching-prices', label: 'boxing coaching prices' },
] as const

export const originalTitleSlugs = new Set([
  'boxing-fitness-training',
  'boxing-conditioning',
  'boxing-for-confidence',
  'boxing-for-weight-loss',
  'first-boxing-session',
  'private-boxing-vs-group-classes',
  'boxing-training-faq',
  'boxing-gloves-and-hand-wraps',
  'boxing-stance-for-beginners',
  'how-to-throw-a-jab',
  'boxing-footwork-for-beginners',
  'boxing-guard-basics',
  'boxing-warm-up',
  'how-often-should-you-box',
  'boxing-training-mistakes',
  'boxing-fitness-workout',
])

export function pageLocalRole(page: { slug: string; kind: string }): 'area' | 'service' | 'guide' {
  if (page.slug === 'boxing-coach-bexley') return 'area'
  if (page.kind === 'service') return 'service'
  return 'guide'
}

export function professionalServiceSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: businessName,
    url: 'https://www.asboxingfitness.com/',
    image: 'https://www.asboxingfitness.com/image.webp',
    logo: 'https://www.asboxingfitness.com/logo.webp',
    telephone: businessPhoneDisplay,
    email: 'as.boxingfitness@icloud.com',
    priceRange: '£50–£200',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessStreetAddress,
      addressLocality: businessLocality,
      addressRegion: 'Bexley',
      postalCode: businessPostalCode,
      addressCountry: businessCountry,
    },
    areaServed,
    sameAs: [instagramUrl],
  }
}
