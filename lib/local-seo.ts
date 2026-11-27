export const businessName = 'AS Boxing & Fitness'
export const businessAddressLine = '66 Gilbert Rd, Belvedere, DA17 5DA'
export const businessPhoneTel = '+447946497738'
export const businessId = 'https://www.asboxingfitness.com/#business'

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
    image: 'https://www.asboxingfitness.com/image.png',
    logo: 'https://www.asboxingfitness.com/logo.png',
    telephone: businessPhoneTel,
    email: 'as.boxingfitness@icloud.com',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '66 Gilbert Rd',
      addressLocality: 'Belvedere',
      addressRegion: 'Bexley',
      postalCode: 'DA17 5DA',
      addressCountry: 'GB',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bexley' },
      { '@type': 'City', name: 'Belvedere' },
      { '@type': 'City', name: 'London' },
    ],
  }
}
