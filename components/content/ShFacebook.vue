<template>
  <div class="flex p-4 justify-center">
    <iframe
      class="bg-white dark:bg-white"
      :src="src"
      :width="width"
      :height="height"
      style="border: solid; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
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
        default: "410",
    },
});
</script>
