<template>
    <div class="">
        <section>
            <div class=" relative text-white mt-24"
                >
                <NuxtImg src="/img/jurek.avif" alt="zdjęcie głównego baneru strony przedstawiające warsztat" class="opacity-90" />                
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl text-center flex flex-col justify-center items-center">
                    <p>Premiera e-booka</p>
                    <p class="mt-3">14.03.2025</p>
                    <NuxtLink to="/o-mnie"  class="mt-4 py-1 w-fit border-b border-white flex justify-center items-center cursor-pointer">
                        sklep
                    </NuxtLink>
                </div>
            </div>
        </section>
        <PageContent>
            <!-- <section class="bg-white mb-24 xl:my-40">
                <EbookHeader :homepage="true" />
            </section> -->
            <section class="bg-white mb-24 xl:mb-40">
                <Suspense>
                    <template #default>
                        <AsyncWorkshopsHeader :homepage="true" />
                    </template>
                    <template #fallback>
                        <p>Loading...</p>
                    </template>
                </Suspense>
            </section>
            <!-- <section class="bg-white mb-24 xl:mb-40">
                <BlogHeader :homepage="true" />
            </section> -->
            <section class="bg-white mb-24 xl:mb-40">
                <StorageHeader :homepage="true" />
            </section>
            <section class="bg-white mb-24 xl:mb-40">
                <AboutHeader :homepage="true" />
            </section>
            <section class="bg-white mb-12">
                <ContactHeader />
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncWorkshopsHeader = defineAsyncComponent(() => import('~/components/workshops/WorkshopsHeader.vue'));
</script>