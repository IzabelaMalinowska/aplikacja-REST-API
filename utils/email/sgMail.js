const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationToken = async (mail, token) => {
  const msg = {
    to: mail,
    from: "maks875@wp.pl",
    subject: "Email verification",
    text: `Let's verify your email address`,
    html: `<strong>By clicking on the following link, you are confirming your email address <a href=${`http://localhost:3000/api/users/verify/${token}`}>VERIFY</a></strong>`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendVerificationToken };
