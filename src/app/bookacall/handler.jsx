const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or another email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, company, comments } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'dvt451@gmail.com',
    subject: 'New Call Booking Request',
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Comments: ${comments}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
