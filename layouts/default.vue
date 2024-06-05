<script setup lang="ts">
  //...
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
