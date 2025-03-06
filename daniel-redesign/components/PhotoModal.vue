<template>
    <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]"
        @click.self="closeModal"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :leave="{ opacity: 0 }"
        :duration="300"
        >
        <div class="h-fit w-fit"
            v-motion
            :initial="{ scale: 0.7 }"
            :enter="{ scale: 1 }"
            :leave="{ scale: 0.7 }"
            :duration="300">
            <div class="flex justify-end mb-4">
                <button @click="closeModal" class="text-white">
                    <Icon name="ci:close-big" size="2rem" />
                </button>
            </div>
            <div class="flex flex-col justify-center items-center h-[70vh] md:h-[80vh]">
                <div class="p-3 bg-white">
                    <NuxtImg format="webp" placeholder :src="photo.src" :alt="'zdjęcie: ' + photo.name" class=" max-w-[85vw] h-auto md:h-[70vh] max-h-[60vh] md:max-h-[75vh] object-cover" />
                    <p class="pt-3 text-center">{{ photo.name }}</p>
                </div>
            </div>
            <div class="flex justify-center gap-6 items-center mt-4 text-white">
                <button
                    class=""
                    @click="prevPhoto"
                >
                    <Icon name="ci:chevron-left" size="2rem" />
                </button>
                <button
                    class=""
                    @click="nextPhoto"
                >
                <Icon name="ci:chevron-right" size="2rem" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        photo: Object,
    });

    const emit = defineEmits(["close", "prev", "next"]);

    const closeModal = () => emit("close");
    const prevPhoto = () => emit("prev");
    const nextPhoto = () => emit("next");
</script>