<template>
    <section class="grid grid-cols-12 gap-8 mb-16">
        <h2 class="col-span-12 text-3xl">Meble po renowacji:</h2>
        <div
            v-for="item in displayedFurniture"
            :key="item.id"
            class="col-span-6 md:col-span-4 lg:col-span-3"
            >
            <div class="w-full relative group">
                <NuxtImg :src="item.img" :alt="'mebel po renowacji: ' + item.name" class="w-full h-72 xl:h-96 object-cover" />
                <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p class="text-lg">wymiary:</p>
                    <p class="text-lg">{{ item.dimensions }}</p>
                </div>
            </div>
            <p class="text-sm md:text-base my-3 md:pr-12">{{ item.name }} {{ item.count && `- ${item.count} szt.` }}</p>
        </div>
        <button
        v-if="furnitureToShow < allFurniture.length"
        @click="loadMoreFurniture"
        class="col-span-12 mx-auto p-1 border-b border-black md:mt-6"
        >
            Załaduj więcej
        </button>
    </section>
</template>

<script setup>
   const furnitureStore = useFurnitureStore();

    const allFurniture = ref([]);
    await furnitureStore.fetchfurniture();
    allFurniture.value = furnitureStore.furniture;

    const displayedFurniture = ref([]);
    const furnitureToShow = ref(4);
    displayedFurniture.value = allFurniture.value.slice(0, furnitureToShow.value);

    const loadMoreFurniture = () => {
        furnitureToShow.value += 4;
        displayedFurniture.value = allFurniture.value.slice(0, furnitureToShow.value);
    };

</script>