<script setup lang="ts">
  const props = defineProps({
    article: {
      type: Object,
      required: true,
    },
  })

  const emit = defineEmits(['fetch-tag', 'fetch-user'])

  const fetchTag = (tag) => {
    emit('fetch-tag', tag)
  }

  const fetchUser = (user) => {
    emit('fetch-user', user)
  }

  const articleLink = computed(() => {
    if (props.article) {
      return `/articles/${props.article.id}`
    }
  })
</script>
<template>
  <div class="h-full bg-neutral-50 dark:bg-neutral-900 rounded-lg">
    <div
      class="flex flex-col h-full overflow-hidden rounded-lg shadow surface-container"
    >
      <NuxtLink class="-mt-2 -mx-6" :to="articleLink">
        <NuxtImg :alt="article.title" :src="article.social_image" />
      </NuxtLink>
      <div class="grow p-4">
        <NuxtLink class="-mx-6 mb-2 whitespace-pre-wrap" :to="articleLink">
          <h5>
            {{ article.title }}
          </h5>
        </NuxtLink>
        <p class="dark:prose-invert prose prose-gray">
          {{ article.description }}
        </p>
        <div class="font-semibold mt-4 text-xs">
          <BaseButton
            v-for="(tag, index) in article.tag_list"
            :key="index"
            class="mb-1 mr-1"
            size="xs"
            color="secondary"
            @click="fetchTag(tag)"
            >{{ tag }}</BaseButton
          >
        </div>
      </div>
      <div class="bg-primary-500">
        <div
          class="flex items-center justify-between mt-auto p-4 rounded-b-lg shadow-2xl"
        >
          <BaseButton
            v-if="article.user"
            class="!bg-transparent flex items-center mr-2 space-x-2"
            variant="ghost"
            @click="fetchUser(article.user.username)"
          >
            <NuxtImg
              preset="avatar"
              class="h-12 rounded-3xl w-12"
              :alt="article.user.name"
              :src="article.user.profile_image"
            />
            <div
              class="flex flex-col items-start text-white dark:text-primary-800"
            >
              <h6 class="whitespace-pre-wrap">{{ article.user.name }}</h6>
              <PostDate :date="article.published_at" />
            </div>
          </BaseButton>
          <div class="text-center">
            <span class="whitespace-nowrap"
              >{{ article.reading_time_minutes }} min</span
            ><span> read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
