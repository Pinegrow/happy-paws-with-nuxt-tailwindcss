<script setup lang="ts">
  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
    fromBg: {
      type: String,
      default: '#8B5CF6',
    },
    toBg: {
      type: String,
      default: '#D946EF',
    },
    image: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: 'i-vscode-icons:file-type-coffeelint',
    },
    author: {
      type: String,
      default: 'Pinegrow',
    },
    twitter: {
      type: String,
      default: '@vuedesigner',
    },
  })

  const backgroundImage = computed(() => {
    return {
      'background-image': `linear-gradient(
        to right,
        ${props.fromBg},
        ${props.toBg}
      );`,
    }
  })
</script>
<template>
  <div class="rounded-3xl w-full" :style="backgroundImage">
    <div class="flex flex-row h-full pl-6 py-6 w-full">
      <div class="flex flex-col w-1/2">
        <div data-pg-name="Logo" class="flex flex-row items-center">
          <!-- <Icon :name="logo" size="72" class="mt-4" /> -->
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="72px"
            xml:space="preserve"
            fill="currentColor"
            viewBox="0 0 240 240"
            height="72px"
          >
            <g transform="translate(17.704 -9.215)">
              <path
                d="M92.45 183.38a61.38 61.38 0 00-30.07 15.35 9.84 9.84 0 01-15.9-3.73 61.65 61.65 0 11115.83-.18 9.87 9.87 0 01-16 3.9 61.43 61.43 0 00-30.07-15.35"
                fill="#99cd31"
                stroke="#475f17"
                stroke-miterlimit="10"
                stroke-width="12"
              />
              <circle
                cx="17.18"
                cy="17.18"
                r="17.18"
                transform="rotate(-22.39 282.115 44.556)"
                fill="#99cd31"
                stroke="#475f17"
                stroke-miterlimit="10"
                stroke-width="12"
              />
              <circle
                cx="17.18"
                cy="17.18"
                r="17.18"
                transform="rotate(-22.39 179.693 -83.499)"
                fill="#99cd31"
                stroke="#475f17"
                stroke-miterlimit="10"
                stroke-width="12"
              />
              <circle
                cx="17.18"
                cy="17.18"
                r="17.18"
                transform="rotate(-67.61 176.48 -54.394)"
                fill="#99cd31"
                stroke="#475f17"
                stroke-miterlimit="10"
                stroke-width="12"
              />
              <circle
                cx="17.18"
                cy="17.18"
                r="17.18"
                transform="rotate(-67.61 119.616 -48.074)"
                fill="#99cd31"
                stroke="#475f17"
                stroke-miterlimit="10"
                stroke-width="12"
              />
              <circle
                cx="3.19"
                cy="3.19"
                r="3.19"
                transform="translate(101.16 179.05)"
                fill="#475f17"
              />
              <path
                d="M89.72 137a20.84 20.84 0 00-20.84 20.84v.16"
                fill="none"
                stroke="#475f17"
                stroke-miterlimit="10"
                stroke-width="12"
              />
              <path
                d="M15.7 47.82h-2.75v-2.76a3.4 3.4 0 00-6.79 0v2.76H3.4a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zm172.43 9.55h-2.76v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.76v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zM25.25 203.82H22.5v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79z"
                fill="#475f17"
              />
            </g>
          </svg>

          <span class="text-white font-extrabold ml-2 mt-4 p-4 text-6xl">
            {{ title }}
          </span>
        </div>
        <!-- <h1 class="p-4 text-6xl text-white">{{ title }}</h1> -->
        <h5 class="mt-8 p-4 text-white text-4xl" style="white-space: normal">
          <span>{{ description }}</span>
        </h5>
        <h5
          v-if="summary"
          class="mt-2 p-4 text-white text-2xl"
          style="white-space: normal"
        >
          {{ summary }}
        </h5>
        <div v-if="twitter" class="flex flex-row items-center mt-auto">
          <Icon name="logos:twitter" size="32" />
          <span class="ml-3 text-2xl text-white">{{ twitter }}</span>
        </div>
      </div>
      <div class="-my-6 w-1/2">
        <img
          cover
          :src="image"
          height="630"
          width="630"
          class="h-full rounded-r-3xl w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
