<script setup lang="ts">
  const counterStore = useCounterStore()

  /* 1. Pinia store state (ref, reactive, computed, etc) */

  // ❌ Bad (unreactive):
  // const { count, getCount, getDoubleCount } = counterStore

  // ✔️ Good:
  const { count, getCount } = storeToRefs(counterStore)

  // count is reactive
  const getDoubleCount = computed(() => count.value * 2)

  /* 2. Pinia store actions */
  const { increment, decrement } = counterStore
</script>

<template>
  <div>
    <span
      >Navigate across different routes, this counter from the pinia store is
      preserved</span
    >
    <BaseButton
      variant="soft"
      style="margin-left: 10px; margin-right: 10px"
      @click="decrement"
      >-</BaseButton
    >
    <span style="min-width: 20px; display: inline-block; text-align: center">{{
      count
    }}</span>

    <BaseButton
      variant="soft"
      style="margin-left: 10px; margin-right: 10px"
      @click="increment"
      >+</BaseButton
    >
  </div>
</template>

<style scoped></style>
