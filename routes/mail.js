const { next } = require('cheerio/lib/api/traversing');
const nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');
const senderInfo = require('../config/sederinfo.json');

let random_number = (min, max) => {
    let ranNum = Math.floor(Math.random()* (max-min+1)) + min;
    return ranNum;
}
// 메일 발송 객체 
const mailSender = {
    sendGmail: function (param) {
        const number = random_number(11111, 99999)
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: senderInfo.user,
                pass: senderInfo.pass
            }
        });

        let mailOptions = {
            from: senderInfo.user,
            to: param.toEmail,
            subject: param.subject,
            text: param.text + number
        };

    const result = transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("jinsoo",  error);
        next(error)
      } else {
        console.log('Email sent: ' + info.response);
      }
      SMTPTransport.close();
    });

  }
}

module.exports = mailSender;