import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const porter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
    },
});

export default porter;