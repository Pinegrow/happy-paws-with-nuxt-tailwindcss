<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="p-4 w-full lg:w-6/12">
        <NuxtImg
          src="https://images.unsplash.com/photo-1528301725143-1ba694832e77?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDExfHxraWRzJTIwYW5pbWFsfGVufDB8fHx8MTYzMDQ2NTQwOQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=650&fit=crop"
          class="rounded-3xl w-full"
          alt="Our Mission"
        />
      </div>
      <div class="mx-auto p-4 w-full lg:w-5/12">
        <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
          Our Mission
        </h6>
        <h3 class="capitalize mb-2">
          Life changing experience for a valuable cause
        </h3>
        <p class="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.
        </p>
        <BaseButton size="xl" to="/articles"> Learn More </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
