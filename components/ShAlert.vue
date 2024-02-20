<template>
  <div :class="alertClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'danger'].includes(value)
    }
  },
  computed: {
    alertClasses() {
      switch (this.type) {
        case 'success':
          return 'bg-[#F0FFF4] dark:bg-[#22543D] text-[#2F855A] dark:text-[#9AE6A9] px-4 py-3 relative border-l-4 border-[#2F855A]';
        case 'warning':
          return 'bg-[#FFFAF0] dark:bg-[#744210] text-[#C66328] dark:text-[#FBD375] px-4 py-3 relative border-l-4 border-[#B7791F]';
        case 'danger':
          return 'bg-[#FFF5F5] dark:bg-[#742A2A] text-[#D03030] dark:text-[#FEB2B2] px-4 py-3 relative border-l-4 border-[#C53030]';
        default: // info
          return 'bg-[#EBF8FF] dark:bg-[#2A4365] text-[#63B3ED] dark:text-[#86CDF4] px-4 py-3 relative border-l-4 border-[#2B6CB0]';
      }
    }
  }
};
</script>