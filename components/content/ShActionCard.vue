<template>
    <div class="mt-6 border-2 dark:border-gray-700 mx-auto p-4 rounded-xl 'bg-no-repeat bg-cover size-full max-w-4xl max-h-3xl"
        :style="backgroundClass">
        <div class="grid grid-cols-5 gap-4">
            <img v-if="imageLink" class="col-start-1 col-span-1 size-4/6 self-center place-self-center row-span-2 w-fit h-fit" :src="imageLink" :alt="alt" />
            <div class="col-start-2 col-span-3 flex-col">
                <p class="text-2xl text-black text-center font-bold">{{ title }}</p>
                <p v-if="subtitle"
                    class="text-lg text-center font-semibold text-gray-600">{{ subtitle }}</p>
                <UFormGroup class="pb-4" error size="xl">
                    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
                </UFormGroup>
            </div>
            <UButton :label="buttonLabel" :color="buttonColor" size="xl" class="hover:shadow-sm col-start-3 col-span-1 mx-auto mb-4" />
            <UIcon :name="icon" dynamic size="lg" class="self-center place-self-center row-start-1 row-span-2 col-start-5 col-span-1" />
        </div>

    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        imageLink: {
            type: String,
        },
        alt: {
            type: String,
        },
        buttonLabel: {
            type: String,
        },
        buttonColor: {
            type: String,
        },
        icon: {
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