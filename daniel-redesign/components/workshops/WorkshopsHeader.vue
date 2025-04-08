<template>
    <div class="grid grid-cols-2 gap-6 lg:gap-12 bg-[#f8f5f0]">
        <div class="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
                <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Warsztaty</h2>
                <div class="col-span-2 lg:col-span-1 grid md:hidden grid-cols-2 gap-5 mb-5">
                    <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover" />
                    <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_krzesla.webp" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover" />
                    <NuxtImg src="https://media.filipszczech-dev.pl/realizacje/pracownia39.webp" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover" />
                    <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_szafka.webp" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover" />
                </div>
                <h3 class="text-base md:text-lg mb-6 xl:pr-10">Zapraszam na kameralne warsztaty z podstaw renowacji mebli i tapicerowania. Małe grupy sprzyjają maksymalnemu skupieniu i uwadze na obiekcie oraz przekazywanej wiedzy. Porozmawiamy o narzędziach, materiałach i technologii wykonania mebli zgodnie ze sztuką tradycyjnego rzemiosła. Wsród oferty warsztatowej każdy znajdzie coś dla siebie, warsztaty podzielone są na sekcje: krzesło, fotel, stolik/szafka, wyplot rattanem czy warsztaty poświęcone kolekcjonowaniu mebli.</h3>
                <p class="text-base md:text-lg font-semibold mb-3">Rodzaje warsztatów:</p>
                <div class="flex gap-3 flex-wrap text-lg mb-6">
                    <div v-for="w in workshops" :key="w.id" class="border border-black hover:bg-[#003450] hover:bg-opacity-90 hover:text-white transition-all duration-300">
                        <NuxtLink :to="'/warsztaty' + '#workshop_' + w.id">
                            <p class="px-3 py-1">{{ w.name }}</p>
                        </NuxtLink>
                    </div>
                </div>
                <ul v-if="workshopDates.length > 0" class="list-inside text-base md:text-lg pb-4 lg:max-h-72 overflow-y-auto custom-scroll lg:pr-16">
                    <p class="text-lg font-semibold mb-2">Najbliższe terminy:</p>
                    <li v-for="ws in workshopDates.slice(0, 2)" :key="ws.id" class="mb-2">
                        <p class="w-fit">> {{ ws.name }}: 
                            <span v-if="ws.link">
                                <a :href="ws.link" class="cursor-pointer" target="_blank" rel="noopener" aria-label="Link do wydarzenia"><u>{{ formatDate(ws.date, ws.date_end) }}</u></a>
                            </span>
                            <span v-else>
                                <u>{{ formatDate(ws.date, ws.date_end) }}</u>
                            </span>
                        </p>
                    </li>
                </ul>
                <div v-else>
                    <p class="mb-2 text-base md:text-lg">Brak zaplanowanych warsztatów w najbliższym czasie.</p>
                </div>
            </div>
            <div class="flex justify-end md:justify-start mt-1">
                <NuxtLink v-if="homepage" to="/warsztaty" class=" font-semibold py-1 w-fit border-b border-[#003450] text-[#003450]">
                    zobacz więcej
                </NuxtLink>
            </div>
        </div>
        <div class="col-span-2 md:col-span-1 hidden md:grid grid-cols-2 gap-6">
            <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
            <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_krzesla.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
            <NuxtImg src="https://media.filipszczech-dev.pl/realizacje/pracownia39.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
            <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_szafka.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        homepage: Boolean
    });

    const workshopsStore = useWorkshopsStore();
    const workshopDates = ref([]);
    const workshops = ref([]);
    await workshopsStore.fetchWorkshopDates();
    await workshopsStore.fetchWorkshops();
    workshopDates.value = workshopsStore.dates;
    workshops.value = workshopsStore.workshops;

    const workshopsWithDates = computed(() =>
        workshops.value.filter(ws => workshopDatesByWorkshop(ws.id).length > 0)
    );

    const workshopDatesByWorkshop = (workshopId) => {
        return workshopDates.value.filter(date => date.workshop_id === workshopId);
    };

    await workshopsStore.fetchWorkshopDates();
    workshopDates.value = workshopsStore.dates.sort((a, b) => new Date(a) - new Date(b));

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