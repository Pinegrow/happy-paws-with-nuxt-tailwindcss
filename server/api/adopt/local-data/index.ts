import type { Pets } from '~~/types/pets'
import { pets } from '~~/db.json'

const allPets: Pets = pets

const fractionOfThePetsArray = (pets, fraction) => {
  return pets
    .map((pet) => ({
      ...pet,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, Math.floor(pets.length * fraction))
}

export default defineEventHandler(async (/*event*/) => {
  const somePets: Pets = fractionOfThePetsArray(allPets, 0.5)

  return {
    allPets,
    somePets,
  }
})
