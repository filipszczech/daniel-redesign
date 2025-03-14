<template>
    <div>
        <footer class="max-w-[86rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="py-9 border-t border-[#003450] bg-white">
                <div class="flex justify-center mb-6">
                    <NuxtLink to="/" class="mx-auto w-fit">
                        <NuxtImg src="/img/logo.png" alt="Daniel Stoiński Redesign logo" class="h-10 md:h-12" />
                    </NuxtLink>
                </div>
                <ul class="navbar-links flex flex-wrap justify-center gap-5 md:gap-9 mb-9 mx-auto">
                    <li>
                        <NuxtLink to="/magazyn" class="pb-1">
                            sklep
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/warsztaty" class="pb-1">
                            warsztaty
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/magazyn" class="pb-1">
                            storage
                        </NuxtLink>
                    </li>
                    <!-- <li>
                        <NuxtLink to="/wpisy" class="pb-1">
                            blog
                        </NuxtLink>
                    </li> -->
                    <li>
                        <NuxtLink to="/o-mnie" class="pb-1">
                            bio
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/kontakt" class="pb-1">
                            kontakt
                        </NuxtLink>
                    </li>
                </ul>
                <div class="flex justify-center gap-5 text-black">
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
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .slide-down-enter-active, .slide-down-leave-active {
        transition: all 0.5s ease;
    }

    .slide-down-enter-from, .slide-down-leave-to {
        opacity: 0;
        max-height: 0;
    }

    .slide-down-enter-to, .slide-down-leave-from {
        opacity: 1;
        max-height: 300px;
    }

    .navbar-links .router-link-exact-active {
        border-bottom: 1px solid;
    }
</style>