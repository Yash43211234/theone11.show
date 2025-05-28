import React from 'react';
import './InfoSection.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';


function InfoSection() {
    return (
        <div className="info-section">
            <div className="info-card">
                <h2>Show Updates</h2>
                <p>
                    Stay tuned here for announcements, schedule changes, artist lineups, and exclusive updates from The One 11 Show. We'll keep this space fresh with the latest happenings!
                </p>
            </div>

            <div className="info-card">
                <h2>Contact Us</h2>
                <p>
                    If you have questions or want to connect, feel free to message us on WhatsApp.
                </p>
                <br />
              
                <div className="social-links">
                    <a href="https://instagram.com/chordifiers.studio" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://facebook.com/chordifiersstudio" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com/chordifiers" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>

            </div>
        </div>
    );
}

export default InfoSection;
