<template>
    <div>
        <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">
            Artykuły
        </h2>
        <p class="mb-9 xl:w-2/3">
            Mówiono i pisano o mnie za co jestem ogromnie wdzięczny! Zainteresowanych zapraszam do sentymentalnej podróży pełnej pasji do rzemiosła, wzornictwa i meblarstwa.     
        </p>
        <div class="flex flex-col gap-16 md:gap-24">
            <div v-for="article in articles" :key="article.title">
                    <AboutArticle :article="article" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const articles = ref([]);

    const contentStore = useContentStore();
    await contentStore.fetchArticles();
    articles.value = contentStore.articles;
</script>