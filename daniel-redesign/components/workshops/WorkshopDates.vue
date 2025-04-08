<template>
    <div class="">
        <div class="grid grid-cols-2 gap-6 lg:gap-12 bg-[#f8f5f0] mb-12 xl:mb-24">
            <div class="col-span-2 md:col-span-1 flex flex-col ">
                <div>
                    <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Warsztaty</h2>
                    <div class="col-span-2 lg:col-span-1 grid md:hidden grid-cols-2 gap-5 mb-5">
                        <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover" />
                        <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_krzesla.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover" />
                        <NuxtImg src="https://media.filipszczech-dev.pl/realizacje/pracownia39.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover" />
                        <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_szafka.webp" alt="Daniel Stoiński - magazyn" class="w-full h-64 object-cover" />
                    </div>
                    <h3 class="text-lg mb-6 xl:pr-16">Zapraszam na kameralne warsztaty z podstaw renowacji mebli i tapicerowania. Małe grupy sprzyjają maksymalnemu skupieniu i uwadze na obiekcie oraz przekazywanej wiedzy. Porozmawiamy o narzędziach, materiałach i technologii wykonania mebli zgodnie ze sztuką tradycyjnego rzemiosła. Wsród oferty warsztatowej każdy znajdzie coś dla siebie, warsztaty podzielone są na sekcje: krzesło, fotel, stolik/szafka, wyplot rattanem czy warsztaty poświęcone kolekcjonowaniu mebli.</h3>
                </div>
                <p class="text-lg font-semibold mb-3">Rodzaje warsztatów:</p>
                <div class="flex gap-3 flex-wrap text-base md:text-lg">
                    <div @click="scrollToWorkshop(w.id)" v-for="w in workshops" :key="w.id" class="border border-black px-3 py-1 cursor-pointer hover:bg-[#003450] hover:bg-opacity-90 hover:text-white transition-all duration-300">
                        <p>{{ w.name }}</p>
                    </div>
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 hidden md:grid grid-cols-2 gap-6">
                <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_fotele.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
                <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_krzesla.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
                <NuxtImg src="https://media.filipszczech-dev.pl/realizacje/pracownia39.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
                <NuxtImg src="https://media.filipszczech-dev.pl/warsztaty_szafka.webp" alt="Daniel Stoiński - magazyn" class="w-full h-80 object-cover" />
            </div>
        </div>
        <div class="grid grid-cols-12 gap-6 xl:gap-12">
            <div class="col-span-12 flex flex-col gap-1">
                <h2 class="text-2xl md:text-4xl font-semibold mb-3 md:mb-5">Terminy warsztatów:</h2>
                <div v-for="ws in workshopDates" :key="ws.id" class="group flex gap-6 xl:gap-12 justify-between items-center w-full py-3 border-b border-gray-400 md:hover:translate-x-2 transition-all duration-500 ease-in-out">
                    <div class="flex gap-4 md:gap-6 xl:gap-12 items-center">
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-col justify-between w-12 md:w-20 text-[#003450] group-hover:text-[#731919] transition-all duration-500 ease-in-out">
                                <!-- <p>{{ getWeekdays(ws.date, ws.date_end)}}</p> -->
                                <p class="text-sm md:text-xl">{{ getMonths(ws.date, ws.date_end) }}</p>
                                <div class="text-lg md:text-3xl font-semibold">{{  getDays(ws.date, ws.date_end) }}</div>
                            </div>
                        </div>
                        <div class="hidden sm:block w-36 md:w-40">
                            <p class="text-sm md:text-lg">{{ getWeekdays(ws.date, ws.date_end)}}</p>
                        </div>
                        <div class="">
                            <p class="font-semibold text-base md:text-2xl md:text-end">{{ ws.name }}</p>
                        </div>
                    </div>
                    <div class="flex gap-6 items-center">
                        <!-- <p class="text-[#003450] font-semibold">dostępne miejsca</p> -->
                        <a v-if="ws.link" :href="ws.link" target="_blank" rel="noopener" aria-label="Link do wydarzenia" class="border border-black px-3 py-1 text-sm md:text-lg cursor-pointer hover:bg-[#003450] hover:bg-opacity-90 hover:text-white transition-all duration-300">wydarzenie</a>
                        <a v-else class="border border-black px-3 py-1 text-sm md:text-lg">wydarzenie</a>
                    </div>
                </div>
                <p class="text-base lg:text-lg mt-4 text-center">
                    Zapisy na adres:<span class="border-b border-black ml-2">halo@danielstoinskiredesign.pl</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
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

    const getWeekdays = (start, end) => {
        const startDate = new Date(start);
        const startWeekday = new Intl.DateTimeFormat('pl', { weekday: 'long' }).format(startDate);
        if(end) {
            const endDate = new Date(end);
            const endWeekday = new Intl.DateTimeFormat('pl', { weekday: 'long' }).format(endDate);
            return `${startWeekday} - ${endWeekday}`;
        }
        return startWeekday;
    }

    function getMonths(startDateStr, endDateStr) {
        const startDate = new Date(startDateStr)
        const startMonth = new Intl.DateTimeFormat('pl', { month: 'short' }).format(startDate)

        if (!endDateStr) {
            return startMonth
        }

        const endDate = new Date(endDateStr)
        const endMonth = new Intl.DateTimeFormat('pl', { month: 'short' }).format(endDate)

        if (startMonth === endMonth) {
            return startMonth
        }

        return `${startMonth}/${endMonth}`
    }

    function getDays(startDateStr, endDateStr) {
        const startDate = new Date(startDateStr)
        const startDay = new Intl.DateTimeFormat('pl', { day: '2-digit' }).format(startDate)

        if (!endDateStr) {
            return startDay
        }

        const endDate = new Date(endDateStr)
        const endDay = new Intl.DateTimeFormat('pl', { day: '2-digit' }).format(endDate)

        if (startDay === endDay) {
            return startDay
        }

        return `${startDay}-${endDay}`
    }

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

    function scrollToWorkshop(workshopId) {
        const workshopElement = document.getElementById('workshop_' + workshopId);
        if (workshopElement) {
            workshopElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
</script>

<style scoped>
    .custom-scroll::-webkit-scrollbar {
        width: 9px;
        border-radius: 16px;
    }

    .custom-scroll::-webkit-scrollbar-thumb {
        background: rgb(31, 31, 31);
        border-radius: 16px;
    }

    .custom-scroll::-webkit-scrollbar-track {
        background: rgb(223, 222, 222);
        border-radius: 16px;
    }
</style>