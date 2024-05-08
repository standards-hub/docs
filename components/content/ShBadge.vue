<template>
  <UBadge
    :color="color"
    :variant="variant"
    :ui="{ rounded: 'rounded-full' }"
    size="lg"
  >
    {{ description }}
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
  description: {
    type: String,
  },
});
</script>
