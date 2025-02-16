<template>
    <div>
        <PageContent>
            <section class="mb-32 xl:mb-40">
                <StorageHeader />
            </section>
            <section class="grid grid-cols-12 gap-8 bg-white">
                <h2 class="col-span-12 text-3xl mb-4">Obecny stan magazynu:</h2>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <StorageCard />
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <StorageCard />
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <StorageCard />
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <StorageCard />
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <StorageCard />
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                    <StorageCard />
                </div>
            </section>
        </PageContent>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>