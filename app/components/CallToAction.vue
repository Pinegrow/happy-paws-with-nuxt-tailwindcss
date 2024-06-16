<script setup lang="ts">
  const callToActions = [
    {
      img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwfHxkb2clMjBob3VzZXxlbnwwfHx8fDE2MzA0NjM2Mzg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
      action: 'Adopt',
      to: '/adopt',
    },
    {
      img: 'https://images.unsplash.com/photo-1499946682598-202f5b527154?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDkzfHxmZWVkJTIwaGFtc3RlcnxlbnwwfHx8fDE2MzA0NjQ1Mzc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
      action: 'Volunteer',
      to: '/volunteer',
    },
    {
      img: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDR8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop',
      action: 'Donate',
      to: '/quick-start',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Get Involved
      </h6>
      <h3 class="capitalize mt-3 text-center">
        Small gesture for a big impact
      </h3>
      <p class="mt-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>
<style scoped></style>
