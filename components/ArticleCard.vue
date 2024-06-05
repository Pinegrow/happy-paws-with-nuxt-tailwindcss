<script setup lang="ts">
  defineProps({
    article: {
      type: Object,
      required: true,
    },
  })
</script>
<template>
  <section v-if="article" class="py-8">
    <div class="container justify-center mx-auto px-4 relative">
      <div class="-mt-36 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
        <div class="flex flex-col h-full rounded-lg">
          <div class="p-2 sm:p-8">
            <NuxtLink :href="article.url" external target="_blank">
              <h3
                class="font-semibold leading-tight text-xl whitespace-pre-wrap"
              >
                {{ article.title }}
              </h3>
            </NuxtLink>
            <div
              class="border-t flex items-center justify-between mt-auto p-4 text-xs"
            >
              <div>
                <div
                  v-if="article.user"
                  class="inline-flex items-center space-x-2"
                  variant="ghost"
                >
                  <NuxtImg
                    preset="avatar"
                    class="h-12 rounded-3xl w-12"
                    :alt="article.user.name"
                    :src="article.user.profile_image"
                  />
                  <div>
                    <h4 class="font-semibold text-base">
                      {{ article.user.name }}
                    </h4>
                    <p>{{ article.published_at }}</p>
                  </div>
                </div>
              </div>
              <span>{{ article.reading_time_minutes }} min read</span>
            </div>
            <div class="font-semibold ml-8 mt-4 space-x-2 text-xs">
              <BaseButton
                v-for="(tag, index) in article.tags"
                :key="index"
                :label="tag"
                color="secondary"
              >
              </BaseButton>
            </div>
            <div
              class="dark:prose-invert dark:prose-neutral-100 prose prose-neutral-800 md:max-w-none lg:prose-lg"
            >
              <p v-html="article.body_html"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
