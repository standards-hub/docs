<template>
  <div class="p-3">
    <UAlert
      :title="title"
      :description="description"
      :type="type"
      :icon="getIconAndColor().icon"
      :color="getIconAndColor().color"
      variant="solid"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  type: {
    type: String, // Make sure type is expected as a string
    default: 'info', // Set a default type if needed
  },
});

const getIconAndColor = () => {
  const typeInfo = {
    info: { icon: "i-heroicons-information-circle", color: "blue" },
    success: { icon: "i-heroicons-check-circle", color: "emerald" },
    warning: { icon: "i-heroicons-exclamation-circle", color: "yellow" },
    danger: { icon: "i-heroicons-x-circle", color: "red" },
  };

  if (typeInfo[props.type]) {
    return { icon: typeInfo[props.type].icon, color: typeInfo[props.type].color };
  } else {
    return { title:"Unrecognized Alert type!", description:"Please try with *info*, *success*, *warning* or *danger*.", icon: "heroicons-question-mark-circle", color: "white" };
  }
};
</script>