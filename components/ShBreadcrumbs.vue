<template>
  <header class="h-8 w-full bg-zinc-200 dark:bg-slate-800">
    <nuxt-link to="/">Home</nuxt-link>
    <span v-for="(crumb, index) in breadcrumbs" :key="index">
      >
      <template v-if="crumb.to">
        <nuxt-link :to="crumb.to">{{ crumb.label }}</nuxt-link>
      </template>
      <span v-else>{{ crumb.label }}</span>
    </span>
  </header>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const pathSegments = this.$route.path.split('/').filter(segment => segment !== '');
      return pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const label = isLast ? this.capitalize(segment) : segment;
        const to = isLast ? `/${pathSegments.slice(0, index + 1).join('/')}` : null;
        return { to, label };
      });
    },
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>
