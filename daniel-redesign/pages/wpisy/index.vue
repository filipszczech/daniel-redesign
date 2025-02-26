<template>
    <div>
        <PageContent>
            <section class="mb-32 xl:mb-40">
                <div>
                    <h1 class="text-6xl text-[#731919] mb-6 font-semibold">Blog</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
            img: 'http://www.danielstoinskiredesign.pl/wp-content/gallery/2/5.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...'
        },
        {
            title: 'Występ w Łowcach',
            img: 'http://www.danielstoinskiredesign.pl/wp-content/gallery/lookbook-3/DME8550.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...'
        },
        {
            title: 'Sesja z pieskami',
            img: 'http://www.danielstoinskiredesign.pl/wp-content/gallery/2/19.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...'
        },
        {
            title: 'Sesja z kotkami',
            img: '/img/kontakt.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...'
        }
    ]);
    

    const displayedPosts = ref([]);
    const postsToShow = ref(3);
    displayedPosts.value = posts.value.slice(0, postsToShow.value);

    const loadMorePosts = () => {
        postsToShow.value += 3;
        displayedPosts.value = posts.value.slice(0, postsToShow.value);
    };
</script>

<style lang="scss" scoped>

</style>