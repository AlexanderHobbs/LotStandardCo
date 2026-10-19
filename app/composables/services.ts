import type { Services } from '../../types/services'
import { services } from '../data/services.json'

export const useServices = () => {
  const allServices: Services = services

  return { allServices }
}
