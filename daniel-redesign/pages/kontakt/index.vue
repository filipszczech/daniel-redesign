<template>
    <div>
        <PageContent>
            <h1 class="w-[1px] h-[1px] overflow-hidden">Daniel Stoiński Redesign - informacje o wszelkich możliwościach kontaktu oraz lokalizacji i godzinach otwarcia pracowni.</h1>
            <section class="mb-16 xl:mb-32">
                <ContactForm />
            </section>
            <section class="mb-12">
                <h1 class="col-span-2 text-4xl md:text-5xl text-[#731919] font-semibold mb-6 md:mb-9">Dane kontaktowe</h1>
                <div class="flex flex-col gap-12">
                    <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <h2>Adres pracowni:</h2>
                            <p class="font-semibold">ul. Królewska 14, 30-045 Kraków</p>
                        </div>
                        <div>
                            <h2>Telefon:</h2>
                            <p class="font-semibold">+48 884 94 93 94</p>
                        </div>
                        <div>
                            <h2>Godziny otwarcia:</h2>
                            <p class="font-semibold">Poniedziałek - Czwartek: 12:00 - 18:00</p>
                        </div>
                        <div>
                            <h2>E-mail</h2>
                            <p class="font-semibold">halo@danielstoinskiredesign.pl</p>
                        </div>
                    </div>
                    <div class="flex gap-5 text-black">
                        <a href="https://www.instagram.com/danielstoinskiredesign/" target="_blank" rel="noopener" aria-label="Daniel Stoiński Instagram Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                            <Icon size="1.5rem" name="simple-icons:instagram" />
                        </a>
                        <a href="https://www.facebook.com/DanielStoinskiRedesign/" target="_blank" rel="noopener" aria-label="Daniel Stoiński Facebook Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                            <Icon size="1.5rem" name="simple-icons:facebook" />
                        </a>
                        <a href="https://www.tiktok.com/@danielstoinskiredesign" target="_blank" rel="noopener" aria-label="Daniel Stoiński TikTok Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                            <Icon size="1.5rem" name="simple-icons:tiktok" />
                        </a>
                    </div>
                </div>
            </section>
        </PageContent>
        <Toast v-for="toast in toasts" :key="toast.id" :message="toast.message" :duration="toast.duration" />
    </div>
</template>

<script setup>
    useHead({
        title: "Daniel Stoiński Redesign | kontakt",
        meta: [
            { name: 'og:title', content: 'Daniel Stoiński Redesign | kontakt' },
            { name: 'description', content: 'Daniel Stoiński Redesign - informacje o wszelkich możliwościach kontaktu oraz lokalizacji i godzinach otwarcia pracowni.' },
            { property: 'og:description', content: 'Daniel Stoiński Redesign - informacje o wszelkich możliwościach kontaktu oraz lokalizacji i godzinach otwarcia pracowni.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
    const { toasts } = useToast();
</script>