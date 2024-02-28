<template>
  <iframe
    :src="src"
    style="
      width: 100%;
      height: 500px;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
    "
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: 'https://codesandbox.io/embed/new?codemirror=1'
  }
})
</script>
