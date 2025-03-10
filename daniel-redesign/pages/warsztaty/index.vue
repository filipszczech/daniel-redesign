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
                        <div v-if="workshop.desc" class="xl:pr-16">
                            <p v-html="workshop.desc"></p>
                        </div>
                        <div v-if="workshop.plan" class="">
                            <p class="font-semibold">Plan warsztatów:</p>
                            <ul class="list-decimal list-inside mt-2 pr-4 max-h-96 overflow-y-auto custom-scroll">
                                <li v-for="(point, index) in workshop.plan" :key="index" class="mb-2">
                                    <span class="mb-2">{{ point.title }}</span>
                                    <ul v-if="point.subpoints" class="list-disc list-inside mb-2 ml-5">
                                        <li v-for="(subpoint, index) in point.subpoints" :key="index" class="mb-1">{{ subpoint }}</li>
                                    </ul>
                                </li>
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