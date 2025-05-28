// src/pages/About.jsx
import React from 'react';
import './About.css'; // optional CSS file if you want to separate styles

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2 className="about-title">About the Show</h2>
        <p className="about-description">
          Welcome to <strong>The One 11 Show</strong>, an artist launch platform brought to you by <strong>The
          Chordifiers Studio</strong> and proudly powered by <strong>Creatous Collective Pvt. Ltd.</strong> <br /><br />
          Our mission is to propel talented artists and creators from diverse niches
          onto the global stage. We are dedicated to building creators and providing a
          robust platform for their introduction to the world.
        </p>
      </div>
    </section>
  );
}

export default About;
