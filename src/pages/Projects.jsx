import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import "./Projects.css";

const projectList = [
  {
    id: 1,
    title: "Hands Of Grace VA",
    description: "Página web para ONG en EE.UU",
    image:
      "https://scontent.flim15-2.fna.fbcdn.net/v/t39.30808-6/434665435_122135211824198910_5473375252333211700_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtvQQkBHqqAkYgPmgWcIGK6FMZbx4xJAXoUxlvHjEkBRV4B-qYCi6LyAEO9TpCCSXJzKajH1hTJiQs9OjVKgHg&_nc_ohc=sG7B-5K2q04Q7kNvwG4J4qh&_nc_oc=AdnKERqFSTMr-SL-o5PZCkjjgcayEFxUi5LSswHL3w3B7hJYG0MMNO850ZAFpZjPTqo&_nc_zt=23&_nc_ht=scontent.flim15-2.fna&_nc_gid=QqT0UZYSjwSv4D-106I0CQ&oh=00_AfRaMh1PV9jlA-hmDvs_761wQYZW6FWInATMLb6G9d2ygQ&oe=68830119",
    category: "Full Stack",
    technologies: [
      "CodeIgniter 4",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "API REST",
    ],
    link: "https://handsofgraceva.org/",
  },
  {
    id: 2,
    title: "Group Dispenser Sac",
    description: "Página cotizadora para empresa de hidrocarburos",
    image: "/dispensersac.jpg",
    category: "Frontend",
    technologies: [
      "CodeIgniter 4",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "API REST",
    ],
    link: "https://groupdispensersac.com/",
  },
  {
    id: 3,
    title: "Latino Knowledge",
    description:
      "Sitio web para contadora en EEUU, desarrollado con PHP 8.2 en backend y JavaScript en frontend.",
    image: "/latinonowledge.JPG",
    category: "Backend",
    technologies: ["PHP 8.2", "Laravel", "MySQL", "JavaScript"],
    link: "https://latinoknowledge.groupdispensersac.com/",
  },
  {
    id: 4,
    title: "Tienda Valeapp",
    description: "Tienda virtual full stack con pasarela de pago integrada.",
    image: "/valeapp.jpg",
    category: "Full Stack",
    technologies: [
      "Laravel",
      "API REST",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "Pasarela de pago",
    ],
    link: "https://valeapp.pe/tienda",
  },
  {
    id: 5,
    title: "Sistema POS / Facturación Electrónica",
    description:
      "Facturación electrónica con sistema de ventas y reportes financieros.",
    image: "/facturador.JPG",
    category: "Full Stack",
    technologies: [
      "PHP 8.2",
      "Bootstrap",
      "JavaScript",
      "API REST",
      "MySQL",
      "WebSocket IO",
      "jQuery",
    ],
    link: "https://pos.valeapp.pe/",
  },
  {
    id: 6,
    title: "Campus Virtual Dozer",
    description:
      "Plataforma para clases virtuales online con manejo de usuarios y seguridad.",
    image: "/dozer.JPG",
    category: "Backend",
    technologies: [
      "Laravel 11",
      "JavaScript",
      "MySQL",
      "API REST",
      "WebSocket IO",
      "Axios"
    ],
    link: "https://campusvirtual.institutodozer.edu.pe/",
  },
];

const categories = ["Todos", "Full Stack", "Frontend", "Backend"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projectList
      : projectList.filter((project) => project.category === selectedCategory);

  return (
    <section id="proyectos" className="projects-section">
      <h2 className="projects-title">Proyectos Destacados</h2>

      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Ver proyecto ${project.title}`}
              >
                <FaGlobe size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
