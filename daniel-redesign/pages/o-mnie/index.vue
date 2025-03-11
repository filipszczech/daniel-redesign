<template>
    <div>
        <PageContent>
            <section class="mb-32">
                <AboutHeader />
            </section>
            <section class="mb-12 xl:mb-24">
                <Suspense>
                    <template #default>
                        <AsyncArticlesComponent />
                    </template>
                    <template #fallback>
                        <p>Loading...</p>
                    </template>
                </Suspense>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncArticlesComponent = defineAsyncComponent(() => import('~/components/Articles.vue'));
</script>