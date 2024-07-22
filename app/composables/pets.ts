import { removeUrlParamsAndHash } from '@/utils/url'

export const usePets = async () => {
  // const { data, error } = await useFetch('/api/adopt/external-data')
  const { data, error } = await useFetch('/api/adopt/local-data', {
    transform: ({ allPets, somePets }) => {
      return {
        allPets: allPets.map((pet) => ({
          ...pet,
          image: removeUrlParamsAndHash(pet.image),
        })),
        somePets: somePets.map((pet) => ({
          ...pet,
          image: removeUrlParamsAndHash(pet.image),
        })),
      }
    },
  })

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('pets', async () => {
  //   return await $fetch('/api/store/local-data')
  // })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch pet profiles.`,
    })
  }

  const fetchBreed = (breed?: string) => {
    return data.value.allPets.filter((pet) => !breed || pet.breed === breed)
  }

  const { allPets, somePets } = data.value

  return { allPets, somePets, fetchBreed }
}
