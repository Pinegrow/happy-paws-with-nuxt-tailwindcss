import type { ImageOptimized } from './image'

export type Pet = {
  id: number
  name: string
  breed: string
  sex: string
  dateOfBirth: string
  image: string
  imageOptimized?: ImageOptimized
  microchip: string
  location: string
}

export type Pets = Pet[]
