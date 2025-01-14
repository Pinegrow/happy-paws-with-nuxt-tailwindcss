<script setup lang="ts">
  const route = useRoute()

  const pageMeta = computed(() => {
    return {
      title: route.meta.title,
      description: route.meta.description,
      ogImage: route.meta.ogImage,
      canonicalUrl: route.meta.canonicalUrl || route.fullPath,
      generator: route.meta.generator,
      tags: route.meta.tags,
    }
  })

  useHeadAndMeta(pageMeta)
  useOgImage()
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar class="fixed shadow z-20 bg-white dark:bg-neutral-950" />
      <div class="mt-24">
        <main class="shadow">
          <slot />
        </main>
      </div>
      <TheFooter />
    </div>
    <!-- </div> -->
  </div>
</template>

<style></style>
