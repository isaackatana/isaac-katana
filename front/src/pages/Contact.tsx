// src/pages/ContactPage.tsx
import React from 'react';
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
    <div>
      <h1>Contact Us</h1>
      <section>
        <h2>Send a Message</h2>
        <ContactForm onSubmit={handleContactSubmit} />
      </section>
      <section>
        <h2>Book an Appointment</h2>
        <AppointmentBooking onBook={handleAppointmentBooking} />
      </section>
    </div>
  );
};

export default Contact;
