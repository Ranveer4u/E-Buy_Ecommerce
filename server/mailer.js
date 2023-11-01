const nodeMailer = require("nodemailer");

const adminEmail = "ranveer.kumar4you@gmail.com";
const adminPassword = "zxwsrupgazkzadnl";


const mailHost = "gmail";


const mailPort = 587;

const sendMail = async (to, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });

  const info = await transporter.sendMail({
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent,
  });

  return info;
};

module.exports = {
  sendMail,
};
