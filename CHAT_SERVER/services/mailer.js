var nodemailer = require("nodemailer");

const sendSGMail = async ({ to, sender, subject, html, attachments, text }) => {
  try {
    const from = "harshmalhotra951@gmail.com";
    const password = "dttjbyorqdsqzpji";

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: from,
        pass: password,
      },
    });

    var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendSGMail(args);
  }
};
