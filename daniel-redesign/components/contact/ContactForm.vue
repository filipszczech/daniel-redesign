<template>
    <div>
        <div class='grid grid-cols-2 gap-6 lg:gap-9'>
            <div class='col-span-2 lg:col-span-1 relative z-10 flex flex-col justify-center'>
                <h3 class="text-5xl text-[#731919] font-semibold mb-6">Kontakt</h3>
                <p class="mb-6">Napisz do mnie!<br>Chętnie odpowiem na wszelkie pytania dotyczące renowacji mebli, warsztatów stolarskich oraz współpracy.</p>
                <form
                    @submit="onSubmit" 
                    class='relative z-20 grid grid-cols-2 gap-6 md:gap-8'>
                    <div class="col-span-2 md:col-span-1 relative bg-transparent border-b border-gray-700">
                        <input type="email" placeholder="Email *" v-model="email" v-bind="emailAttrs" class="w-full bg-transparent py-3" />
                        <p class="absolute -bottom-6 lg:-bottom-7 left-0 text-red-500">{{ errors.email }}</p>
                    </div>
                    <div class="col-span-2 md:col-span-1 relative bg-transparent border-b border-gray-700">
                        <input type="text" placeholder="Imię" v-model="name" v-bind="nameAttrs" class="w-full bg-transparent py-3" />
                        <p class="absolute -bottom-6 lg:-bottom-7 left-0 text-red-500">{{ errors.name }}</p>
                    </div>
                    <div class="col-span-2 md:col-span-1 relative bg-transparent border-b border-gray-700">
                        <input type="text" placeholder="Temat wiadomości" v-model="subject" v-bind="subjectAttrs" class="w-full bg-transparent py-3" />
                        <p class="absolute -bottom-6 lg:-bottom-7 left-0 text-red-500">{{ errors.company }}</p>
                    </div>
                    <div class="relative col-span-2 bg-transparent">
                        <textarea placeholder="Wiadomość *" v-model="message" v-bind="messageAttrs" class="w-full bg-transparent pt-3 border-b border-black"></textarea>
                        <p class="absolute -bottom-4 lg:-bottom-5 left-0 text-red-500">{{ errors.message }}</p>
                    </div>
                    <button type="submit" class="col-span-2 md:col-span-1 text-[#003450] border-b border-[#003450] py-1 px-2 w-fit">Wyślij</button>
                </form>
            </div>
            <div class="hidden lg:flex justify-end">
                <img src="/img/kontakt.jpg" class="w-3/4 object-cover bg-white border border-black" />
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';
    // const mail = useMail();
    // const { addToast } = useToast();
    // const isFormHovered = ref(false);
    // const { target: motionTarget } = useMotionVisibleOnce();

    const { errors, handleSubmit, resetForm, defineField, setFieldValue } = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Wprowadź poprawny email.').required('Uzupełnij adres email.'),
            name: yup.string().required('Uzupełnij imię.'),
            subject: yup.string().notRequired(),
            message: yup.string().min(6, 'Wiadomość jest za krótka.').required('Wprowadź tekst wiadomości.'),
        }),
    });

    const onSubmit = handleSubmit(async (values) => {
        console.log('values:', values);
        // try {
        //     mail.send({
        //         from: values.email,
        //         subject: `Webdev portfolio - wiadomość od ${values.email}.`,
        //         text: `
        //             Imię i nazwisko: ${values.name}
        //             Email: ${values.email}
        //             Nazwa firmy: ${values.company ? values.company : '-'}
        //             Treść wiadomości: ${values.message ? values.message : '-'}
        //         `,
        //     });
        //     resetForm();
        //     addToast('Wiadomość została wysłana. Dziękuję za kontakt! :)', 5000);
        // } catch (error) {
        //     console.error('Błąd podczas wysyłania wiadomości:', error);
        // }
    });

    const [email, emailAttrs] = defineField('email');
    const [name, nameAttrs] = defineField('name');
    const [subject, subjectAttrs] = defineField('subject');
    const [message, messageAttrs] = defineField('message');
</script>