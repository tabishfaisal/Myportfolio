import { useEffect } from 'react';
import { gsap } from 'gsap';
import profileImage from '../../assets/profile.png';
import './Herostyle.css';

const Hero = () => {
  useEffect(() => {
    const roleContainer = document.querySelector('#role-text');
    const words = roleContainer.querySelectorAll('.word');

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.4, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  const roleText = "Junior developer based in Italy";

  return (
    <div className="hero-section">
      <img className='profile-img' src={profileImage} alt="profile-image" />
      <h1 className='name'>I'm Tabish Faisal</h1>
      <h2 className='role' id="role-text">
        {roleText.split(' ').map((word, i) => (
          <span key={i} className="word" style={{ marginRight: '6px', display: 'inline-block' }}>
            {word}
          </span>
        ))}
      </h2>
      <div className="hero-action">
        <div className="hero-resume">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
        <div className="hero-connect">
          <a 
            href="mailto:tabish.faisaltn@gmail.com?subject=Let's Connect&body=Hi Tabish," 
            className="connect-link"
          >
            Connect with Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

