<template>
    <div>
        <NuxtLink :to="'/wpisy/' + post.slug">
            <img :src="post.img" class="w-full h-[32rem] object-cover bg-white mb-3 border border-black" />
        </NuxtLink>
        <h2 class="text-4xl text-[#003450] font-semibold mb-3 mt-5">{{ post.title }}</h2>
        <p>{{ post.desc }}</p>
    </div>
</template>

<script setup>
    defineProps({
        post: Object
    });
</script>