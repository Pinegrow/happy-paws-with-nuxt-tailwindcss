<script setup lang="ts">
  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  })

  const headings = computed(() => {
    if (!props.post) return []
    const items = props.post.body?.children
    if (!items) return []
    const toc = []
    const tags = ['h2', 'h3', 'h4', 'h5', 'h6']
    items.forEach((item) => {
      if (tags.includes(item.tag)) {
        toc.push({
          link: item.props.id,
          text: item.props.id.toString().replace(/-/g, ' '),
          depth: Number(item.tag.replace(/h/g, '')),
        })
      }
    })
    return toc
  })

  const scrollBehavior = () => {
    window.scrollTo(0, 0)
  }
</script>
<template>
  <div
    v-if="post && headings && headings.length > 0"
    class="-ml-6 flex flex-col pl-2 py-4 lg:pt-4"
  >
    <SidebarLinkItem
      class="pr-3 text-xs uppercase"
      header
      :item="{ text: 'On This Page', link: '' }"
    />
    <ul class="mb-2 pl-3 pt-3">
      <li v-for="child in headings" :key="child.id">
        <SidebarLinkItem
          :item="child"
          :table="true"
          class="capitalize inline-block max-w-full truncate"
        />
      </li>
      <li>
        <slot />
      </li>
      <li>
        <div class="flex justify-start ml-1 mt-4">
          <BaseButton
            variant="ghost"
            class="flex font-medium text-sm"
            @click="scrollBehavior"
            ><span>Back to top</span>
            <BaseIcon
              name="i-material-symbols-arrow-upward"
              class="ml-1"
            ></BaseIcon>
          </BaseButton>
        </div>
      </li>
    </ul>
  </div>
</template>
