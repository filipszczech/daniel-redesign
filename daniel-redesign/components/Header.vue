<template>
    <div>
        <header>
            <nav class="w-full z-50 bg-white">
                <div class="fixed top-0 z-50 bg-white w-full grid grid-cols-6 items-center py-4 px-6 lg:px-12 lg:text-lg transition-transform duration-300"
                    :class="{ '-translate-y-full': !isVisible }">
                    <ul class="navbar-links hidden lg:flex justify-center col-span-2 gap-9 xl:gap-12">
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
                            <img src="/img/logo.png" alt="Daniel Stoiński Redesign logo" class="h-16 lg:h-20" />
                        </NuxtLink>
                    </div>
                    <!-- Hamburger menu icon for small screens -->
                    <div class="col-span-3 flex justify-end lg:hidden hover-scale-105 cursor-pointer" @click="toggleMenu">
                        <Icon name="mdi:hamburger-menu" style="color: black" size="2rem" />
                    </div>
                    <!-- Navigation links for larger screens -->
                    <ul class="navbar-links hidden lg:flex col-span-2 justify-center gap-9 xl:gap-12">
                        <li>
                            <NuxtLink to="/wpisy" class="pb-1">
                                blog
                            </NuxtLink>
                        </li>
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
                <!-- <img src="http://www.danielstoinskiredesign.pl/wp-content/gallery/lookbook-3/DME8478.jpg" class="w-full h-[40rem] object-cover bg-white pb-6"> -->
                <!-- Slide-out menu for small screens -->
                <transition name="slide-down">
                    <ul v-if="isMenuOpen" class="flex flex-col justify-center items-end gap-4 lg:hidden py-4">
                        <p>menu element</p>
                        <p>menu element</p>
                        <p>menu element</p>
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
    }

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
        max-height: 300px;
    }

    .navbar-links .router-link-exact-active {
        border-bottom: 1px solid;
    }
</style>