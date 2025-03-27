<template>
    <div>
        <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">
            Występy w telewizji
        </h2>
        <p class="mb-9 xl:w-3/4">
            Miałem przyjemność gościć również na szklanym ekranie. Przygodę z telewizją rozpocząłem od krótkiej serii poświęconej najważniejszym dokonaniom polskiego designu „Rzecz Polska”. W odpowiedzi na powracającą modę vintage designu redakcja DDTVN stworzyła materiał o mojej pasji w dawaniu drugiego życia meblom zapomnianym i nie chcianym. Kojarzony jednak jestem przede wszystkim z programem „Łowcy Skarbów. Kto da więcej” w którym jestem ekspertem z zakresu meblarstwa i drewna. 
        </p>
        <div class="flex flex-col gap-16 md:gap-24">
            <div v-for="item in television" :key="item.id">
                    <AboutArticle :article="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const television = ref([]);

    const contentStore = useContentStore();
    await contentStore.fetchTelevision();
    television.value = contentStore.television;
</script>