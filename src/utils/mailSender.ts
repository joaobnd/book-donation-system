import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: "93ae5e5c43db00",
        pass: "c561960bc97bbf"  
    }

});

function createMail(userMail: string, subject: string, text: string) {
    const mailOptions = {
      from: "Administrator <288897c8c3-6ac10c@inbox.mailtrap.io>",
      to: userMail,
      subject: subject,
      text: text,
      html: '<strong>' + text + '</strong>'
    };
  
    return mailOptions
};

export async function sendMail(userMail: string, subject: string, text: string) {

    const mail = createMail(userMail, subject, text);
    
    try { 
        await transporter.sendMail(mail);
        return { status: 200, message: "Email successfully sent"}
    } catch (e) {
        return { status: 500, message: e.message}
    }
};