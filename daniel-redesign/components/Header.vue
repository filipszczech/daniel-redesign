<template>
    <div>
        <header>
            <nav class="w-full z-50 bg-white">
                <div class="fixed top-0 z-50 bg-white w-full grid grid-cols-6 items-center py-4 lg:py-7 px-6 lg:px-12 lg:text-lg transition-transform duration-300"
                    :class="{ '-translate-y-full': !isVisible }">
                    <ul class="navbar-links hidden lg:flex justify-center col-span-2 gap-9 xl:gap-10">
                        <li>
                            <p>sklep</p>
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
                    </ul>
                    <div class="col-span-3 lg:col-span-2 flex justify-start lg:justify-center">
                        <NuxtLink to="/">
                            <NuxtImg src="/img/logo.png" alt="Daniel Stoiński Redesign logo" class="h-9 md:h-12" />
                        </NuxtLink>
                    </div>
                    <!-- Hamburger menu icon for small screens -->
                    <div class="col-span-3 flex justify-end lg:hidden hover-scale-105 cursor-pointer" @click="toggleMenu">
                        <Icon name="mdi:hamburger-menu" style="color: black" size="1.75rem" />
                    </div>
                    <!-- Navigation links for larger screens -->
                    <ul class="navbar-links hidden lg:flex col-span-2 justify-center gap-9 xl:gap-10">
                        <li @mouseover="isPortfolioOpen = true" @mouseleave="isPortfolioOpen = false" class="group bg-white relative pb-1">
                            <div class="flex gap-2 items-center">
                                <p>portfolio</p>
                                <Icon class="transition-all duration-300 group-hover:rotate-180" size="1.1rem" name="gridicons:chevron-down" />
                            </div>
                            <ul v-if="isPortfolioOpen" class="navbar-links absolute bg-white bg-opacity-65 top-full py-2 w-full px-1"
                                v-motion
                                :initial="{ opacity: 0, y: -30 }"
                                :enter="{ opacity: 1, y: 0 }"
                                :leave="{ opacity: 0, y: -30 }"
                                :duration="400">
                                <li class="pb-1">
                                    <NuxtLink to="/realizacje">
                                        <p>realizacje</p>
                                    </NuxtLink>
                                </li>
                                <li class="pb-1">
                                    <NuxtLink to="/sesje">
                                        <p>sesje</p>
                                    </NuxtLink>
                                </li>
                            </ul>
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
                </div>
                <transition name="slide-down">
                    <ul v-if="isMenuOpen" class="fixed lg:hidden top-0 left-0 z-50 bg-white w-screen h-screen max-h-screen navbar-links flex flex-col justify-center pl-12 sm:pl-20 text-2xl gap-4 pb-2 pr-4 sm:pr-6">    
                        <button @click="toggleMenu" class="absolute top-12 right-12">
                            <Icon name="ci:close-big" size="2.5rem" />
                        </button>
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="0">
                            <NuxtLink to="/"  @click="toggleMenu">
                                <p>strona główna</p>
                            </NuxtLink>
                        </li>
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="100">
                            <NuxtLink to="/"  @click="toggleMenu">
                                <p>sklep</p>
                            </NuxtLink>
                        </li>
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="200">
                            <NuxtLink to="/warsztaty"  @click="toggleMenu">
                                <p>warsztaty</p>
                            </NuxtLink>
                        </li>
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="200">
                            <NuxtLink to="/realizacje"  @click="toggleMenu">
                                <p>realizacje</p>
                            </NuxtLink>
                        </li>
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="200">
                            <NuxtLink to="/sesje"  @click="toggleMenu">
                                <p>sesje</p>
                            </NuxtLink>
                        </li>
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="300">
                            <NuxtLink to="/magazyn"  @click="toggleMenu">
                                <p>storage</p>
                            </NuxtLink>
                        </li>
                        <!-- <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="400">
                            <NuxtLink to="/wpisy"  @click="toggleMenu">
                                <p>blog</p>
                            </NuxtLink>
                        </li> -->
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="500">
                            <NuxtLink to="/o-mnie"  @click="toggleMenu">
                                <p>bio</p>
                            </NuxtLink>
                        </li>
                        <li class="uppercase" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="600">
                            <NuxtLink to="/kontakt"  @click="toggleMenu">
                                <p>kontakt</p>
                            </NuxtLink>
                        </li>
                        <li class="flex gap-4 text-[#003450] mt-12" v-motion :initial="{ opacity: 0, scale: 0.7, x: -100,}" :enter="{opacity: 1, scale: 1, x: 0,}" :duration="500" :delay="700">
                            <a href="https://www.instagram.com/danielstoinskiredesign/" target="_blank" rel="noopener" aria-label="Daniel Stoiński Instagram Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                                <Icon size="2rem" name="simple-icons:instagram" />
                            </a>
                            <a href="https://www.facebook.com/DanielStoinskiRedesign/" target="_blank" rel="noopener" aria-label="Daniel Stoiński Facebook Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                                <Icon size="2rem" name="simple-icons:facebook" />
                            </a>
                            <a href="https://www.tiktok.com/@danielstoinskiredesign" target="_blank" rel="noopener" aria-label="Daniel Stoiński TikTok Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                                <Icon size="2rem" name="simple-icons:tiktok" />
                            </a>
                        </li>
                    </ul>
                </transition>
            </nav>
        </header>
    </div>
</template>

<script setup>
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
        toggleBodyScroll(isMenuOpen.value);
    }
    const toggleBodyScroll = (disable) => {
        if (disable) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };
    const isPortfolioOpen = ref(false);

    import { useRoute } from 'vue-router';
    const route = useRoute();

    const lastScrollY = ref(0);
    const isVisible = ref(true);

    const handleScroll = () => {
    const currentScrollY = window.scrollY;
    isVisible.value = currentScrollY < lastScrollY.value || currentScrollY < 10;
    lastScrollY.value = currentScrollY;
    };

    onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    });
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
        max-height: 100vh;
    }

    .navbar-links .router-link-exact-active {
        border-bottom: 1px solid;
    }
</style>