import './Contactstyle.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Feel free to reach out via the form below or connect through my socials.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-icons">
        <a href="https://wa.me/393508351286" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
        </a>
        <a href="https://www.linkedin.com/in/tabish-faisal-419a02230" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

