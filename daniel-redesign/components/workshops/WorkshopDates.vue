<template>
    <div class="col-span-12 lg:col-span-4 flex flex-col justify-center gap-6 lg:gap-9 p-6 xl:p-12">
        <h1 class="text-4xl font-semibo">Terminy warsztatów:</h1>
        <ul v-if="workshopDates.length > 0" class="list-inside text-xl">
            <li v-for="ws_date in workshopDates" :key="ws_date.id" class="mb-4">
                <p class="uppercase">{{ ws_date.name }}:</p>
                <span class="mt-2">> <a :href="ws_date.link" target="_blank" rel="noopener" :aria-label="'termin warsztatu ' + ws_date.name" class="border-b border-black">{{ ws_date.date }}</a></span>
            </li>
        </ul>
        <div v-else class="text-xl">
            <p class="mb-2">Brak zaplanowanych warsztatów w najbliższym czasie.</p>
            <p>Sprawdź mojego <a class="border-b border-black">Facebooka</a>, aby być na bieżąco.</p>
        </div>
    </div>
</template>

<script setup>
    const workshopsStore = useWorkshopsStore();
    const workshopDates = ref([]);
    await workshopsStore.fetchWorkshopDates();
    workshopDates.value = workshopsStore.dates;
</script>