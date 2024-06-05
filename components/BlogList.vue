<script setup lang="ts">
  const posts = await getPosts()
</script>
<template>
  <section>
    <div class="container flex justify-center mx-auto px-4 relative">
      <div class="rounded-lg">
        <div class="flex flex-wrap justify-center">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="post of posts" :key="post._path">
              <BlogPreview :post="post" class="p-12" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
