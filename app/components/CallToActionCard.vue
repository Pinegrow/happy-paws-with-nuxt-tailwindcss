<script setup>
  const { img, action, to } = defineProps({
    img: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  })

  const { optimizeImage } = useOptimizeImage()
  const imageOptimized = computed(() => {
    return {
      alt: action,
      cover: true,
      ...optimizeImage(
        img,
        /* options */
        {
          // placeholder: false, // placeholder image before the actual image is fully loaded.
        },
        true /* return bgStyles */,
      ),
    }
  })

  const bgStyles = imageOptimized.value.bgStyles
</script>
<template>
  <div class="pb-4 px-4 rounded-3xl w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
    <div
      class="bg-cover bg-no-repeat flex pb-4 pt-96 px-4 rounded-3xl"
      :style="bgStyles"
    >
      <NuxtLink :to="to" class="group mx-auto w-5/6">
        <BaseButton size="xl" class="font-semibold rounded-lg w-full" block>
          <div class="font-semibold my-2 text-center">
            {{ action }}
          </div>
        </BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped></style>
