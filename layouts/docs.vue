<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
</script>

<template>
  <UContainer>
    <UPage :ui="{ wrapper: 'flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 mx-10', center: { narrow: 'lg:col-span-10', base: 'lg:col-span-10', full: 'lg:col-span-12' } }">
      <template #left>
        <UAside>
          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
