<template>
    <div class="grid grid-cols-2 gap-6 bg-white">
        <div class="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
                <h1 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Warsztaty</h1>
                <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="md:hidden w-full h-80 mb-6 object-cover border border-black" />
                <p class="text-lg mb-6 xl:w-4/5">Prowadzę warsztaty w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika. Wszystkie narzędzia i materiały są zapewnione. Warsztaty trwają 8 godzin.</p>
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
        <div class="hidden md:grid col-span-2 md:col-span-1 grid-cols-2 gap-6">
            <div class="relative h-[16rem]">
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
                <div class="w-full h-full bg-[#003450]"></div>
            </div>
            <div class="relative h-[16rem]">
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