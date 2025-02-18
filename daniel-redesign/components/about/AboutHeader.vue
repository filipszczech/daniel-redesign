<template>
    <div class="grid grid-cols-2 gap-6 lg:gap-12 border-[#003450]">
        <div class="flex flex-col justify-center gap-6">
            <h1 class="text-5xl text-[#731919] font-semibold">Daniel Stoiński</h1>
            <p>
                Jestem kulturoznawcą i czeladnikiem tradycyjnego rzemiosła, specjalizującym się w meblarstwie oraz renowacji. Od 10 lat zajmuję się kompleksową renowacją mebli, prowadząc stolarsko-tapicerskie warsztaty i szkolenia. Mam doświadczenie w pracy na Wydziale Sztuki Uniwersytetu KEN w Krakowie, gdzie uczę przyszłych mistrzów rzemiosła.    
            </p>
            <div v-if="homepage" class="flex justify-start">
                <NuxtLink to="/o-mnie"  class="px-1 font-semibold py-1 w-fit border-b border-[#003450] text-[#003450] flex justify-center items-center cursor-pointer">
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
        <img src="https://www.asp.krakow.pl/wp-content/uploads/2024/06/3.-Daniel-Stoinski.jpg" class="w-full h-[40rem] object-cover bg-white border border-black" />
    </div>
</template>

<script setup>
    defineProps({
        homepage: Boolean
    });
</script>