import nodemailer from 'nodemailer';
// var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'czwang113@gmail.com'
    }
  }
);

const form = document.getElementById('contact-form');

form.addEventListener('submit-button', (e) => {
  e.preventDefault();
  console.log('submitting');
  // setup e-mail data with unicode symbols
  let name = $('#name').val();
  let email = $('#email').val();
  let message = $('#message').val();

  let mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: 'czwang113@gmail.com', // list of receivers
    subject: 'Form submission from portfolio site', // Subject line
    text: message // plaintext body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    } else {
      return console.log('Message sent: ' + info.response);
    }
  });
});
