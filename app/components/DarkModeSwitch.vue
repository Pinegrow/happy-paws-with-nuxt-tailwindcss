<script setup lang="ts">
  import { isDark, toggleDark } from '@/composables/dark'
</script>
<template>
  <div class="mx-3">
    <BaseButton
      variant="ghost"
      class="!rounded-lg"
      aria-label="Toggle theme"
      @click="toggleDark()"
    >
      <transition name="slide" mode="out-in">
        <BaseIcon
          v-if="isDark"
          name="i-material-symbols-dark-mode-outline"
          class="text-2xl"
        >
        </BaseIcon>
        <BaseIcon
          v-else
          name="i-material-symbols-light-mode-outline"
          class="text-2xl"
        >
        </BaseIcon>
      </transition>
    </BaseButton>
  </div>
</template>
<style lang="postcss">
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.15s ease;
  }

  .slide-enter-from {
    transform: translateY(-100%);
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
  }

  .slide-leave-to {
    transform: translateY(100%);
  }
</style>
