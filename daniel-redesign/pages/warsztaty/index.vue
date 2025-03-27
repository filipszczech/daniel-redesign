<template>
    <div>
        <PageContent>
            <h1 class="w-[1px] h-[1px] overflow-hidden">Daniel Stoiński Redesign - informacje na temat warsztatów prowadzonych przeze mnie w mojej pracowni, jak również poza nią. Są to warsztaty dotyczące renowacji mebli oraz historii sztuki.</h1>
            <section class="mb-16 xl:mb-32">
                <div class="grid grid-cols-12 gap-0 mb-24 md:mb-56 border border-black">
                    <div class="w-full col-span-12 md:col-span-7">
                        <img src="/img/warsztaty2.jpg" class="w-full h-full object-cover" />
                    </div>
                    <Suspense>
                        <template #default>
                            <AsyncWorkshopDatesComponent />
                        </template>
                        <template #fallback>
                            <p>Loading...</p>
                        </template>
                    </Suspense>
                </div>
                <Suspense>
                    <template #default>
                        <AsyncWorkshopsComponent />
                    </template>
                    <template #fallback>
                        <p>Loading...</p>
                    </template>
                </Suspense>
            </section>
            <section class="mb-6 lg:mb-20">
                <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Minione wydarzenia:</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div v-for="item in events" :key="item.id" class="">
                        <NuxtImg :src="item.img" :alt="'zdjęcie minionego warsztatu'" class="w-full mb-4 bg-white border border-black" />
                        <p v-if="item.name" class="font-semibold mb-3">{{ item.name }}</p>
                        <p class="mb-1 lg:mb-2 pr-16">{{ item.desc }}</p>
                        <a class="underline text-[#003450]" :href="item.link">{{ item.link }}</a>              
                    </div>
                </div>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncWorkshopsComponent = defineAsyncComponent(() => import('~/components/workshops/WorkshopsContainer.vue'));
    const AsyncWorkshopDatesComponent = defineAsyncComponent(() => import('~/components/workshops/WorkshopDates.vue'));

    const supabase = useSupabaseClient();
    const events = ref([]);

    onMounted(async () => {
    const { data, error } = await supabase
        .from('Warsztaty archiwalne')
        .select('*')
        .order('order', { ascending: true, nullsFirst: false });

    if (error) {
        console.error('Błąd pobierania danych:', error.message);
        return;
    }

    events.value = data;
    });

    useHead({
        title: "Daniel Stoiński Redesign | warsztaty",
        meta: [
            { name: 'og:title', content: 'Daniel Stoiński Redesign | warsztaty' },
            { name: 'description', content: 'Daniel Stoiński Redesign - informacje na temat warsztatów prowadzonych przeze mnie w mojej pracowni, jak również poza nią. Są to warsztaty dotyczące renowacji mebli oraz historii sztuki.' },
            { property: 'og:description', content: 'Daniel Stoiński Redesign - informacje na temat warsztatów prowadzonych przeze mnie w mojej pracowni, jak również poza nią. Są to warsztaty dotyczące renowacji mebli oraz historii sztuki.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
</script>