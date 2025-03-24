<template>
    <div class="grid grid-cols-2 gap-6 lg:gap-12 bg-white">
        <div class="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
                <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Warsztaty</h2>
                <div class="col-span-2 lg:col-span-1 grid md:hidden grid-cols-2 gap-5 mb-5">
                    <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover border border-black" />
                    <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_krzesla.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover border border-black" />
                    <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_szafka.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover border border-black" />
                    <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover border border-black" />
                </div>
                <h3 class="text-lg mb-6 xl:pr-16">Zapraszam na kameralne warsztaty z podstaw renowacji mebli i tapicerowania. Małe grupy sprzyjają maksymalnemu skupieniu i uwadze na obiekcie oraz przekazywanej wiedzy. Porozmawiamy o narzędziach, materiałach i technologii wykonania mebli zgodnie ze sztuką tradycyjnego rzemiosła. Wsród oferty warsztatowej każdy znajdzie coś dla siebie, warsztaty podzielone są na sekcje: krzesło, fotel, stolik/szafka, wyplot rattanem czy warsztaty poświęcone kolekcjonowaniu mebli.</h3>
                <p class="text-lg font-semibold">Nadchodzące terminy:</p>
                <ul v-if="workshop_dates.length > 0" class="list-disc list-inside mt-3 text-lg">
                    <li v-for="ws_date in workshop_dates" :key="ws_date.id" class="mb-2 lowercase">
                        <a :href="ws_date.link" target="_blank" rel="noopener" :aria-label="'termin warsztatu ' + ws_date.name" class="border-b border-[#003450] text-[#003450]">{{ formatDate(ws_date.date, ws_date.date_end) }}</a> - {{ ws_date.name }}
                    </li>
                </ul>
                <div v-else>
                    <p class="mb-2">Brak zaplanowanych warsztatów w najbliższym czasie.</p>
                </div>
            </div>
            <div class="flex justify-end md:justify-start mt-1">
                <NuxtLink v-if="homepage" to="/warsztaty" class=" font-semibold py-1 w-fit border-b border-[#003450] text-[#003450]">
                    zobacz więcej
                </NuxtLink>
            </div>
        </div>
        <!-- <div class="hidden md:grid col-span-2 md:col-span-1 grid-cols-2 gap-6">
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
        </div> -->
        <div class="col-span-2 md:col-span-1 hidden md:grid grid-cols-2 gap-6">
            <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover border border-black" />
            <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_krzesla.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover border border-black" />
            <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_szafka.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover border border-black" />
            <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover border border-black" />
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
    workshop_dates.value = workshopsStore.dates.sort((a, b) => new Date(a) - new Date(b));

    const formatDate = (start, end) => {
        const startDate = new Date(start);
        if (!end) {
            return startDate.toLocaleDateString('pl-PL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }

        const endDate = new Date(end);
        
        if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
            return `${startDate.getDate()} - ${endDate.getDate()} ${startDate.toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })}`;
        } else {
            return `${startDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })} - ${endDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}`;
        }
    };

</script>