import { computed } from 'vue'

export interface Post {
  date: Date
  author: string
  title: string
  twitter: string
}

function byDate(a, b) {
  return Number(new Date(b.date)) - Number(new Date(a.date))
}

export async function getPosts() {
  const { data: posts } = await useAsyncData('blog-navigation', () => {
    return queryContent('blog').find()
  })

  return computed(() => posts.value.sort(byDate))
}

export async function getPost(base: string = '/', path: string) {
  const { data: post } = await useAsyncData(path, () => {
    return queryContent(base, path).findOne()
  })

  return post
}
