<template>
    <div>
        <PageContent>
            <section class="mb-16 xl:mb-24">
                <StorageHeader />
            </section>
            <Suspense>
                <template #default>
                    <AsyncFurnitureComponent />
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <AsyncStorageComponent />
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
</script>

<style lang="scss" scoped>

</style>