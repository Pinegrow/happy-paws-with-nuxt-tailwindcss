<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      default: 'i-line-md-iconify1',
    },
    tag: {
      type: String,
      default: 'span',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  })

  const addUnit = (val: any) => {
    if (val && !(val.endsWith('px') || val.endsWith('em'))) {
      return `${val}px`
    } else {
      return val
    }
  }

  const iconStyle = computed(() => {
    const width = addUnit(props.width) || addUnit(props.height) || '20px'
    const height = addUnit(props.height) || width
    const display = 'inline-block'
    return {
      width,
      height,
      display,
    }
  })
</script>
<template>
  <component :is="tag" :class="name" :style="iconStyle"> </component>
</template>
<style scoped></style>
