<template>
  <div :class="containerClasses">
    <div class="grid grid-cols-4 grid-rows-1 grid-flow-col gap-8 items-center">
      <p :class="[textPositionClass, textSpanClass, textAlignClass, 'p-1']">{{ description }}</p>
      <img :src="src" :class="[imgPositionClass, imgSpanClass, 'mx-auto rounded-xl']" />
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
    description: {
      type: String,
      default: 'To use this component, you need to pass a value to the following props: textPosition: (left, right), textSpan: (m, l, xl), textAlign: (left, center, right), description: (any), src: (link, local route).'
    },
    src: {
      type: String,
      default: '/images/imgNotFound.png'
    },
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
    containerClasses() {
      return [
        'px-8', 'border', 'bg-neutral-200', 'dark:bg-slate-800', 'dark:border-gray-700', 'rounded-2xl'
      ]
    }
  }
}
</script>
