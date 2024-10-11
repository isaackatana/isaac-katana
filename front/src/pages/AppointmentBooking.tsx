// src/components/AppointmentBooking.tsx
import React, { useState } from 'react';

interface AppointmentBookingProps {
  onBook: (data: { name: string; date: string; time: string }) => void;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ onBook }) => {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({ name, date, time });
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleBooking}>
      <div>
        <label htmlFor="booking-name">Name:</label>
        <input
          type="text"
          id="booking-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="booking-date">Date:</label>
        <input
          type="date"
          id="booking-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="booking-time">Time:</label>
        <input
          type="time"
          id="booking-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentBooking;
