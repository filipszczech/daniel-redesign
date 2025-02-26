<template>
    <div>
        <PageContent>
            <section class="mb-32 xl:mb-40">
                <StorageHeader />
            </section>
            <section class="grid grid-cols-12 gap-8 mb-32 xl:mb-40">
                <h2 class="col-span-12 text-3xl">Meble po renowacji:</h2>
                <div
                    v-for="item in displayedFurniture"
                    :key="item.id"
                    class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                    >
                    <div class="w-full relative">
                        <div v-if="item.sold" class="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center">
                        <p class="text-3xl text-black">sprzedane</p>
                        </div>
                        <NuxtImg :src="item.image" class="w-full h-[32rem] xl:h-96 object-cover" />
                    </div>
                    <p class="my-4 pr-12">{{ item.name }}</p>
                </div>
                <button
                v-if="furnitureToShow < allFurniture.length"
                @click="loadMoreFurniture"
                class="col-span-12 mx-auto p-1 border-b border-black mt-6"
                >
                    Załaduj więcej
                </button>
            </section>
            <section class="grid grid-cols-12 gap-8 bg-white">
                <h2 class="col-span-12 text-3xl">Obecny stan magazynu:</h2>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                    v-for="item in displayedStorage"
                    :key="item.id">
                    <StorageCard />
                </div>
                <button
                    v-if="storageToShow < allStorage.length"
                    @click="loadMoreStorage"
                    class="col-span-12 mx-auto p-1 border-b border-black my-6"
                    >
                    Załaduj więcej
                </button>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const allFurniture = ref([
    { id: 1, name: "Krzesła typ 200-190, Rajmund Hałas", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
    { id: 2, name: "Fotel PRL, lata 60.", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
    { id: 3, name: "Stół dębowy, ręcznie robiony", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
    { id: 4, name: "Komoda fornirowana, lata 70.", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
    { id: 5, name: "Szafa drewniana, styl vintage", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: true },
    { id: 6, name: "Krzesło gięte, styl Thonet", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: true }
    ]);

    const allStorage = ref([
        { id: 1, name: "Krzesła typ 200-190, Rajmund Hałas", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
        { id: 1, name: "Krzesła typ 200-190, Rajmund Hałas", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
        { id: 1, name: "Krzesła typ 200-190, Rajmund Hałas", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
        { id: 1, name: "Krzesła typ 200-190, Rajmund Hałas", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
        { id: 1, name: "Krzesła typ 200-190, Rajmund Hałas", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
        { id: 1, name: "Krzesła typ 200-190, Rajmund Hałas", image: "https://a.allegroimg.com/s1024/0c9665/e4470c654a9b93b9e129b117842b", sold: false },
    ]);

    const displayedFurniture = ref([]);
    const furnitureToShow = ref(4);
    displayedFurniture.value = allFurniture.value.slice(0, furnitureToShow.value);

    const loadMoreFurniture = () => {
        furnitureToShow.value += 4;
        displayedFurniture.value = allFurniture.value.slice(0, furnitureToShow.value);
    };

    const displayedStorage = ref([]);
    const storageToShow = ref(4);
    displayedStorage.value = allStorage.value.slice(0, storageToShow.value);

    const loadMoreStorage = () => {
        storageToShow.value += 4;
        displayedStorage.value = allStorage.value.slice(0, storageToShow.value);
    };
</script>

<style lang="scss" scoped>

</style>