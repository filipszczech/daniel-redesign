<template>
     <section class="grid grid-cols-12 gap-4 md:gap-8 bg-white">
        <h2 class="col-span-12 text-2xl sm:text-3xl">Obecny stan magazynu:</h2>
        <div class="col-span-6 md:col-span-4 lg:col-span-3"
            v-for="item in displayedStorage"
            :key="item.id">
            <div @click="openModal(item)" class="w-full relative group cursor-pointer">
                <NuxtImg :src="item.images && item.images[0]" :alt="'mebel po renowacji: ' + item.name" class="w-full h-64 sm:h-72 xl:h-96 object-cover" />
                <div class="absolute inset-0 hidden md:flex flex-col items-center justify-center px-4 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p v-if="item.dimensions" class="text-lg text-center mb-2">wymiary:<br>{{ item.dimensions }}</p>
                    <p class="text-lg text-center">stan:<br>do renowacji</p>
                </div>
            </div>
            <p class="text-sm md:text-base my-3 md:pr-12">{{ item.name }} {{ item.count && `- ${item.count} szt.` }}</p>
        </div>
        <button
            v-if="storageToShow < allStorage.length"
            @click="loadMoreStorage"
            class="col-span-12 mx-auto p-1 border-b border-black md:my-6"
            >
            Załaduj więcej
        </button>
    </section>
</template>

<script setup>
    const emit = defineEmits(['openModal']);
    const furnitureStore = useFurnitureStore();
    
    const allStorage = ref([]);
    await furnitureStore.fetchStorage();
    allStorage.value = furnitureStore.storage;
    
    const displayedStorage = ref([]);
    const storageToShow = ref(8);
    displayedStorage.value = allStorage.value.slice(0, storageToShow.value);

    const loadMoreStorage = () => {
        storageToShow.value += 8;
        displayedStorage.value = allStorage.value.slice(0, storageToShow.value);
    };

    const openModal = (item) => {
        emit('openModal', item);
    };
</script>