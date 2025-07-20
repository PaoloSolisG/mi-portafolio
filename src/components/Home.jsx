import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaBriefcase,
  FaCheckSquare,
  FaHeadset,
} from "react-icons/fa";
import "./Home.css";

function TypewriterTitle() {
  const fullText = "Paolo Solis, Full Stack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, displayedText]);

  return (
    <h2 className="home-title" style={{ fontFamily: "monospace" }}>
      {displayedText}
      <span className="cursor">|</span>
    </h2>
  );
}

function Home() {
  return (
    <section id="inicio" className="home-section">
      <div className="home-container">
        {/* Título grande arriba */}
        <div className="home-title-wrapper">
          <TypewriterTitle />
        </div>

        {/* Contenedor principal para imagen + contenido */}
        <div className="home-main-content">
          <div className="home-image-wrapper">
            <img
              src="webimagen.jpg"
              alt="Hero Banner"
              className="home-hero-image"
            />
          </div>

          <div className="home-content">
            <div className="home-stats-grid">
              <div className="stat-card">
                <FaBriefcase size={28} color="#eab308" />
                <h3>Experience</h3>
                <p>4+ Years</p>
              </div>
              <div className="stat-card">
                <FaCheckSquare size={28} color="#eab308" />
                <h3>Completed</h3>
                <p>20 Projects</p>
              </div>
              <div className="stat-card">
                <FaHeadset size={28} color="#eab308" />
                <h3>Support</h3>
                <p>24/7 Online</p>
              </div>
            </div>

            <p className="home-description" style={{ textAlign: "justify" }}>
              Tengo amplia experiencia trabajando tanto en el desarrollo de
              backend como frontend. Me encanta crear soluciones completas que
              sean eficientes, fáciles de mantener y agradables para el usuario
              final. Disfruto enfrentar nuevos retos y aprender tecnologías que
              me permitan seguir creciendo como profesional.
            </p>

            <div className="home-links">
              <a
                href="https://www.linkedin.com/in/paolo-solis"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
              >
                <FaLinkedin size={20} style={{ marginRight: "8px" }} />
                LinkedIn
              </a>
              <a
                href="https://github.com/paolosolis"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
              >
                <FaGithub size={20} style={{ marginRight: "8px" }} />
                GitHub
              </a>
            </div>

            <a href="/cv-paolo.pdf" download className="home-cv-button">
              📄 Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
