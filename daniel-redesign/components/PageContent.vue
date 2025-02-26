<template>
    <div class="mx-auto max-w-[86rem] px-4 sm:px-6 lg:px-8 min-h-[70vh] overflow-hidden bg-white mt-40"
    :class="{ 'mt-[6rem]': route.path !== '/' }">
        <slot>
        </slot>
    </div>
</template>
  
<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
</script>
  
<style scoped>
</style>