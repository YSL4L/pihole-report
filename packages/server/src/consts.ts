export const CONFIG = {
    piholeApiUrl: process.env.PIHOLE_API_URL , 
    email: {
        ADRESS: process.env.EMAIL_ADDRESS,
        PASSWORD: process.env.EMAIL_PASSWORD,
        SMTPSERVER: process.env.SMTP_SERVER,
       SMTPPORT: process.env.SMTP_PORT
    },
    RECEPIENTEMAIL: process.env.RECIPIENT_EMAIL
};