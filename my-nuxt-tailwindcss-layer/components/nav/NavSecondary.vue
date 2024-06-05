<script setup lang="ts">
  const { isMobileMenuOpen } = useMobileMenu()

  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div>
    <div
      v-if="isMobileMenuOpen"
      class="sm:min-w-[200px] rounded-lg shadow overflow-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 px-4 py-5 sm:p-6 z-10"
    >
      <div class="space-y-1">
        <BaseButton
          v-for="(navlink, index) in navlinks"
          :key="index"
          :to="navlink.link"
          :variant="isCurrentRoute(navlink, currentPath) ? 'solid' : 'ghost'"
          block
          class="!rounded-lg whitespace-nowrap"
          size="md"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="w-full sm:text-center">{{ navlink.text }}</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
