import logo from '../../assets/logo.png';
import './Headerstyle.css';

const Header = () => {
  return (
    <div className="header-container">
        <img className='header-logo' src={logo} alt='logo-image' />
        <nav className="header-links">
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Porfolio</a>
            <a href="#">Contact</a>
        </nav>
        <button className='header-connect-btn'>Connect With Me</button>
    </div>
  )
}

export default Header
