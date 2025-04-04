<template>
    <div v-if="isVisible" class="fixed z-[1000] bottom-6 left-1/2 transform -translate-x-1/2 max-w-xs w-full bg-white text-black p-4 shadow-lg border border-black transition-opacity duration-300" :class="{ 'opacity-0': !isVisible }">
        <p>{{ message }}</p>
        <button @click="close" class="absolute top-1/2 right-3 transform -translate-y-1/2 text-black">✖</button>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        message: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 3000,
        }
    });
    const isVisible = ref(true);
    const close = () => {
        isVisible.value = false;
    };
    setTimeout(close, props.duration);
</script>