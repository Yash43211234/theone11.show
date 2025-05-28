import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./styles.css";

const Oneshow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '+91',
    stageName: '',
    email: '',
    category: '',
    performanceType: '',
    portfolioLink: '',
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
      PortfolioLink: formData.portfolioLink,
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
          portfolioLink: '',
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
      {/* Side Images */}
      <div className="side-images">
        <img src="gallery1.jpg" alt="Left Visual" className="side-image left" />
        <img src="gallery1.jpg" alt="Right Visual" className="side-image right" />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to The One 11 Show</h1>
        <p>AN ARTIST LAUNCHPAD</p>
        <a href="#register" className="btn">Register Now</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About the Show</h2>
        <p>
          Welcome to The One 11 Show, an artist launch platform brought to you by The
          Chordifiers Studio and a proud brand of Creatous Collective Private Limited.
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

          <label htmlFor="portfolioLink">
            Share your Work/Portfolio (Google Drive link)*<br />
            <small style={{ color: "gray" }}>
              (*Note - Give access to this <strong>theone11show@gmail.com</strong> mail)
            </small>
          </label>
          <input type="url" id="portfolioLink" name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} required />

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

      {/* Updates & Contact Sections... (unchanged) */}
      
    </div>
  );
};

export default Oneshow;
