// src/pages/ContactPage.tsx
import React from 'react';
import {Helmet} from "react-helmet";
import ContactForm from './ContactForm';
import AppointmentBooking from './AppointmentBooking';

const Contact: React.FC = () => {
  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Contact Form Data:', data);
    // You can add API call here to send the data to your backend or email service
    alert(`Thank you, ${data.name}! Your message has been sent.`);
  };

  const handleAppointmentBooking = (data: { name: string; date: string; time: string }) => {
    console.log('Appointment Booking Data:', data);
    // You can add API call here to schedule the appointment in your backend or calendar service
    alert(`Thank you, ${data.name}! Your appointment is booked for ${data.date} at ${data.time}.`);
  };

  return (
    <>
    <Helmet>
      <title>Isaac's Contact</title>
      <meta name="description" content="Get in touch with us through our contact page." />
      <meta property="og:title" content="Blog | Tech news and Weekly Tutorials" />
      <meta property="og:description" content="Tech news and Weekly Tutorials" />
      <meta property="og:image" content="https://example.com/your-thumbnail-image.jpg" />
      <meta property="og:url" content="https://example.com/contact" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://example.com/your-thumbnail-image.jpg" />
    </Helmet>
    <div className='contact'>
      <div className="container">
        <h2>Contact</h2>
        <div className="wrapper">
          <section>
            <h3>Send a Message</h3>
            <ContactForm onSubmit={handleContactSubmit} />
          </section>
          <section>
            <h3>Book an Appointment</h3>
            <AppointmentBooking onBook={handleAppointmentBooking} />
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
