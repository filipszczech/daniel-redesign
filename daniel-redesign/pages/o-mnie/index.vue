<template>
    <div>
        <PageContent>
            <section class="mb-32">
                <AboutHeader />
            </section>
            <section class="mb-12 xl:mb-24">
                <h2 class="text-5xl text-[#731919] font-semibold mb-6">
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

    const articles = ref([
        {
            title: 'Daniel Stoiński - Hygge Blog',
            img: 'https://hygge-blog.com/wp-content/uploads/2018/01/mili_2017_11_26-100-1.jpg',
            desc: 'Dziś rozmawiamy z Danielem Stoińskim – twórcą sklepu z powojennym dizajnem Pikasy Sklep oraz Daniel Stoiński Redesign. Daniel mieszka w Krakowie i tu też ma swoją pracownię, w której odrestaurowuje meble.',
            link: 'https://hyggel-blog.com/daniel-stoinski/'
        },
        {
            title: 'Z wizytą - Daniel Stoiński',
            img: 'https://patyna-storage.fra1.digitaloceanspaces.com/5eae24a9ef2645af168ecf1f514d26ff.jpg',
            desc: 'Krótkie streszczenie wpisu. Ciąg dalszy w środku...',
            link: 'https://patyna.pl/blog/z-wizyta-daniel-stoinski/'
        },
        {
            title: 'Moda na dizajn z PRL',
            img: 'https://www.asp.krakow.pl/wp-content/uploads/2024/03/Dizajn_na_fali_1108x528-1080x528.jpg',
            desc: 'Dziś rozmawiamy z Danielem Stoińskim – twórcą sklepu z powojennym dizajnem Pikasy Sklep oraz Daniel Stoiński Redesign. Daniel mieszka w Krakowie i tu też ma swoją pracownię, w której odrestaurowuje meble.',
            link: 'https://hyggel-blog.com/daniel-stoinski/'
        }
    ]);
</script>

<style lang="scss" scoped>

</style>