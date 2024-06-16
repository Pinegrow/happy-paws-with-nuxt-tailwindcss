import { pg_font_urls } from '../../themes/pg-tailwindcss/tokens.mjs'

const getFontsWithFallback = (pg_fonts) => {
  const pg_fonts_with_fallback = { ...pg_fonts }
  Object.entries(pg_fonts_with_fallback).forEach(([key, val]) => {
    //@ts-ignore
    if (val?.length) {
      pg_fonts_with_fallback[key] = pg_fonts_with_fallback[key].map((font) => {
        const fontTokens = font.split(',')
        const fontTokensWithFallback = fontTokens.reduce((acc, token) => {
          if (token.trim() === 'sans-serif') {
            return [...acc, token]
          } else {
            const index = token.indexOf(`'`, 1)
            const arr = token.split('')
            arr.splice(index, 1, ` fallback'`)

            const fallbackToken = arr.join('')
            return [...acc, token, fallbackToken]
          }
        }, [])
        return fontTokensWithFallback.join(', ')
      })
    }
  })
  return pg_fonts_with_fallback
}

export { pg_font_urls as fontUrls, getFontsWithFallback }
