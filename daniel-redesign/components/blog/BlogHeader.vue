<template>
    <div>
        <div class="flex justify-between items-end mb-6">
            <h1 class="text-4xl md:text-5xl text-[#731919] font-semibold">Najnowsze wpisy</h1>
            <NuxtLink to="/wpisy" class="hidden md:flex justify-center items-center h-fit px-1 font-semibold py-1 w-fit border-b border-[#003450] text-[#003450] cursor-pointer">
                zobacz więcej
            </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div>
                <img src="/img/blog1.jpg" class="w-full h-[32rem] object-cover bg-white mb-3 border border-black" />
                <h2 class="text-2xl text-[#003450] font-semibold">Tytuł wpisu</h2>
                <p>Krótkie streszczenie wpisu. Ciąg dalszy w środku...</p>
            </div>
            <div>
                <img src="/img/blog1.jpg" class="w-full h-[32rem] object-cover bg-white mb-3 border border-black" />
                <h2 class="text-2xl text-[#003450] font-semibold">Tytuł wpisu</h2>
                <p>Krótkie streszczenie wpisu. Ciąg dalszy w środku...</p>
            </div>
            <div>
                <img src="/img/blog1.jpg" class="w-full h-[32rem] object-cover bg-white mb-3 border border-black" />
                <h2 class="text-2xl text-[#003450] font-semibold">Tytuł wpisu</h2>
                <p>Krótkie streszczenie wpisu. Ciąg dalszy w środku...</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>