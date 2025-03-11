<template>
    <div>
        <div class="columns-1 sm:columns-2 md:columns-3 gap-5 mb-12 xl:mb-24">
            <div v-for="photo in photos" :key="photo.id" class="w-full break-inside-avoid mb-3 sm:mb-5 overflow-hidden"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600">
                <NuxtImg :src="photo.src" @click="openModal(photo)" :alt="'zdjęcie realizacji: ' + photo.id" class="w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer" />
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

    const selectedPhoto = ref(null);
    const openModal = (photo) => {
        selectedPhoto.value = photo;
    };
    const closeModal = () => {
      selectedPhoto.value = null;
    };
    const selectedPhotoIndex = computed(() => {
      return photos.value.findIndex((photo) => photo === selectedPhoto.value);
    });
    const prevPhoto = () => {
      if (selectedPhotoIndex.value > 0) {
        selectedPhoto.value = photos.value[selectedPhotoIndex.value - 1];
      } else {
        selectedPhoto.value = photos.value[photos.value.length - 1];
      }
    };
    const nextPhoto = () => {
      if (selectedPhotoIndex.value < photos.value.length - 1) {
        selectedPhoto.value = photos.value[selectedPhotoIndex.value + 1];
      } else {
        selectedPhoto.value = photos.value[0];
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
  