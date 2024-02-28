<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Markdown',
  to: '/markdown-guidelines/introduction/'
}, {
  label: 'GitHub',
  to: '/github-guidelines/github/'
}, {
  label: 'Processes',
  to: '/processes/introduction/'
},{
  label: 'Markdown Constructors',
  to: '/elastic-hub/markdown-constructors/'
},{
  label: 'Setup',
  to: '/setup/'
}]

</script>

<template>
  <UHeader class="h-20">

    <template #logo> 
      <img src="/images/S-H logo.png" class="rounded-full" height="70" width="40" alt="Standards-Hub">
        Standards-Hub
    </template>

    <template #center>
      <div class="grid grid-flow-row -mb-5">
        <UDocsSearchButton label="Search..." class="mb-2"/>    
        <UHeaderLinks :links="links" class="hidden lg:flex"/> <!-- this class allows links to be hidden in mobile preview -->
      </div>
    </template>

    <template #right class="h-10">
      <UColorModeButton />
      <UButton to="https://github.com/standards-hub" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>

    <template #panel> <!-- panel that opens when clicking on the hamburger menu -->
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>

  </UHeader>
</template>