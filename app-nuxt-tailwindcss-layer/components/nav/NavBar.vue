<script setup lang="ts">
  const { allNavs, navsPrimary, navsSecondary, currentPath } = useNavMenu()
</script>
<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <TheLogo />
            </div>
            <NavPrimary
              :navs="navsPrimary"
              :current-path="currentPath"
              class="hidden sm:flex sm:ml-6"
            />
          </div>
          <DarkModeSwitch />
          <div class="-mr-2 items-center relative">
            <NavHamburger
              v-if="navsSecondary?.length"
              class="hidden sm:block"
            />
            <NavHamburger v-if="allNavs.length" class="sm:hidden" />
            <NavSecondary
              v-if="navsSecondary?.length"
              class="hidden sm:flex sm:justify-end absolute right-0 mt-4"
              :navs="navsSecondary"
              :current-path="currentPath"
            />
          </div>
        </div>
      </div>
      <NavSecondary
        class="sm:hidden"
        :navs="allNavs"
        :current-path="currentPath"
      />
    </nav>
  </div>
</template>
<style scoped></style>
