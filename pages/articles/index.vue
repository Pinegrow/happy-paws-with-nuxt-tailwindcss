<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'articles',
    // alias: 'articles',
    title: 'Articles',
    description: 'Devour Knowledge, One Article at a Time!',
    navOrder: 4,
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <section>
    <TheHeader>
      <div class="container mx-auto px-4">
        <h2 class="mb-2 text-5xl">Articles</h2>
        <div class="flex items-center">
          <h6>Source for this blog</h6>
          <BaseButton
            size="xs"
            class="ml-2"
            color="secondary"
            to="https://developers.forem.com/api/v1"
            target="_blank"
            ><span>Click here</span>
          </BaseButton>
        </div>
        <div class="flex items-center mt-2">
          <h6>For free public APIs</h6>
          <BaseButton
            size="xs"
            class="ml-2"
            color="secondary"
            to="https://github.com/public-apis/public-apis#personality"
            target="_blank"
            ><span>Click here</span>
          </BaseButton>
        </div>
      </div>
    </TheHeader>
    <ArticleList />
  </section>
</template>
<style scoped></style>
