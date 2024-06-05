<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheHeader',
  // 	},
  // })
</script>
<template>
  <div
    class="relative bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="h-72 bg-primary-600 dark:bg-primary-200 text-white dark:text-neutral-950 w-full"
      fill="currentColor"
      preserveAspectRatio="none"
    >
      <path
        fill-opacity="1"
        d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,245.3C672,224,768,192,864,192C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <div class="absolute left-10 top-10 sm:left-20">
      <slot>Header</slot>
    </div>
  </div>
</template>
<style scoped></style>
