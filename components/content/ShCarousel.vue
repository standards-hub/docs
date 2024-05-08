<script setup>
import { ref, onMounted, defineComponent } from 'vue';

const carouselRef = ref();

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return;

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0);
        }

        carouselRef.value.next();
    }, 3000);
});

const items = ref([
    {
        component: 'ShMicroCard',
        props: {
            link: 'https://www.axios.com/',
            imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png',
            title: 'Microsoft sets non-profit to cut software realted carbon emissions',
            subtitle: 'Axios gets you smarter, faster on what matters.'
        }
    },
    {
        component: 'ShMicroCard',
        props: {
            link: 'https://www.axios.com/',
            imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png',
            title: 'Microsoft sets non-profit to cut software realted carbon emissions',
            subtitle: 'Axios gets you smarter, faster on what matters.'
        }
    },
    {
        component: 'ShMicroCard',
        props: {
            link: 'https://www.axios.com/',
            imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png',
            title: 'Microsoft sets non-profit to cut software realted carbon emissions',
            subtitle: 'Axios gets you smarter, faster on what matters.'
        }
    },
    {
        component: 'ShMicroCard',
        props: {
            link: 'https://www.axios.com/',
            imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png',
            title: 'Microsoft sets non-profit to cut software realted carbon emissions',
            subtitle: 'Axios gets you smarter, faster on what matters.'
        }
    },
]);

const props = defineProps({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
});

</script>

<template>
    <div>
        <h1 class="flex justify-center mt-12 -mb-6">
            {{ title }}
        </h1>
        <h2 class="flex justify-center">
            {{ subtitle }}
        </h2>
    </div>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'md:basis-1/2 lg:basis-1/3 p-3 mb-9' }"
        indicators arrows class="rounded-lg overflow-hiddeny" ref="carouselRef">
        <component :is="item.component" v-bind="item.props" class="w-full" draggable="false" />
    </UCarousel>
</template>