// src/pages/Gallery.jsx
import React from 'react';
import './Gallery.css'; // Import custom CSS

function Gallery() {
  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
     
    // Add more image paths as needed
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-subtitle">Moments from The One 11 Show</p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
