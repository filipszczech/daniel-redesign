<template>
    <div>
        <div class="columns-1 sm:columns-2 md:columns-3 gap-5 mb-3 xl:mb-5 relative">
            <div v-show="loaderActive && currentPage !== 1" class="absolute top-0 left-0 w-full h-full bg-white z-10 transition-all duration-500">
                <div class="flex justify-center items-center w-full mt-12">
                    <Loader />
                </div>
            </div>
            <div v-for="photo in paginatedPhotos" :key="photo.id" class="w-full break-inside-avoid mb-3 sm:mb-5 overflow-hidden"
                placeholder
                >
                <NuxtImg :src="photo.src" @click="openModal(photo)" :alt="'zdjęcie realizacji: ' + photo.id" class="w-full object-cover md:hover:scale-[1.02] transition-all duration-500 md:cursor-pointer" />
            </div>
        </div>
        <div class="flex gap-5 md:gap-6 justify-center items-center mt-8 lg:mt-20">
            <div v-for="(page, index) in totalPages" :key="index" class="text-lg md:text-xl">
                <div v-if="page === currentPage" disabled class="flex items-center gap-5 md:gap-6 transition-all duration-300">
                    <span class="" :class="page === totalPages && 'order-2'">0{{ page }}</span>
                    <div class="h-[1px] w-12 bg-black"></div>
                </div>
                <button v-else @click="goToPage(page)" class="transition-all duration-300 text-zinc-400 hover:text-black"> 0{{ page }}</button>
            </div>
        </div>
        <PhotoModal 
            v-if="selectedPhoto && isLargeScreen" 
            :photo="selectedPhoto"
            @close="closeModal"
            @prev="prevPhoto"
            @next="nextPhoto" />
    </div>
</template>
  
<script setup>
    const props = defineProps({
        type: { 
            type: String, 
            required: true, 
            validator: (value) => ['realizations', 'sessions'].includes(value) 
        }
    });
    const contentStore = useContentStore();
    const photos = ref([]);
    const loaderActive = ref(false);

    if(props.type === 'realizations') {
        await contentStore.fetchRealizations();
        photos.value = contentStore.realizations;
    } else if(props.type === 'sessions') {
        await contentStore.fetchSessions();
        photos.value = contentStore.sessions;
    }

    const photosPerPage = 36;
    const currentPage = ref(1);

    const totalPages = computed(() => Math.ceil(photos.value.length / photosPerPage));

    const paginatedPhotos = computed(() => {
        const start = (currentPage.value - 1) * photosPerPage;
        return photos.value.slice(start, start + photosPerPage);
    });

    const isLargeScreen = computed(() => window.innerWidth >= 768);

    const showLoader = () => {
        loaderActive.value = true;
        setTimeout(() => {
            loaderActive.value = false;
        }, 1500);
    };

    const goToPage = (page) => {
        if (page > 0 && page <= totalPages.value) {
            currentPage.value = page;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showLoader();
        }
    };
    
    // modal

    const selectedPhoto = ref(null);
    const openModal = (photo) => {
        if (window.innerWidth >= 768) {
            selectedPhoto.value = photo;
        }
    };
    const closeModal = () => {
      selectedPhoto.value = null;
    };
    const selectedPhotoIndex = computed(() => {
      return paginatedPhotos.value.findIndex((photo) => photo === selectedPhoto.value);
    });
    const prevPhoto = () => {
      if (selectedPhotoIndex.value > 0) {
        selectedPhoto.value = paginatedPhotos.value[selectedPhotoIndex.value - 1];
      } else {
        selectedPhoto.value = paginatedPhotos.value[paginatedPhotos.value.length - 1];
      }
    };
    const nextPhoto = () => {
      if (selectedPhotoIndex.value < paginatedPhotos.value.length - 1) {
        selectedPhoto.value = paginatedPhotos.value[selectedPhotoIndex.value + 1];
      } else {
        selectedPhoto.value = paginatedPhotos.value[0];
      }
    };

    const handleKeydown = (event) => {
        if (event.key === 'Escape') {
            if(selectedPhoto.value) {
                closeModal();
            }
        } else if (event.key === 'ArrowLeft') {
            if(selectedPhoto.value) {
                prevPhoto();
            }
        } else if (event.key === 'ArrowRight') {
            if(selectedPhoto.value) {
                nextPhoto();
            }
        }
    };

    onMounted(() => {
        showLoader();
        window.addEventListener('keydown', handleKeydown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleKeydown);
    });
</script>
  