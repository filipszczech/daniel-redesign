import { defineStore } from 'pinia';

export const useFurnitureStore = defineStore('furniture', {
    state: () => ({
        furniture: [] as Array<any>,
        furniturePending: false,
        furnitureError: null as string | null,
        storage: [] as Array<any>,
        storagePending: false,
        storageError: null as string | null,
    }),
    
    actions: {
        async fetchfurniture() {
            if (this.furniture.length > 0) return;
            this.furniturePending = true;
            this.furnitureError = null;
            try {
                const data = await $fetch('/api/storage_new');
                this.furniture = data || [];
            } catch (error) {
                this.furnitureError = error.message || 'Error fetching furniture.';
            } finally {
                this.furniturePending = false;
            }
        },
        async fetchStorage() {
            if (this.storage.length > 0) return;
            this.storagePending = true;
            this.storageError = null;
            try {
                const data = await $fetch('/api/storage_old');
                this.storage = data || [];
            } catch (error) {
                this.storageError = error.message || 'Error fetching storage.';
            } finally {
                this.storagePending = false;
            }
        }
    },
});