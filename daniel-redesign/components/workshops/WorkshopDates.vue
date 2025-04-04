<template>
    <div class="col-span-12 md:col-span-5 flex flex-col lg:justify-between p-4 lg:p-5">
        <div>
            <h2 class="text-3xl lg:text-4xl mb-4 text-[#731919]">Nadchodzące warsztaty:</h2>
            <ul v-if="workshopsWithDates.length > 0" class="list-inside text-base lg:text-lg pb-4 lg:max-h-96 overflow-y-auto custom-scroll">
                <li v-for="ws in workshopsWithDates" :key="ws.id" class="mb-3">
                    <p class="">> {{ ws.name }}:</p>
                    <div class="">
                        <span v-for="(ws_date, index) in workshopDatesByWorkshop(ws.id)" :key="ws_date.id" class="mr-2">
                            <a :href="ws_date.link" target="_blank" rel="noopener" :aria-label="'termin warsztatu ' + ws_date.name" class="inline-block whitespace-nowrap cursor-pointer hover:underline">
                                {{ formatDate(ws_date.date, ws_date.date_end) }}<span v-if="index !== workshopDatesByWorkshop(ws.id).length - 1">,</span> 
                            </a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="lg:text-end">
            <!-- <p class="text-lg lg:mb-4">Zaobserwuj <a class="border-b border-black">Facebooka</a>, aby być na bieżąco.</p> -->
            <p class="text-base lg:text-lg">
                Zapisy na adres:<br><span class="border-b border-black">halo@danielstoinskiredesign.pl</span>
            </p>
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