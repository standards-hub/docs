<template>
  <div id="alert" class="flex items-center space-x-1 mt-4 mb-4" :class="alertClasses"><!-- if this div needs to be of a size as text lenght, add w-fit class -->
    <div class="flex items-center mx-2">
      <i :class="iconClass" class="size-6"></i>
    </div>
    {{ description }}
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
      validator: (value) =>
        ["info", "success", "warning", "danger"].includes(value),
    },
  },
  computed: {
    alertClasses() {
      switch (this.type) {
        case "success":
          return "bg-[#F0FFF4] dark:bg-[#22543D] text-[#2F855A] dark:text-[#9AE6B4] px-2 py-3 relative border-l-4 border-[#68D391] dark:border-[#2F855A]";
        case "warning":
          return "bg-[#FFFAF0] dark:bg-[#744210] text-[#C05621] dark:text-[#FBD38D] px-2 py-3 relative border-l-4 border-[#F6AD55] dark:border-[#B7791F]";
        case "danger":
          return "bg-[#FFF5F5] dark:bg-[#742A2A] text-[#C53030] dark:text-[#FEB2B2] px-2 py-3 relative border-l-4 border-[#FC8181] dark:border-[#C53030]";
        default: // info
          return "bg-[#EBF8FF] dark:bg-[#2A4365] text-[#2B6CB0] dark:text-[#90CDF4] px-2 py-3 relative border-l-4 border-[#63B3ED] dark:border-[#2B6CB0]";
      }
    },
    iconClass() {
      switch (this.type) {
        case "success":
          return "text-[#68D391] dark:text-[#68D391] i-heroicons-check-circle";
        case "warning":
          return "text-[#F6AD55] dark:text-[#F6AD55] i-heroicons-exclamation-circle";
        case "danger":
          return "text-[#FC8181] dark:text-[#FC8181] i-heroicons-x-circle";
        default: // info
          return "text-[#63B3ED] dark:text-[#63B3ED] i-heroicons-information-circle";
      }
    },
  },
};
</script>

<style>
#alert {
  font-family: "DM Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>