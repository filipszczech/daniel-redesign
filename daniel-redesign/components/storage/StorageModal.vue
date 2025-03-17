<template>
    <div class="fixed top-0 lfet-0 w-full h-full bg-black bg-opacity-35 z-50 flex justify-center items-center  px-6"
        @click.self="closeModal">
        <div class="max-w-xl mx-auto bg-white w-fit p-4 flex flex-col gap-4">
            <div v-if="item.images" class="flex justify-center relative">
                <img :src="item.images[currentImage]" alt="krzesła" class="h-[60vh] object-cover mx-auto" />
                <div v-if="item.images.length > 1" @click="prevImage" class="absolute left-0 top-1/2 p-1 transform -translate-y-[50%] bg-transparent cursor-pointer">
                    <Icon name="ci:chevron-left" size="3rem" class="text-white" />
                </div>
                <div v-if="item.images.length > 1" @click="nextImage" class="absolute right-0 top-1/2 p-1 transform -translate-y-[50%] bg-transparent cursor-pointer">
                    <Icon name="ci:chevron-right" size="3rem" class="text-white" />
                </div>
            </div>
            <div v-if="item.images.length > 1" class="flex justify-center items-center gap-3 h-3">
                <div v-for="(item, index) in item.images" :key="index" 
                @click="currentImage = index"
                class="transition-all duration-300"
                :class="index === currentImage ? 'h-3 w-3 rounded-full bg-black opacity-80' : 'h-[10px] w-[10px] rounded-full bg-black opacity-40 cursor-pointer'"></div>
            </div>
            <div class="text-sm md:text-lg">
                <p class="text-lg md:text-2xl mb-2">{{ item.name }}</p>
                <p v-if="item.count">Liczba sztuk: {{ item.count }}</p>
                <p>Wymiary: {{ item.dimensions }}</p>
                <p>Stan: do renowacji</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(["close"]);
    const props = defineProps({
        item: Object
    });
    const currentImage = ref(0);
    const nextImage = () => {
        currentImage.value = (currentImage.value + 1) % props.item.images.length;
    };
    const prevImage = () => {
        currentImage.value = (currentImage.value - 1 + props.item.images.length) % props.item.images.length;
    };
    const closeModal = () => emit("close");
</script>