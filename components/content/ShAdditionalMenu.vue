<template>
  <div v-if="isVisible">
    <div class="h-16 top-0 mt-0 bg-blue-950 items-baseline p-3 sticky content-center">
      <div class="grid grid-cols-12 grid-flow-col">
        <img :src="logoLink"
          class="col-start-4 col-span-1 font-bold self-center place-self-center object-contain h-16 w-16" />
        <p class="col-start-5 col-span-4 text-center self-center text-white dark:text-white">{{ bannerText }}
          {{ remainingTime.days }} :
          {{ remainingTime.hours }} :
          {{ remainingTime.minutes }} :
          {{ remainingTime.seconds }}.</p>
        <UButton :label="buttonLabel" :to="buttonLink" color="purple" size="xl" :ui="{ rounded: 'rounded-full' }"
          class="col-start-9 col-span-1 self-center place-self-center size-4/6" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoLink: {
      type: String,
    },
    buttonLabel: {
      type: String,
    },
    buttonLink: {
      type: String,
    },
    daysToShow: {
      type: Number,
      default: 7 // Set a default value or remove this line if you don't want a default
    },
    bannerText: {
      type: String,
    },
    remainingDays: {
      type: Number,
    },
    remainingHours: {
      type: Number,
    },
    remainingMinutes: {
      type: Number,
    },
    remainingSeconds: {
      type: Number,
    }
  },
  data() {
    return {
      initialTimestamp: 0, // Initialize to 0
    };
  },
  mounted() {
    this.initialTimestamp = Date.now(); // Start the countdown when the component is mounted
    setInterval(() => {
      this.initialTimestamp = Date.now(); // Update the timestamp every second
    }, 1000);
  },
  computed: {
    remainingTime() {
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      const millisecondsPerHour = 1000 * 60 * 60;
      const millisecondsPerMinute = 1000 * 60;

      const elapsedTime = Date.now() - this.initialTimestamp;
      const remainingTime = this.daysToShow * millisecondsPerDay - elapsedTime;

      const remainingDays = Math.max(0, Math.floor(remainingTime / millisecondsPerDay));
      const remainingHours = Math.max(0, Math.floor((remainingTime % millisecondsPerDay) / millisecondsPerHour));
      const remainingMinutes = Math.max(0, Math.floor((remainingTime % millisecondsPerHour) / millisecondsPerMinute));
      const remainingSeconds = Math.max(0, Math.floor((remainingTime % millisecondsPerMinute) / 1000));

      return {
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
      };
    },
    isVisible() {
      return this.remainingTime.days > 0 || this.remainingTime.hours > 0 || this.remainingTime.minutes > 0 || this.remainingTime.seconds > 0;
    }
  }
};
</script>
