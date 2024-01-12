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
  <div>
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

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" />
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <div class="flex justify-center">   
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 xl:grid-cols-4 xl:gap-10 mx-10">
            <ULandingCard class="flex" v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
        </div>
      </div> 
    </ULandingSection>
  </div>
</template>

<!-- 
  flex-wrap mx-auto
  
columns-1 md:columns-2 xl:columns-3 2xl:columns-4
text-center
-->
