<template>
    <div class="">
        <section>
                <div class=" relative text-white"
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                    :duration="600"
                    >
                    <img src="/img/jurek.avif" class="opacity-90" />                
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-center flex flex-col justify-center items-center">
                        <p>Premiera e-booka</p>
                        <p class="mt-3">14.03.2025</p>
                        <NuxtLink to="/o-mnie"  class="mt-4 py-1 w-fit border-b border-white flex justify-center items-center cursor-pointer">
                            sklep
                        </NuxtLink>
                    </div>
                </div>
            </section>
        <PageContent>
            <section class="bg-white mb-24 xl:my-40">
                <EbookHeader :homepage="true" />
            </section>
            <section class="bg-white mb-24 xl:mb-40">
                <WorkshopsHeader :homepage="true" />
            </section>
            <!-- <div class="relative mx-auto max-w-[92rem] h-[48rem] gap-16 bg-white"> -->
                <!-- <div class="absolute bottom-0 h-40 w-full rounded-r-full bg-[#094468] transform -translate-y-full -translate-x-1/3"></div> -->
                 <!-- <div class="absolute top-0 left-12 h-96 w-64 bg-[#094468] rounded-b-full"></div> -->
                 <!-- <h1 class="absolute left-9 top-9 text-4xl">Kompleksowa<br>renowacja<br>mebli</h1> -->
                 <!-- <div class="mb-0 bottom-0 w-64 h-96 rounded-t-full bg-[#99A38A]"></div>
                 <div class="mb-0 bottom-0 w-64 h-96 rounded-t-full bg-[#731919]"></div> -->
                 <!-- <div class="mb-0 bottom-0 w-64 h-96 rounded-t-full bg-[#003450]"></div> -->
                <!-- <img src="http://www.danielstoinskiredesign.pl/wp-content/gallery/lookbook-3/DME8478.jpg" class="w-full h-full object-cover">
            </div> -->
            <section class="bg-white mb-24 xl:mb-40">
                <BlogHeader :homepage="true" />
            </section>
            <section class="bg-white mb-24 xl:mb-40">
                <StorageHeader :homepage="true" />
            </section>
            <section class="bg-white mb-24 xl:mb-40">
                <AboutHeader :homepage="true" />
            </section>
            <section class="bg-white mb-24">
                <!-- <ContactHeader /> -->
                <ContactForm />
                <!-- <div>
                    <h3 class="text-5xl text-[#731919] font-semibold">Pracownia</h3>
                    <p class="mt-6">Lokalizacja: ul. Królewska 14, Kraków</p>
                    <p class="mb-6">Zapraszam do odwiedzenia mnie w mojej pracowni.</p>
                    <img src="https://zwyklezycie.pl/wp-content/uploads/2018/01/bez-nazwy.001-1024x768.jpeg" alt="Daniel Stoiński Redesign pracownia" class="w-full" />
                </div> -->
            </section>
        </PageContent>
    </div>
</template>

<script setup>

</script>