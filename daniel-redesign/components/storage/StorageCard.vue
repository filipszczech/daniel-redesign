<template>
    <div class="w-full">
        <div class="w-full relative group">
            <NuxtImg :src="item.img" :alt="'Mebel z magazynu: ' + item.name" class="w-full h-[32rem] sm:h-96 object-cover" />
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-lg">wymiary:</p>
                <p class="text-lg">{{ item.dimensions }}</p>
            </div>
        </div>
        <p class="my-4 pr-12">{{ item.name }} {{ item.count && `- ${item.count} szt.` }}</p>
    </div>
</template>

<script setup>
    defineProps({
        item: Object
    });
</script>