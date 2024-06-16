export const usePet = async (petId: number) => {
  // const { data, error } = await useFetch(`/api/adopt/external-data/${petId}`)
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
    // // Optimize any image urls in the data contents
    // const { optimizeImage } = useOptimizeImage()

    // return pet.value.image
    //   ? {
    //       ...pet.value,
    //       imageOptimized: optimizeImage(pet.value.image),
    //     }
    //   : pet.value
    return pet.value
  }

  return { pet, fetchPet }
}
