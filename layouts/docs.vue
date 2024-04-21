<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
</script>

<template>
  <div >
    <ShBreadcrumbs class="sticky z-20 top-20"/>
  <div class="relative mt-8">
    <UContainer>
      <UPage :ui="{ wrapper: 'flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 mx-7', center: { narrow: 'lg:col-span-10', base: 'lg:col-span-10', full: 'lg:col-span-12' } }">
        <template #left>
          <UAside>
            <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open />
          </UAside>
        </template>

        <slot />
      </UPage>
    </UContainer>
  </div>
  </div>
</template>
