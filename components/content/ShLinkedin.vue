<template>
  <div class="flex p-4 justify-center">
    <iframe
      :src="src"
      :width="width"
      :height="height"
      frameborder="0"
      allowfullscreen="true"
      title="Embedded post"
    ></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  width: {
    type: String,
    default: "500",
  },
  height: {
    type: String,
    default: "650",
  },
});
</script>
