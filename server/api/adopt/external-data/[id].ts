import type { Pet, Pets } from '@/types/pets'
import { pets } from '@/db.json'
pets as Pets

const apiBaseUrl =
  'https://my-json-server.typicode.com/pinegrow/happy-paws-with-nuxt-tailwindcss'

export default defineEventHandler(async (event): Promise<Pet> => {
  const { id } = event.context.params

  let pet: Maybe<Pet>

  if (pets?.length) {
    pet = pets.find((pet) => +pet.id === +id)
  }

  if (!pet) {
    pet = await $fetch(`${apiBaseUrl}/pets/${id}`)

    if (!pet) {
      throw createError({
        statusCode: 404,
        message: 'Pet profile not fetched.',
      })
    }
  }

  return pet
})
