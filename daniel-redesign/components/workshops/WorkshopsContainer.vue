<template>
    <div>
        <div v-for="(workshop, index) in workshops" :id="'workshop_' + workshop.id" :key="workshop.id" class="grid grid-cols-2 gap-6 lg:gap-16 pt-24 xl:pt-40">
            <div class="col-span-2 md:col-span-1 flex flex-col justify-center gap-3 md:gap-6"
                :class="index % 2 === 0 && 'lg:order-2'">
                <h3 class="text-3xl md:text-5xl text-[#731919] font-semibold">{{ workshop.name }}</h3>
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
            <div class="col-span-2 md:col-span-1 flex items-center"
                :class="index % 2 ? 'justify-end' : 'justify-start'">
                <NuxtImg :src="workshop.img" :alt="'zdjęcie z warsztatu: ' + workshop.name" class="w-full xl:w-4/5 md:h-96 lg:h-[36rem] object-cover bg-[#f8f5f0]" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const workshopsStore = useWorkshopsStore();
    const workshops = ref([]);

    await workshopsStore.fetchWorkshops();
    workshops.value = workshopsStore.workshops;
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