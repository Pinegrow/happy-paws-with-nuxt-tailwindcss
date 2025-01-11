<script setup lang="ts">
  const { isMobileMenuOpen } = useMobileMenu()

  defineProps({
    navs: {
      type: Array,
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
          v-for="(nav, index) in navs"
          :key="index"
          :to="nav.to"
          :variant="nav.to === currentPath ? 'solid' : 'ghost'"
          block
          class="!rounded-lg whitespace-nowrap"
          size="md"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="w-full sm:text-center">{{ nav.title }}</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
