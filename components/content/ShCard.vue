<template>
    <div class="grid grid-rows-2 border-2 rounded-xl mt-4 mb-4 mx-auto max-w-lg max-h-min">
        <div class="rows-start-1 rounded-lg" :style="backgroundClass">
            <img :src="imageLink" class="mx-auto w-3/5  p-4" />
        </div>
        <div class="rows-start-2 p-6">
            <NuxtLink v-if="title" :to="titleLink">
                <p class="text-3xl font-extrabold ">{{ title }}</p>
            </NuxtLink>
            <p v-if="subtitle" class="text-xl font-semibold text-gray-600 dark:text-gray-400">{{ subtitle }}</p>
            <p>{{ textArea }}</p>
            <div class="grid grid-cols-3">
                <p v-if="leftLabel" class="col-start-1 text-lg justify-self-start text-gray-600 dark:text-gray-400">{{ leftLabel }}</p>
                <p v-if="centerLabel" class="col-start-2 text-lg justify-self-center text-gray-600 dark:text-gray-400">{{ centerLabel }}</p>
                <p v-if="rightLabel" class="col-start-3 text-lg justify-self-end text-gray-600 dark:text-gray-400">{{ rightLabel }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageLink: {
            type: String,
        },
        title: {
            type: String,
        },
        titleLink: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        textArea: {
            type: String,
        },
        background: {
            type: String,
        },
        leftLabel: {
            type: String,
        },
        centerLabel: {
            type: String,
        },
        rightLabel: {
            type: String,
        },
    },
    computed: {
        backgroundClass() { //class for styling the background
            if (this.background) {
                return "background-image: url(" + this.background + ")";
            } else {
                return "background-color: rgb(255 255 255)";
            }
        }
    },
}
</script>