<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = 'Adopt A Pet'
  const heroTitle = 'Thousands of homeless dogs, one act of kindness'
  const heroDescription =
    'Find your new furry friend today! We have a wide variety of lovable pets available for adoption. Come visit us and take home your new best friend!'
</script>
<template>
  <section class="container mx-auto pb-12 px-4">
    <BackgroundImageWrapper :image-url="heroImageUrl" class="rounded-3xl">
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"
              >
                Adopt A Pet
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                Thousands of homeless dogs, one act of kindness
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                Find your new furry friend today! We have a wide variety of
                lovable pets available for adoption. Come visit us and take home
                your new best friend!
              </p>
              <BaseButton
                size="xl"
                label="Adopt Now"
                target="_blank"
                to="https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">Adopt Now</div>
                <BaseIcon name="i-noto-dog-face" height="28px" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
