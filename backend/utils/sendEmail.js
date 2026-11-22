const nodemailer = require("nodemailer");

const sendEmail = async (userEmail, subject, htmlTemplate) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.APP_EMAIL_ADDRESS,
        pass: process.env.APP_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `MediGive Platform <${process.env.APP_EMAIL_ADDRESS}>`,
      to: userEmail,
      subject: subject,
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log("Email error: ", error);
    // Silent fail in dev if credentials not configured
  }
};

module.exports = sendEmail;
