<template>
    <div>
        <StorageModal v-if="modalOpen" :item="modalItem" @close="closeModal" />
        <PageContent>
            <h1 class="w-[1px] h-[1px] overflow-hidden">Daniel Stoiński Redesign - zawartość magazynu pracowni. Znajdują się tu zarówno meble w stanie do ranowacji, jak i gotowe do użytku produkty.</h1>
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

    useHead({
        title: "Daniel Stoiński Redesign | storage",
        meta: [
            { name: 'og:title', content: 'Daniel Stoiński Redesign | storage' },
            { name: 'description', content: 'Daniel Stoiński Redesign - zawartość magazynu pracowni. Znajdują się tu zarówno meble w stanie do ranowacji, jak i gotowe do użytku produkty.' },
            { property: 'og:description', content: 'Daniel Stoiński Redesign - zawartość magazynu pracowni. Znajdują się tu zarówno meble w stanie do ranowacji, jak i gotowe do użytku produkty.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
</script>