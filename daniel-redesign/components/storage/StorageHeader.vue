<template>
    <div class="grid grid-cols-2 gap-6 lg:gap-12 bg-white">
        <div class="col-span-2 lg:col-span-1 hidden lg:grid grid-cols-2 gap-6">
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
        </div>
        <div class="col-span-2 lg:col-span-1 flex flex-col justify-between gap-6">
            <div> 
                <h1 class="text-4xl md:text-5xl text-[#731919] font-semibold  w-fit mb-6">Magazyn</h1>
                <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="lg:hidden w-full h-80 mb-6 object-cover border border-black" />
                <p>W naszym magazynie znajdziesz wiele ciekawych mebli, które czekają na renowację. Znajdziesz tu zarówno meble z lat 60-tych, jak i nowsze, które czekają na odświeżenie. Wszystkie meble są w dobrym stanie, a ich renowacja pozwoli im na długie lata służby.</p>
            </div>
            <div class="flex justify-end">
                <NuxtLink v-if="homepage" to="/magazyn" class="px-1 font-semibold py-1 w-fit border-b border-[#003450] text-[#003450] flex justify-center items-center cursor-pointer">
                    zobacz magazyn
                </NuxtLink>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    defineProps({
        homepage: Boolean
    });

</script>