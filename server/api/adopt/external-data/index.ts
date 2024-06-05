import type { Pets } from '@/types/pets'

export let allPets: Pets
export let somePets: Pets

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

  if (allPets) {
    return {
      allPets,
      somePets,
    }
  }

  allPets = await $fetch(`${apiBaseUrl}/pets`)

  if (!allPets) {
    throw createError({
      statusCode: 404,
      message: 'Pet profiles not fetched.',
    })
  }

  somePets = fractionOfThePetsArray(allPets, 0.5)

  return {
    allPets,
    somePets,
  }
})
