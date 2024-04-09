<template>
  <div :class="[containerClasses, statusClass]">
    <div v-if="src" class="grid grid-cols-4 grid-rows-1 grid-flow-col gap-8 items-center">
      <div :class="[textPositionClass, textSpanClass, textAlignClass]">
        <p class="p-1 font-semibold text-lg">{{ title }}</p>
        <p class="p-1">{{ description }}</p>
      </div>
      <img :src="src" :class="[imgPositionClass, imgSpanClass, 'mx-auto rounded-xl']" />
    </div>
    <div v-else class="grid grid-cols-1 grid-rows-1">
      <div :class="[textAlignClass]">
        <p class="p-1 font-semibold text-lg">{{ title }}</p>
        <p class="p-1 items-center">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textPosition: {
      type: String,
      default: 'right'
    },
    textSpan: {
      type: String,
      default: 'l'
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      default: 'To use this component, you need to pass a value to the following props: textPosition: (left, right), textSpan: (m, l, xl), textAlign: (left, center, right), title: (any), description: (any), src: (link, local route), status: (on, off, pending, highlight).'
    },
    src: {
      type: String,
      //default: '/images/imgNotFound.png'
    },
    status: {
      type: String,
    }
  },
  computed: {
    textPositionClass() {
      if (this.textPosition === 'right' && this.textSpan === 'xl') {
        return 'col-start-2'
      } else if (this.textPosition === 'left') {
        return 'col-start-1'
      } else {
        return 'col-start-3'
      }
    },
    textSpanClass() {
      switch (this.textSpan) {
        case 'm':
          if (this.textPosition === 'left') {
            return 'col-start-1 col-span-1'
          } else {
            return 'col-start-4 col-span-1'
          }
        case 'l':
          return 'col-span-2'
        case 'xl':
          if (this.textPosition === 'left') {
            return 'col-start-1 col-span-3'
          } else {
            return 'col-start-2 col-span-3'
          }
        default:
          return 'col-span-2'
      }
    },
    textAlignClass() {
      switch (this.textAlign) {
        case 'left':
          return 'text-left'
        case 'center':
          return 'text-center'
        case 'right':
          return 'text-right'
        default:
          return 'text-center'
      }
    },
    imgPositionClass() { //depending on the textPosition, the image will be placed on the opposite side
      if (this.textPosition === 'left' && this.textSpan === 'm') {
        return 'col-start-2'
      } else if (this.textPosition === 'right') {
        return 'col-start-1'
      }
    },
    imgSpanClass() { //depending on the textSpan and textPosition, the image will take the remaining space
      if (this.textSpan === 'xl' && this.textPosition === 'left') {
        return 'col-start-4 col-span-1'
      } else if (this.textSpan === 'xl' && this.textPosition === 'right') {
        return 'col-start-1 col-span-1'
      } else if (this.textSpan === 'm' && this.textPosition === 'left') {
        return 'col-start-2 col-span-3'
      } else if (this.textSpan === 'm' && this.textPosition === 'right') {
        return 'col-start-1 col-span-3'
      } else {
        return 'col-span-2'
      }
    },
    containerClasses() { //classes for styling the container
      return [
        'px-8', 'border', 'bg-neutral-200', 'dark:bg-slate-800', 'dark:border-gray-700', 'rounded-2xl'
      ]
    },
    statusClass() { //classes for styling the container background depending on the status
      switch (this.status) {
        case 'on':
          return 'bg-green-200 border-green-200 dark:border-green-300 dark:bg-green-300 dark:text-black'
        case 'off':
          return 'bg-red-200 border-red-200 dark:border-red-200 dark:bg-red-200 dark:text-black'
        case 'pending':
          return 'bg-yellow-100 border-yellow-100 dark:border-yellow-100 dark:bg-yellow-100 dark:text-black'
        case 'highlight':
          return 'bg-sky-100 border-sky-100 dark:border-sky-300 dark:bg-sky-300 dark:text-black'
        default:
          return 'bg-neutral-200 dark:bg-slate-800 dark:border-gray-700'
      }
    }
  }
}
</script>
