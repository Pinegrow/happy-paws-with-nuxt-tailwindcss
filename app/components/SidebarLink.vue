<script setup lang="ts">
  import type { PropType } from 'vue'
  import type { SideBarItem, SideBarGroup } from '~~/types'

  const props = defineProps({
    item: {
      type: Object as PropType<SideBarItem>,
      required: true,
    },
  })

  const children = computed(() => (props.item as SideBarGroup).children)
</script>
<template>
  <li>
    <SidebarLinkItem :item="item" :header="true" />
    <ul v-if="children" class="mb-2">
      <li v-for="child in children" :key="child.text">
        <SidebarLinkItem :item="child" />
      </li>
    </ul>
  </li>
</template>
