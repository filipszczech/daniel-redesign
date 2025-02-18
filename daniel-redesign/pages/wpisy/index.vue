<template>
    <div>
        <PageContent>
            <section class="mb-32 xl:mb-40">
                <div>
                    <h1 class="text-5xl text-[#731919] mb-6 font-semibold">Wpisy</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div v-for="post in posts" :key="post.title">
                            <BlogCard :post="post" />
                        </div>
                    </div>
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
        }
    ]);
</script>

<style lang="scss" scoped>

</style>