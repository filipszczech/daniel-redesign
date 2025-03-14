<template>
     <section class="grid grid-cols-12 gap-8 bg-white">
        <h2 class="col-span-12 text-3xl">Obecny stan magazynu:</h2>
        <div class="col-span-6 md:col-span-4 lg:col-span-3"
            v-for="item in displayedStorage"
            :key="item.id">
            <StorageCard :item="item" />
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
    const furnitureStore = useFurnitureStore();
    
    const allStorage = ref([]);
    await furnitureStore.fetchStorage();
    allStorage.value = furnitureStore.storage;
    
    const displayedStorage = ref([]);
    const storageToShow = ref(4);
    displayedStorage.value = allStorage.value.slice(0, storageToShow.value);

    const loadMoreStorage = () => {
        storageToShow.value += 4;
        displayedStorage.value = allStorage.value.slice(0, storageToShow.value);
    };

</script>