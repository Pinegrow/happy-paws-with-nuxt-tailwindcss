// Props are sourced from @nuxt/image's NuxtImg component's defintion
// Only a subset of props are used, others are commented out (<img> attributes)

const _baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: 'webp' },
  quality: { type: [Number, String], default: 100 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: 'cover' },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  // sizes: { type: [Object, String], default: void 0 },
  sizes: {
    type: [Object, String],
    default: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
  },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  // referrerpolicy: { type: String, default: void 0 },
  // usemap: { type: String, default: void 0 },
  // longdesc: { type: String, default: void 0 },
  // ismap: { type: Boolean, default: void 0 },
  // loading: {
  //   type: String,
  //   default: void 0,
  //   validator: (val) => ['lazy', 'eager'].includes(val),
  // },
  // crossorigin: {
  //   type: [Boolean, String],
  //   default: void 0,
  //   validator: (val) =>
  //     ['anonymous', 'use-credentials', '', true, false].includes(val),
  // },
  // decoding: {
  //   type: String,
  //   default: void 0,
  //   validator: (val) => ['async', 'auto', 'sync'].includes(val),
  // },
  // // csp
  // nonce: { type: [String], default: void 0 },

  // Additional ones
  bgStyles: { type: Boolean, default: false },
  placeholder: { type: [Boolean, String, Number, Array], default: true },
  cover: { type: Boolean, default: true },
}

const sortObj = (obj) => {
  return Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),
      {},
    )
}

const baseImageProps = sortObj(_baseImageProps)

export { baseImageProps }
