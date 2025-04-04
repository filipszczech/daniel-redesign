import { ref } from 'vue';

const toasts = ref([]);

export const useToast = () => {
    const addToast = (message, duration = 3000) => {
        const id = Date.now();
        toasts.value.push({ id, message, duration });

        setTimeout(() => {
            removeToast(id)
        }, duration)
    }

    const removeToast = (id) => {
        toasts.value = toasts.value.filter((toast) => toast.id !== id)
    }

    return { toasts, addToast, removeToast }
}