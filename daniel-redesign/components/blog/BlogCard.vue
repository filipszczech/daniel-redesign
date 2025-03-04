<template>
    <div>
        <NuxtLink :to="'/wpisy/' + post.slug">
            <img :src="post.img" class="w-full h-[32rem] object-cover bg-white mb-3 border border-black" />
        </NuxtLink>
        <h2 class="text-4xl text-[#003450] font-semibold mb-3 mt-5">{{ post.title }}</h2>
        <p class="text-lg">{{ post.desc }}</p>
        <div class="flex gap-4 mt-3">

            <div v-for="tag in post.tags" :key="tag" class="border border-black px-3 py-1">{{ tag }}</div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        post: Object
    });
</script>