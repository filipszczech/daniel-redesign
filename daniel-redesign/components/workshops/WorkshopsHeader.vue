<template>
    <div class="grid grid-cols-2 gap-6 bg-white">
        <div class="flex flex-col justify-between">
            <div>
                <h1 class="text-5xl text-[#731919] font-semibold mb-6">Warsztaty</h1>
                <p class="text-lg mb-6">Prowadzę warsztaty w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika. Wszystkie narzędzia i materiały są zapewnione. Warsztaty trwają 8 godzin.</p>
                <h1 class="text-lg font-semibold">Nadchodzące terminy:</h1>
                <ul class="list-disc list-inside mt-3 text-lg">
                    <li class="mb-2">10 marca 2025 - wyplatanie ratannu</li>
                    <li class="mb-2">15 marca 2025 - odnawianie krzesła</li>
                    <li class="mb-2">20 marca 2025 - malowanie ściany</li>
                    <li class="mb-2">25 marca 2025 - lakierowanie stołu</li>
                </ul>
            </div>
            <NuxtLink v-if="homepage" to="/warsztaty" class="font-semibold py-1 w-fit border-b border-[#003450] text-[#003450]">
                zobacz więcej
            </NuxtLink>
        </div>
        <div class="col-span-1 grid grid-cols-2 gap-6">
            <!-- <div class="col-span-2 h-[34rem]">
                <NuxtImg src="/img/warsztaty3.jpg" alt="Daniel Stoiński - warsztaty" class="w-full h-full object-cover border border-black" />
            </div> -->
            <div class="relative h-[16rem]">
                <!-- <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">krzesło</p> -->
                <!-- <NuxtImg src="/img/image.png" alt="Daniel Stoiński - warsztaty" class="w-full h-full object-cover border border-black" /> -->
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <!-- <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">fotel</p> -->
                <!-- <NuxtImg src="/img/image.png" alt="Daniel Stoiński - warsztaty" class="w-full h-full object-cover border border-black" /> -->
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <!-- <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">stolik / szafka</p> -->
                <!-- <NuxtImg src="/img/image.png" alt="Daniel Stoiński - warsztaty" class="w-full h-full object-cover border border-black" /> -->
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <!-- <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">rattan</p> -->
                <!-- <NuxtImg src="/img/image.png" alt="Daniel Stoiński - warsztaty" class="w-full h-full object-cover border border-black" /> -->
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        homepage: Boolean
    });

</script>