<template>
  <div class="flex p-4 justify-center">
    <NuxtTweet
      class="bg-white dark:bg-white"
      :id="id"
      :show-media="true"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
});
</script>
