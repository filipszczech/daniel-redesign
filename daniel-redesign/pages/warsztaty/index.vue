<template>
    <div>
        <PageContent>
            <section class="mb-16 xl:mb-32">
                <div class="grid grid-cols-12 mb-24 md:mb-40 border border-black">
                    <img src="/img/warsztaty2.jpg" class="w-full col-span-12 lg:col-span-8" />
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
            <section>
                <h2 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Minione warsztaty:</h2>
                <div class="flex flex-col gap-6 xl:gap-8">
                    <div class="lg:w-2/3">
                        <p class="mb-2">WARSZTATY „Rzeczy nienowe. DREWNO” Warsztaty konserwatorskie dla dorosłych w ramach programu rządowego „Wspieranie działań muzealnych” na projekt „Stworzenie i wyposażenie pracowni konserwatorskiej w Muzeum Tadeusza Kantora”</p>
                        <a class="underline text-[#003450]" href="https://facebook.com/events/s/rzeczy-nienowe-warsztaty-dla-d/2011449249328897/">https://facebook.com/events/s/rzeczy-nienowe-warsztaty-dla-d/2011449249328897/</a>              
                    </div>
                    <div class="lg:w-2/3">
                        <p class="mb-2">„MAŁE RZECZY - warsztaty rzemieślnicze dla dzieci” w ramach TARGI VINTAGE DESIGNU I WZORNICTWA</p>
                        <a class="underline text-[#003450]" href="https://www.facebook.com/events/1730357154388442">https://www.facebook.com/events/1730357154388442</a>              
                    </div>
                    <div class="lg:w-2/3">
                        <p class="mb-2">Seria warsztatów stolarsko-tapicerskich „Drugie życie przedmiotów” dla Uniwersytetu Komisji Edukacji Narodowej w Krakowie w ramach projektu pt. „Laboratorium Zmysłów” współfinansowanego przez Unię Europejską w Ramach Europejskiego Funduszu Społecznego.</p>
                        <a class="underline text-[#003450]" href="https://www.facebook.com/share/14uMWVEymU/?mibextid=wwXIfr">https://www.facebook.com/share/14uMWVEymU/?mibextid=wwXIfr</a>              
                    </div>
                    <div class="lg:w-2/3">
                        <p class="mb-2">Warsztaty Kompleksowej renowacji mebli dla „Pracownia Urządzania Wnętrz Nowohucka Siła Sprawcza/Naprawcza” w ramach festiwalu „Sztuka do Rzeczy. Design w Krakowie”</p>
                        <a class="underline text-[#003450]" href="https://nhlab.okn.edu.pl/wydarzenie-381-pracownia_urzadzania_wnetrz.html">https://nhlab.okn.edu.pl/wydarzenie-381-pracownia_urzadzania_wnetrz.html</a>              
                    </div>
                    <div class="lg:w-2/3">
                        <p class="mb-2">Warsztaty stolarsko-tapicerskie w ramach „Wiosenny Festyn Przyrodniczy // TAKI MAMY KLIMAT”, Centrum Kultury i Biblioteka Publiczna Gminy Suchy Las</p>
                        <a class="underline text-[#003450]" href="https://osrodekkultury.pl/wydarzenia/wiosenny-festyn-przyrodniczy-taki-mamy-klimat/">https://osrodekkultury.pl/wydarzenia/wiosenny-festyn-przyrodniczy-taki-mamy-klimat/</a>              
                    </div>
                    <div class="lg:w-2/3">
                        <p class="mb-2">Wykład „Niechciane skarby – polski dizajn w obiegu”, Spółdzielnia Ogniwo w ramach RETRO WEEKEND w Krakowie</p>
                        <a class="underline text-[#003450]" href="https://karnet.krakowculture.pl/23608-krakow-retro-weekend">https://karnet.krakowculture.pl/23608-krakow-retro-weekend</a>              
                    </div>
                    <div class="lg:w-2/3">
                        <p class="mb-2">Warsztaty z renowacji mebli w Hali Gwardii w Warszawie, w ramach współpracy z patyna.pl</p>
                        <a class="underline text-[#003450]" href="https://www.facebook.com/events/2087279144821503/">https://www.facebook.com/events/2087279144821503/</a>              
                    </div>
                    <div class="lg:w-2/3">
                        <p class="mb-2">Spotkanie „Niechciany design – skarby w naszych domach” | cykl koLEKCJE, Instytut Kultury Miejskiej, Gdańsk</p>
                        <a class="underline text-[#003450]" href="https://ikm.gda.pl/wydarzenie/spotkanie-niechciany-design-skarby-naszych-domach-cykl-kolekcje/">https://ikm.gda.pl/wydarzenie/spotkanie-niechciany-design-skarby-naszych-domach-cykl-kolekcje/</a>              
                    </div>
                </div>
            </section>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncWorkshopsComponent = defineAsyncComponent(() => import('~/components/workshops/WorkshopsContainer.vue'));
    const AsyncWorkshopDatesComponent = defineAsyncComponent(() => import('~/components/workshops/WorkshopDates.vue'));
</script>