<template>
    <div>
        <PageContent>
            <section class="mb-16">
                <div class="grid grid-cols-12 mb-24 md:mb-40 border border-black">
                    <img src="/img/warsztaty2.jpg" class="w-full col-span-12 lg:col-span-8" />
                    <div class="col-span-12 lg:col-span-4 flex flex-col justify-center gap-6 lg:gap-12 p-6 xl:p-12">
                        <h1 class="text-4xl font-semibo">Terminy warsztatów:</h1>
                        <ul class="list-inside text-xl">
                            <li class="mb-4">
                                <p class="uppercase">Odnawianie krzesła:</p>
                                <span class="mt-2">> 15 marca 2025</span>
                            </li>
                            <li class="mb-4">
                                <p class="uppercase">Wyplatanie ratannu:</p>
                                <span class="mt-2">> 15 marca 2025</span>
                            </li>
                            <li class="mb-4">
                                <p class="uppercase">Lakierowanie stołu:</p>
                                <span class="mt-2">> 19 marca 2025</span>
                            </li>
                            <li class="">
                                <p class="uppercase">Malowanie ściany:</p>
                                <span class="mt-2">> 20 marca 2025</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <h1 class="text-5xl text-[#731919] font-semibold">Terminy warsztatów:</h1>
                <ul class="list-disc list-inside mt-3 text-2xl mb-24">
                    <li class="mb-2">10 marca 2025 - wyplatanie ratannu</li>
                    <li class="mb-2">15 marca 2025 - odnawianie krzesła</li>
                    <li class="mb-2">20 marca 2025 - malowanie ściany</li>
                    <li class="mb-2">25 marca 2025 - lakierowanie stołu</li>
                </ul> -->
                <div v-for="(workshop, index) in workshops" :key="workshop.id" class="grid grid-cols-2 gap-6 lg:gap-16 mb-24 xl:mb-24">
                    <div class="col-span-2 lg:col-span-1 flex flex-col justify-center gap-6"
                        :class="index % 2 === 0 && 'lg:order-2'">
                        <h1 class="text-5xl text-[#731919] font-semibold">{{ workshop.name }}</h1>
                        <p class="xl:w-4/5">{{ workshop.desc }}</p>
                        <div>
                            <ul class="list-disc list-inside mt-3">
                                <li v-for="detail in workshop.details" :key="detail" class="mb-2">{{ detail }}</li>
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
    const workshops = ref([
        { 
            id: 1, 
            name: "Krzesło", 
            img: "/img/warsztaty.png", 
            desc: "Warsztaty polegają na odnowieniu kultowego krzesła Hałas. W trakcie warsztatów uczestnicy dowiedzą się, jak przygotować krzesło do renowacji, jakie narzędzia będą potrzebne oraz jakie kroki należy wykonać, aby odnowić krzesło Hałas." ,
            details: [
                "Warsztaty prowadzone są w małych grupach",
                "Indywidualne podejście do każdego uczestnika",
                "Wszystkie narzędzia i materiały są zapewnione",
                "Warsztaty trwają 8 godzin"
            ]
        },
        { 
            id: 2, 
            name: "Rattan", 
            img: "/img/warsztaty2.jpg", 
            desc: "Warsztaty polegają na odnowieniu kultowego krzesła Hałas. W trakcie warsztatów uczestnicy dowiedzą się, jak przygotować krzesło do renowacji, jakie narzędzia będą potrzebne oraz jakie kroki należy wykonać, aby odnowić krzesło Hałas." ,
            details: [
                "Warsztaty prowadzone są w małych grupach",
                "Indywidualne podejście do każdego uczestnika",
                "Wszystkie narzędzia i materiały są zapewnione",
                "Warsztaty trwają 8 godzin"
            ]
        },
    ]);

</script>