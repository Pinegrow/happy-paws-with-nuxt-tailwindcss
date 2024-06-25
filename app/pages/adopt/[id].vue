<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'Adopt Now',
    description: 'Adopt Your Fur Mate!',
    hidden: true,
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const route = useRoute()
  const { id: petId } = route.params

  const { fetchPet } = await usePet(+petId)

  const { id, name, breed, sex, dateOfBirth, image, microchip, location } =
    fetchPet()

  useServerSeoMeta({
    description: () => name || '',
  })

  useHead({
    title: () => name || '',
  })
</script>
<template>
  <div class="py-12">
    <div class="container mx-auto px-4 relative">
      <div class="container mx-auto pl-12 pr-8 pt-4 relative">
        <div class="px-8">
          <div class="flex flex-wrap lg:justify-between">
            <div class="py-4 text-center w-full lg:w-fit">
              <NuxtLink to="/adopt">
                <BaseButton><span>&lt;- Go Back</span> </BaseButton>
              </NuxtLink>
            </div>
            <div class="text-center w-full lg:w-fit">
              <h3 class="capitalize">{{ name }}</h3>
              <h6 class="uppercase">Animal ID: {{ id }}</h6>
            </div>
            <div
              class="flex items-center justify-center py-4 space-x-4 text-center w-full lg:w-fit"
            >
              <BaseIcon
                name="i-material-symbols-mark-email-unread-outline"
                height="28px"
              />
              <BaseIcon name="i-logos-whatsapp-icon" height="28px" />
              <BaseIcon name="i-logos-facebook" height="28px" />
              <BaseIcon name="i-logos-twitter" height="28px" />
            </div>
          </div>
          <div class="flex flex-wrap pt-8 w-full lg:flex-nowrap">
            <div
              class="flex flex-wrap justify-center text-center w-full lg:flex-nowrap lg:text-left"
            >
              <div class="w-full">
                <NuxtImg :src="image" class="rounded-xl w-full" :alt="name" />
              </div>
              <div class="py-8 w-full sm:px-16">
                <ul>
                  <li class="mb-4">
                    <span class="font-semibold">Breed:</span>
                    <span class="ml-2">{{ breed }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Age:</span>
                    <span class="ml-2">{{ dateOfBirth }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Gender:</span>
                    <span class="ml-2">{{ sex }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Microchip No:</span>
                    <span class="ml-2">{{ microchip }}</span>
                  </li>
                  <li
                    class="flex items-center justify-center mb-4 lg:justify-start"
                  >
                    <BaseIcon
                      name="i-material-symbols-add-location-alt-outline-rounded"
                      height="28px"
                      class="-ml-1 font-semibold"
                    />
                    <span class="ml-2">{{ location }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Includes:</span>
                    <span class="ml-2">Vaccination</span>
                  </li>
                </ul>
              </div>
              <div
                class="max-w-xs py-8 rounded-xl w-full sm:px-8 bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"
              >
                <ul>
                  <li class="flex items-center justify-center lg:justify-start">
                    <BaseIcon
                      name="i-material-symbols-check-box-outline"
                      height="28px"
                    /><span class="inline-block ml-2">Done</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <BaseIcon name="i-twemoji-sparkling-heart" height="24px" />
                    <span class="ml-2">Health Check</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <BaseIcon
                      name="i-bx-bxs-microchip"
                      height="24px"
                      class="text-tertiary-600 dark:text-tertiary-200"
                    />
                    <span class="ml-2">Microchipped</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <BaseIcon name="i-twemoji-worm" height="24px" />
                    <span class="ml-2">De-wormed</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <BaseIcon
                      name="i-healthicons-sexual-reproductive-health-outline"
                      height="24px"
                      class="text-indigo-600"
                    />
                    <span class="ml-2">De-sexed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 px-8 text-center lg:text-left">
            <p>
              To adopt
              <span class="mx-1 text-primary-600 dark:text-primary-200"
                >{{ name }} </span
              ><span>or learn more, please visit our adoption centre at </span
              ><span class="mx-1 text-primary-600 dark:text-primary-200"
                >{{ location }}.</span
              ><span
                >Appointments are not required and walk-ins are welcome.</span
              >
            </p>
            <p class="mt-2">
              Alternatively, please contact our {{ location }} team directly on
              <span class="text-primary-600 dark:text-primary-200"
                >03 2394 3284</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
