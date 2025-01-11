export function classNames(...classes: any[string]) {
  return classes.filter(Boolean).join(' ')
}

// Helper function to capitalize the first letter of the matched group
export const upperFirst = (_: string, c: string | undefined): string => {
  return c ? c.toUpperCase() : ''
}

// Converts a kebab-case string to camelCase
export const camelCase = (str: string): string => {
  return str.replace(/-(\w)/g, upperFirst)
}

// Converts a camelCase or PascalCase string to kebab-case
export const kebabCase = (str: string): string => {
  return (
    str
      ?.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      ?.map((x) => x.toLowerCase())
      ?.join('-') ?? ''
  )
}

export const omit = (obj: object, keys: string[]) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  )
}

const hashRE = /#.*$/
const extRE = /(index)?\.(md|html)$/
const endingSlashRE = /\/$/

/**
 * Remove `.md` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
export function normalize(path: string): string {
  return ensureStartingSlash(
    decodeURI(path)
      .replace(hashRE, '')
      .replace(extRE, '')
      .replace(endingSlashRE, ''),
  )
}

function ensureStartingSlash(path: string): string {
  return path.startsWith('/') ? path : `/${path}`
}

export function joinUrl(base: string, path: string): string {
  if (path.startsWith('#')) return path
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}
