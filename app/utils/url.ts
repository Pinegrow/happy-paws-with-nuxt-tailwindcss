import { parseURL, stringifyParsedURL } from 'ufo'

export function removeUrlParamsAndHash(_url: string) {
  if (_url.startsWith('http')) {
    // Remove url parameters on src attribute values for ipxStatic
    const url = import.meta.server ? parseURL(_url) : new URL(_url)
    url.search = ''
    url.hash = ''
    return import.meta.server ? stringifyParsedURL(url) : url.href
  } else {
    return _url
  }
}
