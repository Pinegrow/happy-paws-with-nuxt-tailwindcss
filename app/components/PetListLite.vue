<script setup lang="ts">
  const { somePets: pets } = await usePets()
</script>
<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h6 class="text-primary-100 dark:text-primary-700 uppercase">
              Adopt A Pet
            </h6>
            <h3 class="capitalize">Small Gesture For A Big Impact</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/adopt" color="secondary"
              ><span>Meet Them All ></span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <PetCard
            v-for="(pet, index) in pets"
            :key="index"
            v-bind="pet"
          ></PetCard>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
