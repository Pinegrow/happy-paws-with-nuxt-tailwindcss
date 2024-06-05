<script setup>
  const props = defineProps({
    error: {
      type: Object,
      default(/*rawProps*/) {
        return {
          url: '-',
          statusCode: 404,
          statusMessage: 'Not Found',
          message: '(404 Not Found)',
          stack: '',
          data: '{"error":"FetchError:  (404 Not Found)"}',
        }
      },
    },
  })

  const message = computed(() => String(props.error?.message || ''))
  const is404 = computed(
    () => props.error?.statusCode === 404 || message.value?.includes('404'),
  )
  const isDev = process.dev

  function handleError() {
    return clearError({ redirect: '/' })
  }
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        text-align: center;
      "
    >
      <div style="font-size: 1.875rem; line-height: 2.25rem">
        {{ is404 ? 'This page could not be found' : 'An error occurred' }}
      </div>
      <div style="font-size: 1.25rem; line-height: 1.75rem opacity: 0.5;">
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </div>
      <pre v-if="isDev" style="width: 100%; white-space: normal">{{
        error
      }}</pre>
      <button
        style="
          background-color: gray;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 6px;
          padding-bottom: 6px;
          font-size: 0.875rem !important;
          line-height: 1.25rem !important;
          font-weight: 500 !important;
          line-height: 1.25rem;
          letter-spacing: 0.0178571429em !important;
          text-transform: none !important;
          border-radius: 0.5rem !important;
        "
        @click="handleError"
      >
        &lt; Go Back
      </button>
    </div>
  </NuxtLayout>
</template>
