<template>
    <div class="grid grid-rows-2 border-2 rounded-xl mt-4 mb-4 mx-auto max-w-lg max-h-min">
        <div class="row-start-1 flex items-center justify-center rounded-lg" :style="backgroundClass">
            <div class="h-80 w-full flex justify-center items-center">
                <!-- Set a fixed height for the row containing the image -->
                <img :src="imageLink" class="h-full w-auto p-8" />
                <!-- Allow the image to expand within the row height -->
            </div>
        </div>
        <div class="row-start-2 p-6">
            <NuxtLink :to="titleLink">
                <p class="text-3xl font-extrabold"><slot name="title" /></p><!-- title -->
            </NuxtLink>
            <p class="text-xl font-semibold text-gray-600 dark:text-gray-400"><slot name="subtitle" /></p><!-- subtitle -->
            <p><slot /></p><!-- text (default slot) -->
            <div class="grid grid-cols-3">
                <p class="col-start-1 text-lg justify-self-start text-gray-600 dark:text-gray-400">
                    <slot name="left" /></p><!-- left label -->
                <p class="col-start-2 text-lg justify-self-center text-gray-600 dark:text-gray-400">
                    <slot name="center" /></p><!-- center label -->
                <p class="col-start-3 text-lg justify-self-end text-gray-600 dark:text-gray-400">
                    <slot name="right" /></p><!-- right label -->
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
        titleLink: {
            type: String,
        },
        background: {
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