import type { Services } from '~~/types/services'
import { services } from '~~/app/data/services.json'

const allServices: Services = services

const fractionOfTheServicesArray = (services: Services, fraction: number): Services => {
  return services
    .map((service) => ({
      ...service,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, Math.floor(services.length * fraction))
}

export default defineEventHandler(async (/*event*/) => {
  const someServices: Services = fractionOfTheServicesArray(allServices, 0.5)

  return {
    allServices,
    someServices,
  }
})
