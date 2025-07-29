import './Aboutstyle.css';
import profile from '../../assets/profile.png';

const About = () => {
  return (
    <div className="about">
      <img className='about-img' src={profile} alt="My profile Picture" />
      <div className="about-2">
        <h1 className='about-name'>I am Tabish Faisal</h1>
        <p>
          I have a strong technical background with a Diploma in Computer Science and have completed
          a Full Stack Web Developer bootcamp. My experience spans frontend and backend development,
          with a focus on modern technologies like React, JavaScript, Node.js, and Express.
        </p>
        <p>
          I am passionate about building efficient, scalable web applications and continuously improving
          my skills to create innovative digital solutions.
        </p>

      </div>
    </div>

  )
}

export default About
