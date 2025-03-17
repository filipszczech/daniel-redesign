<template>
    <div>
        <StorageModal v-if="modalOpen" :item="modalItem" @close="closeModal" />
        <PageContent>
            <section class="mb-16 xl:mb-24">
                <StorageHeader />
            </section>
            <Suspense>
                <template #default>
                    <AsyncFurnitureComponent @openModal="handleOpenModal" />
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <AsyncStorageComponent @openModal="handleOpenModal" />
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncStorageComponent = defineAsyncComponent(() => import('~/components/storage/StorageContainer.vue'));
    const AsyncFurnitureComponent = defineAsyncComponent(() => import('~/components/storage/FurnitureContainer.vue'));

    const modalOpen = ref(false);
    const modalItem = ref(null);

    const handleOpenModal = (item) => {
        modalItem.value = item;
        modalOpen.value = true;
    };
    const closeModal = () => {
        modalItem.value = null;
        modalOpen.value = false;
    };
    
    const handleKeydown = (event) => {
        if (event.key === 'Escape') {
            if(modalItem.value) {
                closeModal();
            }
        }
    };

    onMounted(() => {
        window.addEventListener('keydown', handleKeydown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleKeydown);
    });
</script>