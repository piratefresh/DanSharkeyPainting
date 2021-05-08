// import axios from 'axios'
import nodemailer from "nodemailer";

export default async function (req, res) {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = await nodemailer.createTransport({
    // port: 465,
    // host: "smtp.gmail.com",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
    // secure: true,
  });

  //   const mailData = {
  //     from: "demo email",
  //     to: "magnussithnilsen@gmail.com",
  //     subject: `Message From ${req.body.Name}`,
  //     text: req.body.Message + " | Sent from: " + req.body.Email,
  //     html: `<div>${req.body.Message}</div><p>Sent from: ${req.body.Email}</p>`,
  //   };

  //   let info = await transporter.sendMail(mailData, function (err, info) {
  //     if (err) console.log(err);
  //     else console.log(info);
  //   });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Daniel Sharkey', // sender address
    to: "magnussithnilsen@gmail.com", // list of receivers
    subject: "Customer Contact ✔", // Subject line
    text: `New Contact Message`, // plain text body
    html: `<b>${req.body.Message}</b>`, // html body
  });

  //   console.log(info);

  console.log(req.body);
  //   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.send("success");
}
