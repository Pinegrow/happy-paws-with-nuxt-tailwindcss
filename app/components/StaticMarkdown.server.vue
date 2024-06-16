<script setup lang="ts">
  const { base, path } = defineProps({
    base: {
      type: String,
      default: '/',
    },
    path: {
      type: String,
      required: true,
    },
  })

  const { data: post } = await useAsyncData(path, () => {
    return queryContent(base, path).findOne()
  })

  useServerSeoMeta({
    description: () => post.value?.title,
  })

  useHead({
    title: () => post.value?.title,
  })
</script>
<template>
  <div
    id="post"
    class="dark:prose-invert dark:prose-gray-100 flex flex-col heading-offset max-w-none prose prose-gray-800 rounded-lg"
  >
    <ContentRenderer id="content" :value="post">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>
<style scoped></style>
