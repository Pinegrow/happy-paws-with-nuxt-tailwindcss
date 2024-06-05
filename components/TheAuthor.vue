<script setup lang="ts">
  defineProps<{
    twitter: string
    gravatar?: string
    avatar?: string
    author: string
  }>()
</script>
<template>
  <dl
    class="dark:xl:border-gray-700 pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11"
  >
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul
        class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"
      >
        <li class="flex items-center space-x-2">
          <NuxtImg
            v-if="gravatar"
            preset="avatar"
            class="w-10 h-10 rounded-3xl"
            alt="author image"
            :src="'https://gravatar.com/avatar/' + gravatar"
          />

          <NuxtImg
            v-else-if="avatar"
            preset="avatar"
            class="w-10 h-10 rounded-3xl"
            alt="author image"
            :src="avatar"
          />
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd>{{ author }}</dd>
            <dt v-if="twitter" class="sr-only">Twitter</dt>
            <dd v-if="twitter">
              <NuxtLink
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                :to="'https://twitter.com/' + twitter"
                >{{ twitter }}</NuxtLink
              >
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
