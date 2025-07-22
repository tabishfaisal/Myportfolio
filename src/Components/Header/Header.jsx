import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import logo from '../../assets/logo.png';
import './Headerstyle.css';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: target,
      ease: 'power2.inOut',
    });
  };

  return (
    <div className="header-container">
      <img className='header-logo' src={logo} alt='logo-image' />
      <nav className="header-links">
        <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About Me</a>
        <a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a>
        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
      </nav>
      <button className='header-connect-btn'>
        <a 
          href="mailto:tabish.faisaltn@gmail.com?subject=Let's Connect&body=Hi Tabish," 
          className="connect-link"
        >
          Connect with Me
        </a>
      </button>
    </div>
  );
};

export default Header;

