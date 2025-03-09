<template>
    <div>
        <PageContent>
            <section class="mb-32">
                <AboutHeader />
            </section>
            <section class="mb-12 xl:mb-24">
                <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">
                    Artykuły
                </h2>
                <p class="mb-9 xl:w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, quamquam in hac divisione rem ipsam prorsus probo. Quae cum dixisset paulumque institisset, Quid est? Duo Reges: constructio interrete
                </p>
                <div class="flex flex-col gap-16 md:gap-24">
                    <div v-for="article in articles" :key="article.title">
                            <AboutArticle :article="article" />
                    </div>
                </div>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const articles = ref([]);
    
    const contentStore = useContentStore();
    await contentStore.fetchArticles();
    articles.value = contentStore.articles;
</script>

<style lang="scss" scoped>

</style>