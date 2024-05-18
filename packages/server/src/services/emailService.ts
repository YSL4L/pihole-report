import { createTransport } from "nodemailer";
import { CONFIG } from "../consts";

export async function sendEmail (subject: any, body: any)  {
    const transporter = createTransport({
        host: CONFIG.email.smtpServer,
        port: CONFIG.email.smtpPort,
        secure: false, // true for 465, false for other ports
        auth: {
            user: CONFIG.email.address,
            pass: CONFIG.email.password
        }
    });

    const info = await transporter.sendMail({
        from: `"Pi-hole Report" <${CONFIG.email.address}>`,
        to: CONFIG.recipientEmail,
        subject: subject,
        text: body
    });

    console.log('Message sent: %s', info.messageId);
};