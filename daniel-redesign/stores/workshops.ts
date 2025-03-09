import { defineStore } from 'pinia';

export const useWorkshopsStore = defineStore('workshops', {
    state: () => ({
        workshops: [] as Array<any>,
        workshopsPending: false,
        workshopsError: null as string | null,
        dates: [] as Array<any>,
        datesPending: false,
        datesError: null as string | null,
    }),
    
    actions: {
        async fetchWorkshops() {
            if (this.workshops.length > 0) return;
            this.workshopsPending = true;
            this.workshopsError = null;
            try {
                const data = await $fetch('/api/workshops');
                this.workshops = data || [];
            } catch (error) {
                this.workshopsError = error.message || 'Error fetching workshops.';
            } finally {
                this.workshopsPending = false;
            }
        },
        async fetchWorkshopDates() {
            if (this.dates.length > 0) return;
            this.datesPending = true;
            this.datesError = null;
            try {
                const data = await $fetch('/api/workshop_dates');
                this.dates = data || [];
            } catch (error) {
                this.datesError = error.message || 'Error fetching workshop dates.';
            } finally {
                this.datesPending = false;
            }
        }
    },
});