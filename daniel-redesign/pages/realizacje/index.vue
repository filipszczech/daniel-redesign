<template>
    <div>
        <PageContent>
            <h1 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6 lg:mb-9">Realizacje</h1>
            <Suspense>
                <template #default>
                    <AsyncGalleryComponent :type="'realizations'" />
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncGalleryComponent = defineAsyncComponent(() => import('~/components/PhotoGallery.vue'));
</script>