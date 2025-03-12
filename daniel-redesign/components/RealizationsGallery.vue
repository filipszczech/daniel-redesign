<template>
    <div>
        <div class="columns-1 sm:columns-2 md:columns-3 gap-5 mb-12 xl:mb-5">
            <div v-for="photo in paginatedPhotos" :key="photo.id" class="w-full break-inside-avoid mb-3 sm:mb-5 overflow-hidden"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600">
                <NuxtImg :src="photo.src" @click="openModal(photo)" :alt="'zdjęcie realizacji: ' + photo.id" class="w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer" />
            </div>
        </div>
        <!-- <div class="flex justify-center items-center mt-20 gap-7">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1" class="p-1 border-b border-black">
                < Poprzednia
            </button>
            <span>Strona {{ currentPage }} z {{ totalPages }}</span>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages" class="p-1 border-b border-black">
                Następna >
            </button>
        </div> -->
        <div class="flex gap-6 justify-center items-center mt-20">
            <div v-for="(page, index) in totalPages" :key="index" class="text-xl">
                <div v-if="page === currentPage" disabled class="flex items-center gap-6 transition-all duration-300">
                    <span class="" :class="page === totalPages && 'order-2'">0{{ page }}</span>
                    <div class="h-[1px] w-12 bg-black"></div>
                </div>
                <button v-else @click="goToPage(page)" class="transition-all duration-300 text-zinc-400 hover:text-black"> 0{{ page }}</button>
            </div>
        </div>
        <PhotoModal 
            v-if="selectedPhoto" 
            :photo="selectedPhoto"
            @close="closeModal"
            @prev="prevPhoto"
            @next="nextPhoto" />
    </div>
</template>
  
<script setup>
    const contentStore = useContentStore();
    const photos = ref([]);
    await contentStore.fetchRealizations();
    photos.value = contentStore.realizations;

    const photosPerPage = 24;
    const currentPage = ref(1);

    const totalPages = computed(() => Math.ceil(photos.value.length / photosPerPage));

    const paginatedPhotos = computed(() => {
        const start = (currentPage.value - 1) * photosPerPage;
        return photos.value.slice(start, start + photosPerPage);
    });

    const goToPage = (page) => {
        if (page > 0 && page <= totalPages.value) {
            currentPage.value = page;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    // modal

    const selectedPhoto = ref(null);
    const openModal = (photo) => {
        selectedPhoto.value = photo;
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
        window.addEventListener('keydown', handleKeydown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleKeydown);
    });
</script>

<style scoped>
.auto-rows-masonry {
  display: grid;
  grid-auto-rows: minmax(0, 1px); /* Masonry effect */
}

@media (min-width: 640px) {
  .auto-rows-masonry {
    grid-auto-rows: minmax(100px, auto); /* Dostosowanie dla większych ekranów */
  }
}
</style>
  