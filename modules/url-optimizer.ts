import { defineNuxtModule } from '@nuxt/kit'
import type { AttributeNode, DirectiveNode } from '@vue/compiler-core'

export default defineNuxtModule({
  hooks: {
    'vite:extendConfig': (config) => {
      config.vue.template.compilerOptions.nodeTransforms.push((node, ctx) => {
        if (
          node.type === 1 && // Element node
          node.tagType === 1 && // Component node
          (node.tag === 'NuxtImg' ||
            node.tag === 'nuxt-img' ||
            node.tag === 'NuxtPicture' ||
            node.tag === 'nuxt-picture')
        ) {
          // TODO: This is a hack until Nuxt Image fixes a related bug for nuxt generate (SSG) - https://github.com/nuxt/image/issues/815, https://github.com/nuxt/image/pull/997
          const nonIpxProviderPropOnTag = node.props.find(
            (prop: AttributeNode) =>
              prop.name === 'provider' &&
              prop.value.content !== 'ipx' &&
              prop.value.content !== 'ipxStatic',
          ) as AttributeNode
          const nonIpxProviderDirectiveOnTag = node.props.find(
            (prop: DirectiveNode) => prop.rawName === ':provider',
          ) as DirectiveNode

          if (!nonIpxProviderPropOnTag && !nonIpxProviderDirectiveOnTag) {
            // TODO: Not sure if we can modify :src's bound value
            const srcProp = node.props.find(
              (prop: AttributeNode) => prop.name === 'src',
            ) as AttributeNode
            if (srcProp) {
              const srcPropValue = srcProp.value.content
              if (srcPropValue.startsWith('http')) {
                // Remove url parameters on src attribute values for ipxStatic
                const srcUrl = new URL(srcPropValue)
                srcUrl.search = ''
                srcUrl.hash = ''
                srcProp.value.content = srcUrl.href
              }
            }
          }
        }
      })
    },
  },
})
