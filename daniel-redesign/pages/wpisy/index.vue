<template>
    <div>
        <PageContent>
            <section class="">
                <div>
                    <h1 class="text-6xl text-[#731919] mb-6 font-semibold">Blog</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                        <div v-for="post in displayedPosts" :key="post.title" class="xl:mb-12">
                            <BlogCard :post="post" />
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center mt-6">
                    <button
                        v-if="postsToShow < posts.length"
                        @click="loadMorePosts"
                        class="mx-auto p-1 border-b border-black"
                        >
                        Załaduj więcej
                    </button>
                </div>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const posts = ref([
        {
            title: 'Renowacja stołu',
            slug: 'renowacja-stolu',
            img: '/img/blog1.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...',
            tags: ['renowacja', 'stół']
        },
        {
            title: 'Występ w Łowcach',
            slug: 'wystep-w-lowcach',
            img: '/img/blog2.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...',
            tags: ['renowacja', 'łowcy']
        },
        {
            title: 'Sesja z pieskami',
            slug: 'sesja-z-pieskami',
            img: '/img/blog3.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...',
            tags: ['lifestyle', 'pieski']
        },
        {
            title: 'Sesja z kotkami',
            slug: 'sesja-z-kotkami',
            img: '/img/kontakt.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...',
            tags: ['lifestyle', 'kotki']
        }
    ]);
    

    const displayedPosts = ref([]);
    const postsToShow = ref(4);
    displayedPosts.value = posts.value.slice(0, postsToShow.value);

    const loadMorePosts = () => {
        postsToShow.value += 4;
        displayedPosts.value = posts.value.slice(0, postsToShow.value);
    };
</script>

<style lang="scss" scoped>

</style>