<template>
    <div class="grid grid-cols-2 gap-6 lg:gap-12 border-[#003450]">
        <div class="col-span-2 md:col-span-1 flex flex-col justify-center gap-4 md:gap-6">
            <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold">Daniel Stoiński</h2>
            <NuxtImg src="https://www.asp.krakow.pl/wp-content/uploads/2024/06/3.-Daniel-Stoinski.jpg" alt="Daniel Stoiński - zdjęcie profilowe" class="md:hidden col-span-2 w-full h-[28rem] object-cover bg-white border border-black" />
            <h3>
                Jestem kulturoznawcą i czeladnikiem tradycyjnego rzemiosła, właścicielem pracowni renowacji mebli Daniel Stoiński Redesign oraz sklepu z powojennym dizajnem Pikasy Sklep. Od 11 lat zajmuję się kompleksową renowacją mebli, prowadząc stolarsko-tapicerskie warsztaty i szkolenia. Mam również przyjemność być ekspertem w programie telewizyjnym „Łowcy Skarbów. Kto da więcej” w TV4. Prywatnie jestem kolekcjonerem powojennego wzornictwa oraz ojcem dwóch charcich adopciaków Abbie i Sake.   
            </h3>
            <div v-if="homepage" class="flex justify-end md:justify-start">
                <NuxtLink to="/o-mnie"  class="px-1 font-semibold pb-1 w-fit border-b border-[#003450] text-[#003450] flex justify-center items-center cursor-pointer">
                    o mnie
                </NuxtLink>
            </div>
            <div v-else>
                <ul class="list-disc list-inside mt-3">
                    <li class="mb-2">Właściciel pracowni renowacji mebli "Daniel Stoiński Redesign"</li>
                    <li class="mb-2">Specjalista w meblarstwie i renowacji mebli</li>
                    <li>Organizator warsztatów i szkoleń stolarskich</li>
                </ul>
            </div>
        </div>
        <img src="https://www.asp.krakow.pl/wp-content/uploads/2024/06/3.-Daniel-Stoinski.jpg" class="hidden md:block col-span-1 w-full h-[40rem] object-cover bg-white border border-black" />
    </div>
</template>

<script setup>
    defineProps({
        homepage: Boolean
    });
</script>