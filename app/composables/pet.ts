import { removeUrlParamsAndHash } from '@/utils/url'

export const usePet = async (petId: number) => {
  // const { data: pet, error } = await useFetch(`/api/adopt/external-data/${petId}`)
  const { data: pet, error } = await useFetch(`/api/adopt/local-data/${petId}`)

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('pet', async () => {
  //   return await $fetch(`/api/store/local-data/${petId}`)
  // })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch pet profile for id ${petId}.`,
    })
  }

  const fetchPet = () => {
    return {
      ...pet.value,
      image: removeUrlParamsAndHash(pet.value.image),
    }
  }

  return { pet, fetchPet }
}
