const nodemailer = require('nodemailer');
const { APP_PASSWORD_NODEMAILER } = process.env;


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: "techecommercesolutions@gmail.com",
        pass: APP_PASSWORD_NODEMAILER,
    },
});

transporter.verify().then(() => {
    console.log("ready for send emails");
})

module.exports = transporter;