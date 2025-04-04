<template>
    <div class="grid grid-cols-2 gap-6 md:gap-12">
        <h3 class="md:hidden col-span-2 text-3xl text-[#003450] font-semibold">{{ article.name }}</h3>
        <NuxtImg :src="article.img" :alt="'zdjęcie z artykułu: ' + article.name" class="col-span-2 md:col-span-1 w-full h-auto md:h-[24rem] object-cover bg-white" />
        <div class="col-span-2 md:col-span-1 flex flex-col justify-between h-full">
            <div>
                <p class="hidden md:block text-3xl lg:text-4xl xl:text-5xl text-[#003450] font-semibold mb-4">{{ article.name }}</p>
                <p class="xl:pr-16 mb-4">{{ article.desc }}</p>
                <p v-if="article.link">Źródło:<br> <a :href="article.link" target="_blank" rel="noopener" :aria-label="'link do artykułu ' + article.name" class="underline">{{ article.link }}</a></p>
            </div>
            <a v-if="article.link" :href="article.link" target="_blank" rel="noopener" :aria-label="'link do artykułu ' + article.name" class="font-semibold pb-1 w-fit border-b border-[#731919] text-[#731919] mt-4">
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