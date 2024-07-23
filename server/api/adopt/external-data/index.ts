import type { Pets } from '~~/types/pets'

export const allPets: Pets = []
export const somePets: Pets = []

const apiBaseUrl =
  'https://my-json-server.typicode.com/pinegrow/happy-paws-with-nuxt-tailwindcss'

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
  // If pets exists, don't refetch them
  // Remove this if we want to always fetch refresh data from the source

  if (allPets.length) {
    return {
      allPets,
      somePets,
    }
  }

  const _allPets: [] = await $fetch(`${apiBaseUrl}/pets`)
  allPets.push(..._allPets)

  if (!allPets) {
    throw createError({
      statusCode: 404,
      message: 'Pet profiles not fetched.',
    })
  }

  const _somePets: [] = fractionOfThePetsArray(allPets, 0.5)
  somePets.push(..._somePets)

  return {
    allPets,
    somePets,
  }
})
