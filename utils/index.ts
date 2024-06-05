export function classNames(...classes: any[string]) {
  return classes.filter(Boolean).join(' ')
}

export const kebabCase = (str: string) => {
  return str
    ?.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )
    ?.map((x) => x.toLowerCase())
    ?.join('-')
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
