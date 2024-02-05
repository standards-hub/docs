<template>
  <header class="h-8 w-full bg-zinc-200 dark:bg-slate-800">
    <nuxt-link to="/">Home</nuxt-link>
    <span v-for="(crumb, index) in breadcrumbs" :key="index">
      /
      <nuxt-link :to="crumb.to" v-if="crumb.label">{{ crumb.label }}</nuxt-link>
    </span>
  </header>
</template>

<script >
export default {
  computed: {
    breadcrumbs() {
      const pathSegments = this.$route.path.split('/').filter(segment => segment !== '');
      return pathSegments.map((segment, index) => ({
        to: `/${pathSegments.slice(0, index + 1).join('/')}`,
        label: index === pathSegments.length - 1 ? this.capitalize(segment) : '',
      })).filter(crumb => crumb.label !== '');
    },
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    shouldShowSlash(index) {
      return index > 0 && this.breadcrumbs[index].label !== '';
    },
  },
};
</script>
