import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Oneshow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '+91',
    stageName: '',
    email: '',
    category: '',
    performanceType: '',
    demoLink: '',
    photoLink: '',
    bio: '',
    signature: '',
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = 'Required';
      }
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitMessage('Submitting...');

    const payload = {
      FullName: formData.fullName,
      ContactNumber: formData.contactNumber,
      StageName: formData.stageName,
      Email: formData.email,
      Category: formData.category,
      PerformanceType: formData.performanceType,
      DemoLink: formData.demoLink,
      PhotoLink: formData.photoLink,
      Bio: formData.bio,
      Signature: formData.signature,
      Timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(
        'https://api.sheetbest.com/sheets/7f7650da-145c-4dd6-8b79-9d0cbdbb12b3',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'cors',
        }
      );

      if (response.ok) {
        setSubmitMessage('Form submitted successfully!');
        setFormData({
          fullName: '',
          contactNumber: '+91',
          stageName: '',
          email: '',
          category: '',
          performanceType: '',
          demoLink: '',
          photoLink: '',
          bio: '',
          signature: '',
        });
        navigate('/submission-successfully');
      } else {
        const errorText = await response.text();
        console.error('Submission failed:', errorText);
        setSubmitMessage('Submission failed. Try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Submission error. Try again later.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const leftImage = document.querySelector(".side-image.left");
      const rightImage = document.querySelector(".side-image.right");
      if (leftImage) leftImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
      if (rightImage) rightImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Button Bar */}
      <div className="button-bar" style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        padding: "1.5rem 0",
        background: "var(--primary-pink)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}>
        <a href="#about" className="btn">About</a>
        <a href="#register" className="btn">Register</a>
        <a href="#gallery" className="btn">Gallery</a>
      </div>

      {/* Side Images */}
      <div className="side-images">
        <img src="gallery1.jpg" alt="Left Visual" className="side-image left" />
        <img src="gallery1.jpg" alt="Right Visual" className="side-image right" />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to The One 11 Show</h1>
        <p>Bold. Real. Unapologetic. Discover conversations that matter.</p>
        <a href="#register" className="btn">Register Now</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About the Show</h2>
        <p>
          Welcome to The One 11 Show, an artist launch platform brought to you by The
          Chordifiers Studio and a proud brand of Creatous Collective Private Limited.
          Our mission is to propel talented artists and creators from diverse niches
          onto the global stage. We are dedicated to building creators and providing a
          robust platform for their introduction to the world.
        </p>
      </section>

      {/* Register Section */}
      <section id="register" className="form-section">
        <h2>Register Yourself (Free)</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label htmlFor="contactNumber">Contact Number*</label>
          <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

          <label htmlFor="stageName">Stage Name / Band Name*</label>
          <input type="text" id="stageName" name="stageName" value={formData.stageName} onChange={handleChange} required />

          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="category">Choose Category*</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="bands">Battle of Bands</option>
            <option value="singer-songwriters">Battle of the Singer Songwriters</option>
            <option value="djs">Battle of DJs</option>
            <option value="musicians">Battle of Musicians</option>
            <option value="rappers">Battle of Rappers</option>
            <option value="challenge">48hrs Music Making Challenge</option>
          </select>

          <label htmlFor="performanceType">Solo or Group?*</label>
          <select id="performanceType" name="performanceType" value={formData.performanceType} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="solo">Solo</option>
            <option value="group">Group</option>
          </select>

          <label htmlFor="demoLink">Share Your Demo (Google Drive link)*</label>
          <input type="url" id="demoLink" name="demoLink" value={formData.demoLink} onChange={handleChange} required />

          <label htmlFor="photoLink">Share Your Photo/Logo (Google Drive link)*</label>
          <input type="url" id="photoLink" name="photoLink" value={formData.photoLink} onChange={handleChange} required />

          <label htmlFor="bio">Short Artist/Band Bio*</label>
          <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows="4" required></textarea>

          <label htmlFor="signature">Type Your Signature*</label>
          <input type="text" id="signature" name="signature" value={formData.signature} onChange={handleChange} required />

          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" name="terms" required />
            I agree to the terms and conditions of One 11
          </label>

          <button type="submit">Submit</button>
          {submitMessage && <p style={{ marginTop: '10px' }}>{submitMessage}</p>}
        </form>
      </section>

      {/* Updates Section */}
      <section id="updates" className="about">
        <h2>Show Updates</h2>
        <p>
          Stay tuned here for announcements, schedule changes, artist lineups, and
          exclusive updates from The One 11 Show. We'll keep this space fresh with the
          latest happenings!
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="about">
        <h2>Contact Us</h2>
        <p>
          If you have questions or want to connect, feel free to{" "}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--primary-red)",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            message us on WhatsApp
          </a>.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <p>&copy; 2025 The One 11 Show. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Oneshow;
