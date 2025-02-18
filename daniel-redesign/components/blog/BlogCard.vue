<template>
    <div>
        <img :src="post.img" class="w-full h-[32rem] object-cover bg-white mb-3 border border-black" />
        <h2 class="text-2xl text-[#003450] font-semibold">{{ post.title }}</h2>
        <p>{{ post.desc }}</p>
    </div>
</template>

<script setup>
    defineProps({
        post: Object
    });
</script>