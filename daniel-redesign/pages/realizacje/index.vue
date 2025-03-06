<template>
    <div>
        <PageContent>
            <h1 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6 lg:mb-9">Realizacje</h1>
            <div class="columns-1 sm:columns-2 md:columns-3 gap-5 mb-12 xl:mb-24">
                <div v-for="photo in photos" :key="photo.name" class="w-full break-inside-avoid mb-3 sm:mb-5 overflow-hidden"
                        v-motion
                        :initial="{ opacity: 0, y: 30 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :duration="600">
                    <NuxtImg :src="photo.src" @click="openModal(photo)" :alt="'zdjęcie realizacji: ' + photo.name" class="w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer" />
                </div>
            </div>
            <PhotoModal 
                v-if="selectedPhoto" 
                :photo="selectedPhoto"
                @close="closeModal"
                @prev="prevPhoto"
                @next="nextPhoto" />
        </PageContent>
    </div>
</template>

<script setup>
    const photos = ref([
        {
            name: 'realizacja7',
            src: '/img/realizacje/realizacja7.jpg'
        }, 
        {
            name: 'realizacja8',
            src: '/img/realizacje/realizacja8.jpg'
        }, 
        {
            name: 'realizacja1',
            src: '/img/realizacje/realizacja1.jpg'
        }, 
        {
            name: 'realizacja2',
            src: '/img/realizacje/realizacja2.jpg'
        }, 
        {
            name: 'realizacja3',
            src: '/img/realizacje/realizacja3.jpg'
        }, 
        {
            name: 'realizacja4',
            src: '/img/realizacje/realizacja4.jpg'
        }, 
        {
            name: 'realizacja5',
            src: '/img/realizacje/realizacja5.jpg'
        }, 
        {
            name: 'realizacja6',
            src: '/img/realizacje/realizacja6.jpg'
        }, 
        {
            name: 'realizacja9',
            src: '/img/realizacje/realizacja9.jpg'
        }, 
        {
            name: 'realizacja11',
            src: '/img/realizacje/realizacja11.jpg'
        }, 
        {
            name: 'realizacja12',
            src: '/img/realizacje/realizacja12.jpg'
        }, 
        {
            name: 'realizacja7',
            src: '/img/realizacje/realizacja7.jpg'
        }, 
        {
            name: 'realizacja10',
            src: '/img/realizacje/realizacja10.jpg'
        }, 
    ]);

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

<style lang="scss" scoped>

</style>