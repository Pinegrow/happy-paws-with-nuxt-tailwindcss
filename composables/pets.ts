export const usePets = async () => {
  // const { data, error } = await useFetch('/api/adopt/external-data')
  const { data, error } = await useFetch('/api/adopt/local-data')

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
    // // Optimize any image urls in the data contents
    // const { optimizeImage } = useOptimizeImage()

    return data.value.allPets.filter((pet) => !breed || pet.breed === breed)
    // .map((pet) =>
    //   pet.image
    //     ? {
    //         ...pet,
    //         imageOptimized: optimizeImage(pet.image),
    //       }
    //     : pet,
    // )
  }

  const { allPets, somePets } = data.value

  return { allPets, somePets, fetchBreed }
}
