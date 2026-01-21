<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.testimonials.title"
    :ui="{
      container: 'px-0 !pt-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium'
    }"
  >
    <UCarousel
      v-slot="{ item }"
      :items="page.testimonials.items"
      :autoplay="{ delay: 4000 }"
      loop
      dots
      :ui="{
        viewport: '-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)'
      }"
    >
      <!-- <UPageCTA
        :description="item.quote"
        variant="naked"
        class="rounded-none"
        :ui="{
          container: 'sm:py-12 lg:py-12 sm:gap-8',
          description: '!text-base text-balance before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2'
        }"
      > -->
            <!-- <UUser
              v-bind="item.author"
              size="xl"
              class="justify-center"
            /> -->

      <UPageCard
        :title="item.author.name"
        :description="item.author.description"
        orientation="horizontal"
        variant="naked"
        class="group"
        :ui="{
          wrapper: 'max-sm:order-last p-4'
        }"
      >
        <img
          :src="item.author.avatar?.src"
          :alt="item.author.avatar?.src"
          class="object-cover w-full h-48 rounded-lg"
        >
      </UPageCard>

      <!-- </UPageCTA> -->
    </UCarousel>
  </UPageSection>
</template>
