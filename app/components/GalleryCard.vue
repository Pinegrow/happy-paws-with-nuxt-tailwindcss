<script setup lang="ts">
  const props = defineProps({
    imageUrl: {
      type: String,
      required: true,
    },
  })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
  <div class="flex p-2 w-1/2 sm:w-4/12">
    <div class="block h-full overflow-hidden rounded-xl hover:opacity-75">
      <NuxtImg class="h-full object-cover w-full" :src="imageUrl" />
    </div>
  </div>
</template>
<style scoped></style>
