import type { Pet, Pets } from '~~/types/pets'
import { pets as allPets } from '~~/db.json'

const pets: Pets = allPets

export default defineEventHandler(async (event): Promise<Pet> => {
  const { id } = event.context.params

  const pet: Maybe<Pet> = pets.find((pet) => +pet.id === +id)
  if (!pet) {
    throw createError({
      statusCode: 404,
      message: 'Pet profile not found.',
    })
  }

  return pet
})
