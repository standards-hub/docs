<script setup>
import ShMicroCard from '@/components/content/ShMicroCard.vue';

const items = [
        {
        ShMicroCard,
        props: {
            link: 'https://www.axios.com/',
            imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png',
            title: 'Microsoft sets non-profit to cut software realted carbon emissions',
            subtitle: 'Axios gets you smarter, faster on what matters'
            },
        },
        {
        component: ShMicroCard,
        props: {
            link: 'https://www.axios.com/',
            imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png',
            title: 'Microsoft sets non-profit to cut software realted carbon emissions',
            subtitle: 'Axios gets you smarter, faster on what matters'
            },
        },
        {
        component: ShMicroCard,
        props: {
            link: 'https://www.axios.com/',
            imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png',
            title: 'Microsoft sets non-profit to cut software realted carbon emissions',
            subtitle: 'Axios gets you smarter, faster on what matters'
            }
        }
]

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})
</script>

<template>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }" ref="carouselRef" class="rounded-lg overflow-hidden" indicators arrows>
     <img :src="item" class="w-full" draggable="false">        
    </UCarousel>
</template>
  