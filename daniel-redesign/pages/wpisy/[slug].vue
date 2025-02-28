<template>
    <div>
        <PageContent>
            <article>
                <ContentRenderer v-if="data" :value="data" />
                <div v-else>Nie znaleziono takiego wpisu. :(</div>
                <p class="text-5xl"></p>
            </article>
        </PageContent>
    </div>
</template>

<script setup>
    const { params } = useRoute()
    const { data } = await useAsyncData(params.slug, () => {
    return queryCollection('content').path(`/blog/${params.slug}`).first()
    })
</script>

<style>
    article h1 {
        font-size: 3rem;
        color: #731919;
        margin-bottom: 1rem;
        font-weight: 600;
    }
</style>