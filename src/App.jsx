import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/contact/Contact';


const App = () => {
  return (
    <div>
      <Header />
      <section id="home" className="page-section">
        <Hero />
      </section>
      <section id="about" className="page-section">
       <About />
      </section>
      <section id="projects" className="page-section">
       <Project />
      </section>
      <section id="contact" className="page-section">
        <Contact />
      </section>
    </div>
  );
};

export default App;


