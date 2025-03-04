<template>
    <div class="grid grid-cols-2 gap-12">
        <img :src="article.img" class="w-full h-[24rem] object-cover bg-white border border-black" />
        <div class="col-span-1 flex flex-col justify-between h-full">
            <div>
                <h2 class="text-5xl text-[#003450] font-semibold mb-6">{{ article.title }}</h2>
                <p class="xl:w-3/4 mb-2">{{ article.desc }}</p>
                <p v-if="article.link">Źródło: {{ article.link }}</p>
            </div>
            <a v-if="article.link" :href="article.link" class="font-semibold py-1 w-fit border-b border-[#731919] text-[#731919]">
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