<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <div class="mx-10">
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <template #title >
        <MDC :value="page.hero.title" />
      </template>

      <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" />
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <div class="flex flex-wrap justify-center mx-auto">
        <ULandingCard class="flex-none w-full sm:w-1/2  lg:w-1/3 xl:w-1/3 mx-12 my-10" v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </div>  
    </ULandingSection>
  </div>
</template>
