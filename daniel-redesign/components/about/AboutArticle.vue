<template>
    <div class="grid grid-cols-2 gap-6 md:gap-12">
        <h2 class="md:hidden col-span-2 text-3xl text-[#003450] font-semibold">{{ article.name }}</h2>
        <img :src="article.img" class="col-span-2 md:col-span-1 w-full h-80 md:h-[24rem] object-cover bg-white border border-black" />
        <div class="col-span-2 md:col-span-1 flex flex-col justify-between h-full">
            <div>
                <h2 class="hidden md:block text-3xl lg:text-4xl xl:text-5xl text-[#003450] font-semibold mb-4">{{ article.name }}</h2>
                <p class="xl:pr-16 mb-4">{{ article.desc }}</p>
                <p v-if="article.link">Źródło:<br> <a :href="article.link" class="underline">{{ article.link }}</a></p>
            </div>
            <a v-if="article.link" :href="article.link" class="font-semibold pb-1 w-fit border-b border-[#731919] text-[#731919] mt-4">
                przeczytaj
            </a>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        article: Object
    });
</script>

<style lang="scss" scoped>

</style>