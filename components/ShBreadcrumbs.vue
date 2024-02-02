<template>
  <header class="h-8 w-full bg-zinc-200 dark:bg-slate-800">
    <UBreadcrumb divider=">" class="flex mx-5 -bottom-1.5 left-0">
      <template #default="{ link, isActive, index }">
        <UBadge :color="isActive ? 'primary' : 'gray'" class="rounded-full">
          {{ index + 1 }}. {{ link.label }}
        </UBadge>
      </template>
    </UBreadcrumb>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Task 1: Get the current full route
const currentFullRoute = ref("");

// Task 2: Create an empty array called bread
const bread = ref([]);

// Task 3: Insert full path into the array bread
onMounted(() => {
  currentFullRoute.value = $route.fullPath;
  bread.value.push(currentFullRoute.value);
});

// Task 4: Make a function called knife to slice the full route path
const knife = () => {
  return currentFullRoute.value.split("/");
};

// Task 5: Create an array called crumbs and push values using the knife function
const crumbs = ref([]);
onMounted(() => {
  crumbs.value = knife().map((value) => ({ dynamicProp: value }));
});
</script>
