<template>
    <div class="grid grid-cols-2 gap-6 bg-white">
        <div class="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
                <h1 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Warsztaty</h1>
                <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="md:hidden w-full h-80 mb-6 object-cover border border-black" />
                <p class="text-lg mb-6 xl:pr-16">Zapraszam na kameralne warsztaty z podstaw renowacji mebli i tapicerowania. Małe grupy sprzyjają maksymalnemu skupieniu i uwadze na obiekcie oraz przekazywanej wiedzy. Porozmawiamy o narzędziach, materiałach i technologii wykonania mebli zgodnie ze sztuką tradycyjnego rzemiosła. Wsród oferty warsztatowej każdy znajdzie coś dla siebie, warsztaty podzielone są na sekcje: krzesło, fotel, stolik/szafka, wyplot rattanem czy warsztaty poświęcone kolekcjonowaniu mebli.</p>
                <h1 class="text-lg font-semibold">Nadchodzące terminy:</h1>
                <ul v-if="workshop_dates.length > 0" class="list-disc list-inside mt-3 text-lg">
                    <li v-for="ws_date in workshop_dates" :key="ws_date.id" class="mb-2 lowercase">
                        <a :href="ws_date.link" class="">{{ formatDate(ws_date.date) }}</a> - {{ ws_date.name }}
                    </li>
                </ul>
                <div v-else>
                    <p class="mb-2">Brak zaplanowanych warsztatów w najbliższym czasie.</p>
                </div>
            </div>
            <NuxtLink v-if="homepage" to="/warsztaty" class="font-semibold py-1 w-fit border-b border-[#003450] text-[#003450]">
                zobacz więcej
            </NuxtLink>
        </div>
        <div class="hidden md:grid col-span-2 md:col-span-1 grid-cols-2 gap-6">
            <div class="relative h-[16rem]">
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        homepage: Boolean
    });

    const workshopsStore = useWorkshopsStore();
    const workshop_dates = ref([]);

    await workshopsStore.fetchWorkshopDates();
    workshop_dates.value = workshopsStore.dates;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('pl-PL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    };

</script>