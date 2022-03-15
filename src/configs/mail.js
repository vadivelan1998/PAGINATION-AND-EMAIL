const nodemailer=require("nodemailer")


module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "31c08b4614439a", // generated ethereal user
    pass: "f9f37495d57f38", // generated ethereal password
  },
});
