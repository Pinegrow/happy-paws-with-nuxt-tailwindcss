<script setup lang="ts">
  import { useArticles } from '@/composables/articles'

  definePageMeta({
    // layout: 'default',
    // name: 'articles',
    // alias: 'articles',
    title: 'Articles',
    description: 'Devour Knowledge, One Article at a Time!',
    hidden: true,
    navOrder: 4,
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const articleId = useRoute().params.id.toString()

  const { data: article } = await useAsyncData(articleId, async () => {
    const { getArticle } = useArticles()
    return await getArticle(+articleId)
  })

  useServerSeoMeta({
    description: () => article.value?.title,
  })

  useHead({
    title: () => article.value?.title,
  })
</script>
<template>
  <div>
    <ArticleCardHeader :cover="article.cover_image || article.social_image" />
    <ArticleCard :article="article" />
  </div>
</template>
<style scoped></style>
