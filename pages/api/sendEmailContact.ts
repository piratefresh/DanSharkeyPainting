// import axios from 'axios'
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

export default async function (req, res) {
  const filePath = path.join(`./public/`, "EmailContact.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const replacements = {
    Username: req.body.Name,
    messageBody: req.body.Message,
  };
  const htmlToSend = template(replacements);
  const transporter = await nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "dansharkeyspainting@gmail.com", // generated ethereal user
      pass: "sharkey88", // generated ethereal password
    },
    secure: true,
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Dan Sharkeys Painting", // sender address
    to: [req.body.Email, "dansharkeyspainting@gmail.com"], // list of receivers
    subject: `Customer (${req.body.Name}) Enquiry 🧑‍🎨`, // Subje${req.body.Name}ct line
    text: `Hey, ${req.body.Name}. Thanks for contacting us, we will contact you as soon as possible ${req.body.Message}`, // plain text body
    html: htmlToSend, // html body
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
