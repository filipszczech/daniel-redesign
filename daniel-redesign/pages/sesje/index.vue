<template>
    <div>
        <PageContent>
            <h1 class="w-[1px] h-[1px] overflow-hidden">Daniel Stoiński Redesign - sesje zdjęciowe i lookboki, prezentujące realizowane przez pracownię projekty.</h1>
            <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6 lg:mb-9">Sesje zdjęciowe</h2>
            <Suspense>
                <template #default>
                    <AsyncGalleryComponent :type="'sessions'" />
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

    useHead({
        title: "Daniel Stoiński Redesign | sesje zdjęciowe",
        meta: [
            { name: 'og:title', content: 'Daniel Stoiński Redesign | sesje zdjęciowe' },
            { name: 'description', content: 'Daniel Stoiński Redesign - sesje zdjęciowe i lookboki, prezentujące realizowane przez pracownię projekty.' },
            { property: 'og:description', content: 'Daniel Stoiński Redesign - sesje zdjęciowe i lookboki, prezentujące realizowane przez pracownię projekty.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
</script>