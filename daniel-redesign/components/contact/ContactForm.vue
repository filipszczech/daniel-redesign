<template>
    <div>
        <div class='grid grid-cols-2 gap-6 lg:gap-9'>
            <div class='col-span-2 lg:col-span-1 relative z-10 flex flex-col justify-center'>
                <h3 class="text-4xl md:text-5xl text-[#731919] font-semibold mb-6">Kontakt</h3>
                <div v-if="emailSent">
                    <p class="text-xl mb-1">Dziękuję za wysłanie wiadomości! 😊</p>
                    <p class="text-xl">Postaram się jak najszybciej wrócić z odpowiedzią.</p>
                </div>
                <div v-else>
                    <p class="mb-6">Napisz do mnie! 😊<br>Chętnie odpowiem na wszelkie pytania dotyczące renowacji mebli, warsztatów stolarskich oraz współpracy.</p>
                    <form
                        @submit="onSubmit" 
                        class='relative z-20 grid grid-cols-2 gap-6'>
                        <div v-if="isSending" class="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-white opacity-60">
                            <Loader />
                        </div>
                        <div class="col-span-2 md:col-span-1 relative bg-transparent">
                            <input type="email" :disabled="isSending" placeholder="Email *" v-model="email" v-bind="emailAttrs" class="w-full bg-transparent p-3 border-b border-gray-700 focus:outline-0 focus:border-[#731919] focus:bg-slate-50" />
                            <p class="absolute -bottom-6 left-0 text-red-500 text-sm">{{ errors.email }}</p>
                        </div>
                        <div class="col-span-2 md:col-span-1 relative bg-transparent">
                            <input type="name" :disabled="isSending" placeholder="Imię" v-model="name" v-bind="nameAttrs" class="w-full bg-transparent p-3 border-b border-gray-700 focus:outline-0 focus:border-[#731919] focus:bg-slate-50" />
                            <p class="absolute -bottom-6 left-0 text-red-500 text-sm">{{ errors.name }}</p>
                        </div>
                        <div class="col-span-2 md:col-span-1 relative bg-transparent">
                            <input type="text" :disabled="isSending" placeholder="Temat wiadomości" v-model="subject" v-bind="subjectAttrs" class="w-full bg-transparent p-3 border-b border-gray-700 focus:outline-0 focus:border-[#731919] focus:bg-slate-50" />
                            <p class="absolute -bottom-6 lg:-bottom-7 left-0 text-red-500">{{ errors.subject }}</p>
                        </div>
                        <div class="relative col-span-2 bg-transparent">
                            <textarea :disabled="isSending" placeholder="Wiadomość *" v-model="message" v-bind="messageAttrs" class="w-full min-h-12 max-h-20 bg-transparent pt-3 px-3 border-b border-b border-gray-700 focus:outline-0 focus:border-[#731919] focus:bg-slate-50"></textarea>
                            <p class="absolute -bottom-4 left-0 text-red-500 text-sm">{{ errors.message }}</p>
                        </div>
                        <!-- <div class="col-span-2 md:col-span-1 relative bg-transparent border-b border-gray-700">
                            <input type="file" multiple @change="handleFileUpload" class="w-full bg-transparent py-3" />
                            <p class="absolute -bottom-6 left-0 text-red-500">{{ errors.files }}</p>
                        </div> -->
                        <div 
                            class="col-span-2 relative border border-dashed border-black p-5 text-center cursor-pointer"
                            @dragover.prevent="dragOver = true" 
                            @dragleave.prevent="dragOver = false" 
                            @drop.prevent="handleDrop"
                            :class="{ 'border-blue-500 bg-blue-100': dragOver }"
                        >
                            <p class="text-gray-700">Przeciągnij i upuść pliki tutaj lub kliknij</p>
                            <input :disabled="isSending" type="file" multiple @change="handleFileUpload" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                            <p class="absolute -bottom-6 left-0 text-red-500">{{ errors.files }}</p>
                            <p v-if="fileError" class="text-red-500 mt-2">{{ fileError }}</p>
                            <div v-if="files.length > 0" class="mt-4">
                                <p>wgrane zdjęcia:</p>
                                <div v-for="(file, index) in files" :key="file.name" class="flex justify-center items-center gap-2 text-sm">
                                    <span>{{ file.name }} ({{ (file.size / 1024).toFixed(2) }} KB)</span>
                                    <button @click="removeFile(index)" class="text-red-500 hover:text-red-700 z-50">✖</button>
                                </div>
                            </div>
                        </div>
                        <button :disabled="isSending" type="submit" class="col-span-2 md:col-span-1 text-[#003450] border-b border-[#003450] py-1 px-2 w-fit">Wyślij</button>
                    </form>
                </div>
            </div>
            <div class="hidden lg:flex justify-end items-center">
                <NuxtImg src="/img/kontakt.jpg" alt="Daniel Stoiński - kontakt" class="w-3/4 object-cover bg-white" />
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';
    const mail = useMail();
    const { addToast } = useToast();

    const dragOver = ref(false);
    const fileError = ref(null);
    const isSending = ref(false);
    const emailSent = ref(false);
    const { errors, handleSubmit, resetForm, defineField, setFieldValue } = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
            files: [],
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Wprowadź poprawny email.').required('Uzupełnij adres email.'),
            name: yup.string().required('Uzupełnij imię.'),
            subject: yup.string().notRequired(),
            message: yup.string().min(6, 'Wiadomość jest za krótka.').required('Wprowadź tekst wiadomości.'),
            files: yup.array()
                .test("fileType", "Możesz przesłać tylko zdjęcia", (files) => {
                    return files.every(file => file.type.startsWith("image/"));
                })
                .test("fileSize", "Maksymalny rozmiar pliku to 2MB", (files) => {
                    return files.every(file => file.size <= 2 * 1024 * 1024);
                }),
        }),
    });
    
    const handleFileUpload = (event) => {
        addFiles(event.target.files);
    };

    const handleDrop = (event) => {
        dragOver.value = false;
        addFiles(event.dataTransfer.files);
    };

    const addFiles = (fileList) => {
        fileError.value = null;
        const newFiles = Array.from(fileList);

        const existingFiles = files.value;
        const combinedFiles = [...existingFiles];

        for (const file of newFiles) {
            if (!file.type.startsWith("image/")) {
                fileError.value = "Możesz przesłać tylko zdjęcia.";
                break;
            }
            if (file.size > 2 * 1024 * 1024) {
                fileError.value = "Maksymalny rozmiar pliku to 2MB.";
                break;
            }
            if (combinedFiles.length >= 6) {
                fileError.value = "Możesz dodać maksymalnie 6 zdjęć.";
                break;
            }

            combinedFiles.push(file);
        }

        files.value = combinedFiles;
        setFieldValue("files", files.value);
    };

    const removeFile = (index) => {
        const updatedFiles = [...files.value];
        updatedFiles.splice(index, 1);
        setFieldValue('files', updatedFiles);
    };

    const onSubmit = handleSubmit(async (values) => {
        isSending.value = true;
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("name", values.name);
        formData.append("subject", values.subject);
        formData.append("message", values.message);

        values.files.forEach((file, index) => {
            formData.append(`files`, file);
        });

        try {
            const response = await $fetch('/api/send-email', {
                method: 'POST',
                body: formData,
            });
            if (response.success) {
                addToast('Wiadomość wysłana pomyślnie! 😊', 5000)
                resetForm();
                emailSent.value = true;
            } else {
                const errorMessage = await response.text();
                console.error(`Error: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            isSending.value = false;
        }
    });

    const [email, emailAttrs] = defineField('email');
    const [name, nameAttrs] = defineField('name');
    const [subject, subjectAttrs] = defineField('subject');
    const [message, messageAttrs] = defineField('message');
    const [files, filesAttrs] = defineField('files');
</script>