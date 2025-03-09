<template>
    <div>
        <PageContent>
            <section class="mb-16">
                <div class="grid grid-cols-12 mb-24 md:mb-40 border border-black">
                    <img src="/img/warsztaty2.jpg" class="w-full col-span-12 lg:col-span-8" />
                    <div class="col-span-12 lg:col-span-4 flex flex-col justify-center gap-6 lg:gap-9 p-6 xl:p-12">
                        <h1 class="text-4xl font-semibo">Terminy warsztatów:</h1>
                        <ul v-if="workshop_dates.length > 0" class="list-inside text-xl">
                            <li v-for="ws_date in workshop_dates" :key="ws_date.id" class="mb-4">
                                <p class="uppercase">{{ ws_date.name }}:</p>
                                <span class="mt-2">> <a :href="ws_date.link" class="border-b border-black">{{ ws_date.date }}</a></span>
                            </li>
                        </ul>
                        <div v-else class="text-xl">
                            <p class="mb-2">Brak zaplanowanych warsztatów w najbliższym czasie.</p>
                            <p>Sprawdź mojego <a class="border-b border-black">Facebooka</a>, aby być na bieżąco.</p>
                        </div>
                    </div>
                </div>
                <div v-for="(workshop, index) in workshops" :key="workshop.id" class="grid grid-cols-2 gap-6 lg:gap-16 mb-24 xl:mb-24">
                    <div class="col-span-2 lg:col-span-1 flex flex-col justify-center gap-6"
                        :class="index % 2 === 0 && 'lg:order-2'">
                        <h1 class="text-5xl text-[#731919] font-semibold">{{ workshop.name }}</h1>
                        <p class="xl:w-4/5">{{ workshop.desc }}</p>
                        <div>
                            <ul class="list-disc list-inside mt-3">
                                <li v-for="point in workshop.points" :key="point" class="mb-2">{{ point }}</li>
                            </ul>
                        </div>
                    </div>
                    <img :src="workshop.img" class="col-span-2 lg:col-span-1 w-full h-96 lg:h-[36rem] object-cover bg-white border border-black" />
                </div>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const workshopsStore = useWorkshopsStore();
    const workshops = ref([]);
    const workshop_dates = ref([]);

    await workshopsStore.fetchWorkshops();
    workshops.value = workshopsStore.workshops;

    await workshopsStore.fetchWorkshopDates();
    workshop_dates.value = workshopsStore.dates;
</script>