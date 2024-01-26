<template>
  <div>
    <video type="video/mp4 , video/webm" controls>
      <source :src="src" />
    </video>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: String,
});
</script>
