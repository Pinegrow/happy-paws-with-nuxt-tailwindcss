<script setup lang="ts">
  const props = defineProps({
    cover: {
      type: String,
      default: 'https://pinegrow.com/placeholders/img18.jpg',
    },
  })

  const bgCover = computed(() => {
    return `url(${props.cover})`
  })
</script>
<template>
  <section class="cover relative">
    <div class="h-40 pl-10 pt-20">
      <BaseButton to="/articles">
        <span>&lt;- Go Back</span>
      </BaseButton>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      fill="currentColor"
      class="text-primary-600 dark:text-primary-200"
    >
      <path
        d="M0,64L80,74.7C160,85,320,107,480,149.3C640,192,800,256,960,250.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>
<style scoped>
  .cover {
    z-index: 0;
  }

  .cover:before {
    background-image: v-bind(bgCover) !important;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    filter: blur(0px);
  }
</style>
