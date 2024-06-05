<script setup lang="ts">
  import site from '@/site'
  const { name, logo } = site
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <!-- <BaseIcon height="40" class="mt-2" :name="logo" /> -->
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="2.5em"
      xml:space="preserve"
      fill="currentColor"
      viewBox="0 0 240 240"
      height="2.5em"
      class="mr-2"
    >
      <g transform="translate(17.704 -9.215)">
        <path
          d="M92.45 183.38a61.38 61.38 0 00-30.07 15.35 9.84 9.84 0 01-15.9-3.73 61.65 61.65 0 11115.83-.18 9.87 9.87 0 01-16 3.9 61.43 61.43 0 00-30.07-15.35"
          fill="#99cd31"
          stroke="#475f17"
          stroke-miterlimit="10"
          stroke-width="12"
        ></path>
        <circle
          cx="17.18"
          cy="17.18"
          r="17.18"
          transform="rotate(-22.39 282.115 44.556)"
          fill="#99cd31"
          stroke="#475f17"
          stroke-miterlimit="10"
          stroke-width="12"
        ></circle>
        <circle
          cx="17.18"
          cy="17.18"
          r="17.18"
          transform="rotate(-22.39 179.693 -83.499)"
          fill="#99cd31"
          stroke="#475f17"
          stroke-miterlimit="10"
          stroke-width="12"
        ></circle>
        <circle
          cx="17.18"
          cy="17.18"
          r="17.18"
          transform="rotate(-67.61 176.48 -54.394)"
          fill="#99cd31"
          stroke="#475f17"
          stroke-miterlimit="10"
          stroke-width="12"
        ></circle>
        <circle
          cx="17.18"
          cy="17.18"
          r="17.18"
          transform="rotate(-67.61 119.616 -48.074)"
          fill="#99cd31"
          stroke="#475f17"
          stroke-miterlimit="10"
          stroke-width="12"
        ></circle>
        <circle
          cx="3.19"
          cy="3.19"
          r="3.19"
          transform="translate(101.16 179.05)"
          fill="#475f17"
        ></circle>
        <path
          d="M89.72 137a20.84 20.84 0 00-20.84 20.84v.16"
          fill="none"
          stroke="#475f17"
          stroke-miterlimit="10"
          stroke-width="12"
        ></path>
        <path
          d="M15.7 47.82h-2.75v-2.76a3.4 3.4 0 00-6.79 0v2.76H3.4a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zm172.43 9.55h-2.76v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.76v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zM25.25 203.82H22.5v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79z"
          fill="#475f17"
        ></path>
      </g>
    </svg>
    <h6
      class="text-primary-600 dark:text-primary-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ name }}
    </h6>
  </NuxtLink>
</template>
<style scoped></style>
