// src/pages/AboutPage.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <section className="about-section">
        <h2>Filmmaker</h2>
        <p>
          With a deep passion for visual storytelling, I have directed and produced multiple short films, music videos, and documentaries. My work is characterized by a focus on emotion, atmosphere, and immersive storytelling. I thrive in both collaborative environments and solo projects, bringing creative visions to life through the lens.
        </p>
        <p>
          From pre-production planning and scriptwriting to directing and editing, I enjoy each part of the filmmaking process. My goal is always to create visuals that resonate with audiences and leave a lasting impression.
        </p>
      </section>

      <section className="about-section">
        <h2>Audio Engineer</h2>
        <p>
          As an audio engineer, I have a keen ear for detail and a passion for high-quality sound. I have worked on recording, mixing, and mastering for a variety of projects, including music albums, podcasts, and soundtracks for films.
        </p>
        <p>
          My expertise extends to sound design, where I use audio to enhance storytelling in film and digital media. From field recordings to studio sessions, I bring a commitment to excellence in every project, ensuring that every note and sound effect is perfect.
        </p>
      </section>

      <section className="about-section">
        <h2>Web Developer</h2>
        <p>
          As a web developer, I enjoy crafting intuitive, responsive, and user-friendly websites using modern technologies like React, TypeScript, and Node.js. With a background in both front-end and back-end development, I am skilled in building full-stack applications that are not only functional but also visually appealing.
        </p>
        <p>
          My projects range from portfolio websites and e-commerce platforms to dynamic web applications. I believe in writing clean, maintainable code and am always eager to learn new tools and frameworks to stay at the cutting edge of web development.
        </p>
      </section>

      <section className="about-section">
        <h2>Let's Connect</h2>
        <p>
          Whether it's creating engaging visual content, crafting immersive audio experiences, or developing robust web applications, I am always excited to take on new challenges. Feel free to reach out to me through the <a href="/contact">Contact Page</a> to discuss potential projects or collaborations.
        </p>
      </section>
    </div>
  );
};

export default About;