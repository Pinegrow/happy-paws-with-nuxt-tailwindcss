// Safelisting of color classes for dynamic usage is inpsired by https://ui.nuxt.com/getting-started/theming#colors. The safelisting can be further optimized and automated to extract based on usage at a component level. For details, refer to Smart Safelisting introduced in https://github.com/nuxt/ui/pull/268 & https://github.com/nuxt/ui/blob/dev/src/colors.ts

import colors from 'tailwindcss/colors'
import { pg_colors } from '../themes/pg-tailwindcss/tokens.mjs'

import { omit, kebabCase } from './index'

// @ts-ignore
delete colors.lightBlue
// @ts-ignore
delete colors.warmGray
// @ts-ignore
delete colors.trueGray
// @ts-ignore
delete colors.coolGray
// @ts-ignore
delete colors.blueGray

export const colorsToExclude = [
  'inherit',
  'transparent',
  'current',
  'white',
  'black',
  'slate',
  'gray',
  'zinc',
  // 'neutral',
  'stone',
  'cool',
]

export const excludeColors = (colors: object) =>
  Object.keys(omit(colors, colorsToExclude)).map((color) =>
    kebabCase(color),
  ) as string[]

export const colorsAsRegex = (colors: string[]): string => colors.join('|')

export const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16,
      )}`
    : null
}

const globalColors = {
  ...colors,
  ...pg_colors,
}

const variantColors = excludeColors(globalColors)
const safeColorsAsRegex = colorsAsRegex(variantColors)

const safelist = [
  'bg-gray-400',
  {
    pattern: new RegExp(`bg-(${safeColorsAsRegex})-(50|400|500)`),
  },
  {
    pattern: new RegExp(`bg-(${safeColorsAsRegex})-500`),
    variants: ['disabled'],
  },
  {
    pattern: new RegExp(`bg-(${safeColorsAsRegex})-(400|950)`),
    variants: ['dark'],
  },
  {
    pattern: new RegExp(`bg-(${safeColorsAsRegex})-(500|900|950)`),
    variants: ['dark:hover'],
  },
  {
    pattern: new RegExp(`bg-(${safeColorsAsRegex})-400`),
    variants: ['dark:disabled'],
  },
  {
    pattern: new RegExp(`bg-(${safeColorsAsRegex})-(50|100|600)`),
    variants: ['hover'],
  },
  {
    pattern: new RegExp(`outline-(${safeColorsAsRegex})-500`),
    variants: ['focus-visible'],
  },
  {
    pattern: new RegExp(`outline-(${safeColorsAsRegex})-400`),
    variants: ['dark:focus-visible'],
  },
  {
    pattern: new RegExp(`ring-(${safeColorsAsRegex})-500`),
    variants: ['focus-visible'],
  },
  {
    pattern: new RegExp(`ring-(${safeColorsAsRegex})-400`),
    variants: ['dark', 'dark:focus-visible'],
  },
  {
    pattern: new RegExp(`text-(${safeColorsAsRegex})-400`),
    variants: ['dark'],
  },
  {
    pattern: new RegExp(`text-(${safeColorsAsRegex})-600`),
    variants: ['hover'],
  },
  {
    pattern: new RegExp(`text-(${safeColorsAsRegex})-500`),
    variants: ['dark:hover'],
  },
]

const primary = pg_colors.primary?.DEFAULT || pg_colors.primary?.[600]
const secondary = pg_colors.secondary?.DEFAULT || pg_colors.primary?.[600]

export { safelist, variantColors as colors, primary, secondary }
