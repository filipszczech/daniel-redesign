<template>
    <div>
        <PageContent>
            <h1 class="w-[1px] h-[1px] overflow-hidden">Daniel Stoiński Redesign - projekty i realizacje wykonane na przestrzeni lat istnienia pracowni.</h1>
            <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6 lg:mb-9">Realizacje</h2>
            <Suspense>
                <template #default>
                    <AsyncGalleryComponent :type="'realizations'" />
                </template>
                <template #fallback>
                    <div class="my-12">
                        <Loader />
                    </div>
                </template>
            </Suspense>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncGalleryComponent = defineAsyncComponent(() => import('~/components/PhotoGallery.vue'));

    useHead({
        title: "Daniel Stoiński Redesign | realizacje",
        meta: [
            { name: 'og:title', content: 'Daniel Stoiński Redesign | realizacje' },
            { name: 'description', content: 'Daniel Stoiński Redesign - projekty i realizacje wykonane na przestrzeni lat istnienia pracowni.' },
            { property: 'og:description', content: 'Daniel Stoiński Redesign - projekty i realizacje wykonane na przestrzeni lat istnienia pracowni.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
</script>