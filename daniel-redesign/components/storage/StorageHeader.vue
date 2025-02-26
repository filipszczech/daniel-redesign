<template>
    <div class="grid grid-cols-2 gap-6 lg:gap-12 bg-white">
        <div class="grid grid-cols-2 gap-6">
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
            <NuxtImg src="/img/storage.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-52 object-cover border border-black" />
        </div>
        <!-- <NuxtImg src="https://zwyklezycie.pl/wp-content/uploads/2018/01/dscf5704_h.jpg" alt="Daniel Stoiński - magazyn" class="w-full h-[32rem] object-cover border border-black" /> -->
        <div class="flex flex-col justify-between gap-6">
            <div> 
                <h1 class="text-5xl text-[#731919] font-semibold  w-fit mb-6">Magazyn</h1>
                <p>W naszym magazynie znajdziesz wiele ciekawych mebli, które czekają na renowację. Znajdziesz tu zarówno meble z lat 60-tych, jak i nowsze, które czekają na odświeżenie. Wszystkie meble są w dobrym stanie, a ich renowacja pozwoli im na długie lata służby.</p>
            </div>
            <div class="flex justify-end">
                <NuxtLink v-if="homepage" to="/magazyn" class="px-1 font-semibold py-1 w-fit border-b border-[#003450] text-[#003450] flex justify-center items-center cursor-pointer">
                    zobacz
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