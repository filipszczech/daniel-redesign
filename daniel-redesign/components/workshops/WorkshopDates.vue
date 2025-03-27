<template>
    <div class="col-span-12 md:col-span-5 flex flex-col lg:justify-between p-4 lg:p-6">
        <div>
            <h2 class="text-3xl lg:text-4xl mb-4 text-[#731919]">Nadchodzące warsztaty:</h2>
            <ul v-if="workshopDates.length > 0" class="list-inside text-base lg:text-lg pb-4 lg:max-h-48 xl:max-h-64 overflow-y-auto custom-scroll">
                <li v-for="ws_date in workshopDates" :key="ws_date.id" class="mb-4">
                    <span class="w-fit">> {{ ws_date.name }}</span><br>
                    <span class="mt-2">Data wydarzenia: <a :href="ws_date.link" target="_blank" rel="noopener" :aria-label="'termin warsztatu ' + ws_date.name" class="border-b border-black">{{ formatDate(ws_date.date, ws_date.date_end) }}</a></span>
                </li>
            </ul>
            <div v-else class="text-base lg:text-lg">
                <p class="mb-2">Brak zaplanowanych warsztatów w najbliższym czasie.</p>
            </div>
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
    await workshopsStore.fetchWorkshopDates();
    workshopDates.value = workshopsStore.dates;

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