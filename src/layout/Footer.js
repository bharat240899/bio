import React from 'react';
import Links from '../redirects/Links';
import gmailIcon from '../assets/GmailLogo.png';
import instagramIcon from '../assets/InstagramCircle.png';
import youtubeIcon from '../assets/YouTube.png';
import linkedinIcon from '../assets/LinkedIn.png';
import githubIcon from '../assets/GitHub.png';

const Footer = () => {
    return (
        <footer className="footer fixed-bottom py-3" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)', boxShadow: '0px -5px 15px rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-auto">
                        <h4 className="mb-0 text-center text-white">Stay Connected</h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="social-links d-flex justify-content-center">
                            <a href={Links.instagram} target="_blank" rel="noopener noreferrer" className="social-link mx-2" aria-label="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
                            <a href={Links.youtube} target="_blank" rel="noopener noreferrer" className="social-link mx-2" aria-label="YouTube"><img src={youtubeIcon} alt="YouTube" /></a>
                            <a href={Links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link mx-2" aria-label="LinkedIn"><img src={linkedinIcon} alt="LinkedIn" /></a>
                            <a href={Links.github} target="_blank" rel="noopener noreferrer" className="social-link mx-2" aria-label="GitHub"><img src={githubIcon} alt="GitHub" /></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-auto">
                        <div className="email-address d-flex align-items-center">
                            <a href={Links.gmail} target="_blank" rel="noopener noreferrer" className="mr-2 text-white">bharatyadavvelugu@gmail.com</a>
                            <a href={Links.gmail} target="_blank" rel="noopener noreferrer"><img src={gmailIcon} alt="Gmail" className="align-middle mt-2" /></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-auto">
                        <p className="mb-0 text-center text-white">&copy; 2024 Your Name. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
