import './Projectstyle.css';
import { useEffect, useRef, useState, useCallback } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb } from 'react-icons/si';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const techIcons = {
  react: <FaReact title="React" className="tech-icon" />,
  js: <FaJsSquare title="JavaScript" className="tech-icon" />,
  tailwind: <SiTailwindcss title="Tailwind CSS" className="tech-icon" />,
  express: <SiExpress title="Express" className="tech-icon" />,
  mysql: <SiMysql title="MySQL" className="tech-icon" />,
  mongodb: <SiMongodb title="MongoDB" className="tech-icon" />,
  node: <FaNodeJs title="Node.js" className="tech-icon" />,
  db: <FaDatabase title="Database" className="tech-icon" />,
};

const projects = [
  {
    title: '🍏 Apple Website/App Clone',
    video: 'project-1.mp4',
    description: "Sleek Apple website clone with responsive design, interactive product cards, and smooth animations."
,
    tech: ['react', 'js', 'tailwind', 'express', 'mysql', 'mongodb'],
  },
  {
    title: 'Laptop Camparison App',
    video: 'project-2.mp4',
    description: 'A responsive laptop comparison site built with TypeScript, React, and Tailwind, featuring wishlist and side-by-side comparison. Data is manually posted via Postman.',
    tech: ['react', 'js', 'tailwind', 'express', 'mysql'],
  },
  {
    title: 'Task Manager App',
    video: 'project-3.mp4',
    description: "A task manager app built with React, Tailwind CSS, Node.js, and Express, allowing users to add, edit, delete, and sort tasks by date and status."
,
    tech: ['react', 'js', 'node', 'mongodb'],
  },
];

const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const goNext = useCallback(() => {
    setCurrent((i) => (i + 1) % projects.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((i) => (i - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Restart from the beginning and play
      video.currentTime = 0;
      const playPromise = video.play();
      // Catch autoplay blocks quietly
      if (playPromise?.catch) playPromise.catch(() => {});
    }
  }, [current]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const p = projects[current];

  return (
    <div className="project-container">
      <div className="project-card slider">
        <button
          className="nav-btn left"
          onClick={goPrev}
          aria-label="Previous video"
          title="Previous"
        >
          <FiChevronLeft className="nav-icon" />
        </button>

        <video
          ref={videoRef}
          src={p.video}
          className="project-image"
          controls
          muted
          playsInline
          onEnded={goNext}
        />

        <button
          className="nav-btn right"
          onClick={goNext}
          aria-label="Next video"
          title="Next"
        >
          <FiChevronRight className="nav-icon" />
        </button>

        <div className="project-content">
          <h2 className="project-title">{p.title}</h2>
          <p>{p.description}</p>
          <p><strong>Tech:</strong></p>
          <div className="tech-icons">
            {p.tech.map((t, idx) => (
              <span key={idx}>{techIcons[t]}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;





