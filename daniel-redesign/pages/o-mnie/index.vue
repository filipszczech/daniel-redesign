<template>
    <div>
        <PageContent>
            <h1 class="w-[1px] h-[1px] overflow-hidden">Daniel Stoiński Redesign - informacje o właścicielu pracowni i jego aktywności w mediach.</h1>
            <section class="mb-32">
                <AboutHeader />
            </section>
            <section class="mb-12 xl:mb-24">
                <Suspense>
                    <template #default>
                        <AsyncArticlesComponent />
                    </template>
                    <template #fallback>
                        <div class="my-12">
                            <Loader />
                        </div>
                    </template>
                </Suspense>
            </section>
            <section class="mb-12 xl:mb-24">
                <Suspense>
                    <template #default>
                        <AsyncTvComponent />
                    </template>
                    <template #fallback>
                        <div class="my-12">
                            <Loader />
                        </div>
                    </template>
                </Suspense>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncArticlesComponent = defineAsyncComponent(() => import('~/components/Articles.vue'));
    const AsyncTvComponent = defineAsyncComponent(() => import('~/components/Television.vue'));

    useHead({
        title: "Daniel Stoiński Redesign | bio",
        meta: [
            { name: 'og:title', content: 'Daniel Stoiński Redesign | bio' },
            { name: 'description', content: 'Daniel Stoiński Redesign - informacje o właścicielu pracowni i jego aktywności w mediach.' },
            { property: 'og:description', content: 'Daniel Stoiński Redesign - informacje o właścicielu pracowni i jego aktywności w mediach.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
</script>