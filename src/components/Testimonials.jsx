import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Miluska Carlevarino",
    role: "Fundadora de Hands of Grace",
    content:
      "Gracias al equipo pudimos llevar nuestra visión al siguiente nivel. Profesionalismo, empatía y gran compromiso.",
  },
  {
    id: 2,
    name: "Roserami",
    role: "CEO de Latino Knowledge",
    content:
      "Un equipo con una visión clara y ejecución impecable. Estoy muy agradecida por su acompañamiento.",
  },
  {
    id: 3,
    name: "Walter Gomez",
    role: "Director general de Instituto Dozer",
    content:
      "Desde el primer contacto mostraron interés genuino por nuestro proyecto. 100% recomendados.",
  },
  {
    id: 4,
    name: "Jean Carlos",
    role: "Gerente General de Group Dispenser Sac",
    content:
      "Excelente atención al detalle, comunicación fluida y resultados superiores.",
  },
  {
    id: 5,
    name: "Gian Franco",
    role: "Director de Marketing - Valeapp",
    content:
      "Una experiencia profesional desde el inicio hasta el final. Elevamos nuestra marca con su ayuda.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonios</h2>
      <div className="testimonials-container">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <p className="testimonial-content">“{t.content}”</p>
            <div className="testimonial-footer">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
