import express, { Request, Response } from 'express';
import transporter from '../config/nodemailer.config';

const router = express.Router();

interface ContactFormRequest extends Request {
  body: {
    name: string;
    email: string;
    message: string;
  };
}

router.post('/send', async (req: ContactFormRequest, res: Response) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email.');
  }
});

export default router;
