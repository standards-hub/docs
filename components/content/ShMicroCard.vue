<template>
    <NuxtLink :to="link" target="_blank">
        <div class="relative grid grid-row-3 grid-flow-row border-2 rounded-2xl max-w-lg max-h-lg p-4 mx-auto justify-items-center text-center hover:scale-105 duration-300">
            <img :src="imageLink" class="relative mt-4 size-4/6 flex shrink" />
            <p :title="title" class="relative text-2xl font-bold text-black dark:text-white -my-4">{{ title }}</p>
            <p :subtitle="subtitle" class="relative font-semibold text-lg text-gray-500 ">{{ subtitle }}</p>
        </div>
    </NuxtLink>
</template>

<script setup>

const props = defineProps({
    link: String,
    imageLink: String,
    title: String,
    subtitle: String,
})
</script>