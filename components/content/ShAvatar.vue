<template>
    <div class="grid grid-cols-2 gap-4 p-4">
        <UAvatar size="9xl" :src="avatarSrc" :alt="avatarAlt" class="grayscale justify-self-end tracking-widest " />
        <div class="grid grid-sugrid-cols">
            <div>
                <p class="text-3xl font-bold grow text-pink-500 bottom-0">{{ name }}</p>
            </div>
            <div>
                <p class="text-lg font-semibold text-black dark:text-white">{{ role }}</p>
            </div>
            <div>
                <p class="text-lg text-gray-500 tracking-widest">{{ '@' + company }}</p>
            </div>
            <div class="flex text-5xl -mx-1">
                <NuxtLink v-if="twitter" :to="twitter">
                    <UIcon name="i-mdi:twitter" dynamic class="transition-transform transform hover:-translate-y-1" />
                </NuxtLink>
                <NuxtLink v-if="linkedin" :to="linkedin">
                    <UIcon name="i-mdi:linkedin" dynamic class="transition-transform transform hover:-translate-y-1" />
                </NuxtLink>
                <NuxtLink v-if="facebook" :to="facebook">
                    <UIcon name="i-mdi:facebook" dynamic class="transition-transform transform hover:-translate-y-1" />
                </NuxtLink>
                <NuxtLink v-if="instagram" :to="instagram">
                    <UIcon name="i-mdi:instagram" dynamic class="transition-transform transform hover:-translate-y-1" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    avatarSrc: {
        type: String,
    },
    avatarAlt: {
        type: String,
    },
    name: {
        type: String,
    },
    role: {
        type: String,
    },
    company: {
        type: String,
    },
    twitter: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
})
</script>