import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export default defineEventHandler(async (event) => {
    try {
        const form = formidable({ multiples: true });
        
        // Parsowanie requesta (form-data)
        const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) reject(err);
            else resolve({ fields, files });
        });
        });

        const email = fields.email?.[0] || '';
        const name = fields.name?.[0] || '';
        const subject = fields.subject?.[0] || 'Daniel Stoiński Redesign - wiadomość';
        const message = fields.message?.[0] || '';

        if (!email || !name || !subject || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: "All fields are required",
        });
        }

        let attachments = [];
        if (files.files) {
        const uploadedFiles = Array.isArray(files.files) ? files.files : [files.files];

        if (uploadedFiles.length > 6) {
            throw createError({
                statusCode: 400,
                statusMessage: "Możesz przesłać maksymalnie 6 zdjęć.",
            });
        }

        for (const file of uploadedFiles) {
            const ext = path.extname(file.originalFilename || '').toLowerCase();
            const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
          
            if (!allowed.includes(ext)) {
              throw createError({
                statusCode: 400,
                statusMessage: `Plik ${file.originalFilename} nie jest obsługiwanym formatem graficznym.`,
              });
            }
        }

        attachments = await Promise.all(uploadedFiles.map(async (file) => ({
            filename: file.originalFilename,
            content: await fs.readFile(file.filepath),
        })));
        }

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        const mailOptions = {
            from: '1wiktoria.roman2@gmail.com',
            replyTo: email,
            to: '1wiktoria.roman2@gmail.com',
            subject: subject || `Kontakt w sprawie mebli - ${name}`,
            text: `Wiadomość od: ${email}\n\n${message}`,
            attachments,
        };
        await transporter.sendMail(mailOptions);

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.message || "Failed to send email",
        });
    }
});
