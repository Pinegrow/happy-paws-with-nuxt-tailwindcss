// Copied and inspired by @nuxt/ui design - https://github.com/nuxt/ui/blob/main/src/runtime/utils/colors.ts

import { kebabCase, camelCase, upperFirst, omit } from './index'
import type { Config as TWConfig } from 'tailwindcss'
import defaultColors from 'tailwindcss/colors.js'
import { pg_colors } from '../../themes/pg-tailwindcss/tokens.mjs'
// @ts-ignore
delete defaultColors.lightBlue
// @ts-ignore
delete defaultColors.warmGray
// @ts-ignore
delete defaultColors.trueGray
// @ts-ignore
delete defaultColors.coolGray
// @ts-ignore
delete defaultColors.blueGray

const colorsToExclude = [
  'inherit',
  'transparent',
  'current',
  'white',
  'black',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'cool',
  'prime',
]

const safelistByComponent: Record<
  string,
  (colors: string) => TWConfig['safelist']
> = {
  button: (colorsAsRegex) => [
    {
      pattern: RegExp(`^bg-(${colorsAsRegex})-50$`),
      variants: ['hover', 'disabled'],
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex})-100$`),
      variants: ['hover'],
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex})-400$`),
      variants: ['dark', 'dark:disabled'],
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex})-500$`),
      variants: ['disabled', 'dark:hover'],
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex})-600$`),
      variants: ['hover'],
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex})-900$`),
      variants: ['dark:hover'],
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex})-950$`),
      variants: ['dark', 'dark:hover', 'dark:disabled'],
    },
    {
      pattern: RegExp(`^text-(${colorsAsRegex})-400$`),
      variants: ['dark', 'dark:disabled'],
    },
    {
      pattern: RegExp(`^text-(${colorsAsRegex})-500$`),
      variants: ['dark:hover', 'disabled'],
    },
    {
      pattern: RegExp(`^text-(${colorsAsRegex})-600$`),
      variants: ['hover'],
    },
    {
      pattern: RegExp(`^outline-(${colorsAsRegex})-400$`),
      variants: ['dark:focus-visible'],
    },
    {
      pattern: RegExp(`^outline-(${colorsAsRegex})-500$`),
      variants: ['focus-visible'],
    },
    {
      pattern: RegExp(`^ring-(${colorsAsRegex})-400$`),
      variants: ['dark:focus-visible'],
    },
    {
      pattern: RegExp(`^ring-(${colorsAsRegex})-500$`),
      variants: ['focus-visible'],
    },
  ],
  // input: (colorsAsRegex) => [
  //   {
  //     pattern: RegExp(`^text-(${colorsAsRegex})-400$`),
  //     variants: ['dark'],
  //   },
  //   {
  //     pattern: RegExp(`^text-(${colorsAsRegex})-500$`),
  //   },
  //   {
  //     pattern: RegExp(`^ring-(${colorsAsRegex})-400$`),
  //     variants: ['dark', 'dark:focus'],
  //   },
  //   {
  //     pattern: RegExp(`^ring-(${colorsAsRegex})-500$`),
  //     variants: ['focus'],
  //   },
  // ],
}

const safelistComponentAliasesMap = {
  // USelect: 'UInput',
  // //...
}

const colorsAsRegex = (colors: string[]): string => colors.join('|')

type ColorConfig = Exclude<TWConfig['theme']['colors'], () => void>

export const excludeColors = (
  colors: ColorConfig | typeof defaultColors,
): string[] => {
  return Object.entries(omit(colors, colorsToExclude))
    .filter(([, value]) => typeof value === 'object')
    .map(([key]) => kebabCase(key))
}

const globalColors: ColorConfig = {
  ...defaultColors,
  ...pg_colors,
}

const allColors = excludeColors(globalColors)

export const generateSafelist = (
  colors: string[] /*, globalColors: string[]*/,
) => {
  const baseSafelist = Object.keys(safelistByComponent).flatMap((component) =>
    safelistByComponent[component](colorsAsRegex(colors)),
  )

  // Ensure `red` color is safelisted for form elements so that `error` prop of `UFormGroup` always works
  // const formsSafelist = [
  //   'input',
  //   // ...
  // ].flatMap((component) =>
  //   safelistByComponent[component](colorsAsRegex(['red'])),
  // )

  return [
    ...baseSafelist,
    // ...formsSafelist,
    // Ensure all global colors are safelisted for the Notification (toast.add)
    // ...safelistByComponent['notification'](colorsAsRegex(allColors)),
    // Gray safelist for Avatar & Notification
    'bg-gray-500',
    'dark:bg-gray-400',
    'text-gray-500',
    'dark:text-gray-400',
  ]
}

type SafelistFn = Exclude<
  NonNullable<Extract<TWConfig['content'], { extract?: unknown }>['extract']>,
  Record<string, unknown>
>
export const customSafelistExtractor = (
  prefix: string,
  content: string,
  colors: string[],
  safelistColors: string[],
): ReturnType<SafelistFn> => {
  const classes: string[] = []
  const regex =
    /<([A-Za-z][A-Za-z0-9]*(?:-[A-Za-z][A-Za-z0-9]*)*)\s+(?![^>]*:color\b)[^>]*\bcolor=["']([^"']+)["'][^>]*>/g

  const matches = content.matchAll(regex)

  const components = Object.keys(safelistByComponent).map(
    (component) =>
      `${prefix}${component.charAt(0).toUpperCase() + component.slice(1)}`,
  )

  for (const match of matches) {
    const [, component, color] = match

    const camelComponent = upperFirst('-', camelCase(component))

    if (!colors.includes(color) || safelistColors.includes(color)) {
      continue
    }

    let name = safelistComponentAliasesMap[camelComponent]
      ? safelistComponentAliasesMap[camelComponent]
      : camelComponent

    if (!components.includes(name)) {
      continue
    }

    name = name.replace(prefix, '').toLowerCase()

    const matchClasses = safelistByComponent[name](color).flatMap((group) => {
      return typeof group === 'string'
        ? ''
        : ['', ...(group.variants || [])].flatMap((variant) => {
            const matches = group.pattern.source.match(/\(([^)]+)\)/g)

            return matches
              .map((match) => {
                const colorOptions = match
                  .substring(1, match.length - 1)
                  .split('|')
                return colorOptions.map((color) => {
                  const classesExtracted = group.pattern.source
                    .replace(match, color)
                    .replace('^', '')
                    .replace('$', '')
                  if (variant) {
                    return `${variant}:${classesExtracted}`
                  }
                  return classesExtracted
                })
              })
              .flat()
          })
    })

    classes.push(...matchClasses)
  }

  return classes
}

const safelist = generateSafelist(allColors)

const primary = pg_colors.primary?.DEFAULT || pg_colors.primary?.[600]
const secondary = pg_colors.secondary?.DEFAULT || pg_colors.primary?.[600]

export { safelist, allColors as colors, primary, secondary }
