import profileImage from '../../assets/profile.png';
import './Herostyle.css';

const Hero = () => {
  return (
    <div className="hero-section">
        <img className='profile-img' src={profileImage} alt="profile-image" />
        <h1 className='name'>I'm Tabish Faisal</h1>
        <h2 className='role'>Junior developer based in Italy</h2>
        <div className="hero-action">
          <div className="hero-resume">
            My Resume
          </div>
          <div className="hero-connect">
            Connect with Me
          </div>
        </div>
    </div>
  )
}

export default Hero
