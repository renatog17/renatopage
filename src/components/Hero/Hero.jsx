import './Hero.css';
import { FaLaptopCode, FaGithub, FaLinkedin } from 'react-icons/fa'; // ícones de desenvolvedor, github e linkedin

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Renato Oliveira</h1>
        <p className="profession">FullStack Developer</p>
        <p className="description">
          I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
        </p>
        <div className="hero-icons">
          <a href="https://github.com/renatog17" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/renatog17" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <FaLaptopCode size={30} />
        </div>
      </div>
    </div>
  );
}
