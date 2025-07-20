// Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contacto' className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Hablemos</h2>
          <p className="contact-subtitle">Si quieres saber más sobre mí</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <FaEnvelope className="icon" />
              <span>paolosolisgomez1@gmail.com</span>
            </div>
            <div className="detail-item">
              <FaPhone className="icon" />
              <span>+51 959234857</span>
            </div>
            <div className="detail-item">
              <FaMapMarkerAlt className="icon" />
              <span>Lima - Perú</span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullname">Nombre completo*</label>
                <input type="text" id="fullname" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico*</label>
                <input type="email" id="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Número de celular</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Escribe tu mensaje*</label>
              <textarea id="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
