<template>
    <div class=" bg-white">
        <h1 class="col-span-2 text-5xl text-[#731919] font-semibold mb-6">Warsztaty</h1>
        
        <div class="col-span-2 flex justify-evenly flex-nowrap gap-6">
            <div class="relative">
                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">krzesło</p>
                <NuxtImg src="/img/warsztaty.png" alt="Daniel Stoiński - warsztaty" class="w-full h-[20rem] object-cover border border-black" />
            </div>
            <div class="relative">
                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">fotel</p>
                <NuxtImg src="/img/warsztaty2.jpg" alt="Daniel Stoiński - warsztaty" class="w-full h-[20rem] object-cover border border-black" />
            </div>
            <div class="relative">
                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">stolik / szafka</p>
                <NuxtImg src="/img/warsztaty3.jpg" alt="Daniel Stoiński - warsztaty" class="w-full h-[20rem] object-cover border border-black" />
            </div>
            <div class="relative">
                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">rattan</p>
                <NuxtImg src="/img/warsztaty4.jpg" alt="Daniel Stoiński - warsztaty" class="w-full h-[20rem] object-cover border border-black" />
            </div>
            <!-- <div class="relative">
                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-white">politurowanie</p>
                <NuxtImg src="/img/warsztaty5.jpg" alt="Daniel Stoiński - warsztaty" class="w-full h-[20rem] object-cover border border-black" />
            </div> -->
        </div>
        <p class="col-span-2 my-6 lg:w-2/3">W naszych warsztatach nauczysz się, jak odnawiać meble, jakie narzędzia będą Ci potrzebne oraz jakie kroki należy wykonać, aby odnowić mebel. Warsztaty prowadzone są w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika.</p>
        
        <NuxtLink v-if="homepage" to="/magazyn" class="font-semibold py-1 w-fit border-b border-[#003450] text-[#003450] flex justify-center items-center cursor-pointer">
            sprawdź terminy
        </NuxtLink>
        <!-- <div class="flex flex-col justify-center gap-6">
            <h1 class="text-5xl text-[#731919] font-semibold">Warsztaty</h1>
            <p>W naszych warsztatach nauczysz się, jak odnawiać meble, jakie narzędzia będą Ci potrzebne oraz jakie kroki należy wykonać, aby odnowić mebel. Warsztaty prowadzone są w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika.</p>
            <ul class="list-inside list-disc">
                <p class="mb-1">Dostępne opcje:</p>
                <li class="mb-2"><span class="pb-1 border-b border-black">krzesło</span></li>
                <li class="mb-2"><span class="pb-1 border-b border-black">fotel</span></li>
                <li class="mb-2"><span class="pb-1 border-b border-black">stolik / szafka</span></li>
                <li class="mb-2"><span class="pb-1 border-b border-black">rattan</span></li>
                <li class="mb-2"><span class="pb-1 border-b border-black">ploiturowanie</span></li>
            </ul>
            <div class="flex justify-end">
                <NuxtLink v-if="homepage" to="/magazyn" class="px-1 font-semibold py-1 w-fit border-b border-[#003450] text-[#003450] flex justify-center items-center cursor-pointer">
                    sprawdź terminy
                </NuxtLink>
            </div>
        </div> -->
    </div>
</template>

<script setup>
    defineProps({
        homepage: Boolean
    });

</script>