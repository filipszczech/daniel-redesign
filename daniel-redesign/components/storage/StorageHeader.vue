<template>
    <div class="grid grid-cols-2 gap-6 lg:gap-12 bg-white">
        <div class="col-span-2 md:col-span-1 hidden md:grid grid-cols-2 gap-6">
            <NuxtImg src="/img/header1.webp" alt="Daniel Stoiński - magazyn" class="w-full object-cover border border-black" />
            <NuxtImg src="/img/header2.webp" alt="Daniel Stoiński - magazyn" class="w-full object-cover border border-black" />
            <!-- <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/magazyn/magazyn47.webp" alt="Daniel Stoiński - magazyn" class="w-full h-72 object-cover border border-black" />
            <NuxtImg src="https://pub-5be065d2652c42c9a2d1b8d19ca5dbaf.r2.dev/magazyn/magazyn42.webp" alt="Daniel Stoiński - magazyn" class="w-full h-72 object-cover border border-black" /> -->
        </div>
        <div class="col-span-2 md:col-span-1 flex flex-col justify-between gap-6">
            <div> 
                <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold  w-fit mb-6">Magazyn</h2>
                <div class="col-span-2 grid md:hidden grid-cols-2 gap-5 mb-5">
                    <NuxtImg src="/img/header1.webp" alt="Daniel Stoiński - magazyn" class="w-full object-cover border border-black" />
                    <NuxtImg src="/img/header2.webp" alt="Daniel Stoiński - magazyn" class="w-full object-cover border border-black" />
                </div>
                <h3>W magazynie znajdziesz wiele ciekawych mebli, które czekają na renowację. Większość z nich można kupić również w stanie do renowacji, co jest dobrym wyborem dla osób szukających mebli na warsztaty z renowacji. Customowe podejście do klienta nie jest nam obce, chętnie uzupełnimy Twoje wnętrze o wymarzony mebel. Nie udało się go znaleźć? Zleć nam poszukanie tego upatrzonego! </h3>
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