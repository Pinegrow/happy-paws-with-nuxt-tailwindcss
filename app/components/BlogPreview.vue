<script setup lang="ts">
  defineProps({
    post: {
      type: Object,
      required: true,
    },
  })
</script>
<template>
  <div
    v-if="post"
    class="p-8 rounded-lg space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
  >
    <PostDate
      :date="post.date"
      class="text-primary-600 dark:text-primary-200"
    />
    <div class="space-y-5 xl:col-span-3">
      <div class="space-y-6">
        <h4>
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </h4>
        <div
          class="max-w-none dark:prose-invert lg:prose-lg mx-auto prose prose-neutral-800 dark:prose-neutral-100"
        >
          <ContentRenderer excerpt :value="post" />
        </div>
      </div>
      <h6>
        <NuxtLink class="link" aria-label="read more" :to="post._path"
          >Read more →</NuxtLink
        >
      </h6>
    </div>
  </div>
</template>
<style scoped></style>
