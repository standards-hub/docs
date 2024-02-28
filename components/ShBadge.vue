<template>
  <UBadge
    :color="color"
    :variant="variant"
    :ui="{ rounded: 'rounded-full' }"
    size="lg"
  >
    <slot></slot>
  </UBadge>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "red",
  },
  variant: {
    type: String,
    default: "soft",
  },
});
</script>
