import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import owner_pic from "../src/assets/owner.jpg"
import work1 from "../src/assets/work1.jpg"
import work2 from "../src/assets/work2.jpg"
import work3 from "../src/assets/work3.jpg"
import work4 from "../src/assets/work4.jpg"
import work5 from "../src/assets/work5.jpg"
import work6 from "../src/assets/work6.jpg"
import work7 from "../src/assets/work7.jpg"
import work8 from "../src/assets/work8.jpg"
import scissors from "../src/assets/scissors.png"
import ig_icon from "../src/assets/ig.png";
import whatsapp_icon from "../src/assets/whatsapp.png";

function App() {
  const [count, setCount] = useState(0)

    return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="scissors">
              <img src={scissors} alt="" />
            </span>
            <span className="logo-text">OLADEX</span>
          </div>
          <a href="https://wa.link/chzchz">
          <button className="btn-outline">Book Now</button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1667539916609-c706d5b7ed65?auto=format&fit=crop&w=1600&q=80"
          alt="Barber shop interior"
          className="hero-img"
        />
        <div className="hero-content">
          <h1>OLADEX</h1>
          <p>Premium Grooming Experience</p>
          <a href="https://wa.link/chzchz">
          <button className="btn-primary">Schedule Appointment</button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>Meet The Master</h2>
            <p>
              With over 10 years of experience in the grooming industry, Oladex
              has mastered the art of precision cuts and classic styles. Every
              client receives personalized attention and walks out looking their
              absolute best.
            </p>
            <p>
              At Oladex, we believe that a great haircut is more than just a
              service—it's an experience. We combine traditional barbering
              techniques with modern trends to give you a style that's uniquely
              yours.
            </p>
            <div className="contact-info">
              <p>📍 Front of dominion hostel, Damico Estate,Ile-Ife, Osun State</p>
              <p>📞 +234 704 270 1433</p>
              <p>🕒 Mon-Sat: 9AM - 8PM</p>
            </div>
          </div>
          <div className="about-image">
            <img
              src={owner_pic}
              alt="Oladex - Owner and Master Barber"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="gallery-header">
          <h2>Our Work</h2>
          <p>
            Every cut tells a story. See the precision and artistry that goes
            into each client's transformation.
          </p>
        </div>
        <div className="gallery-grid">
          {[
            work2,
            work1,
            work3,
            work4,
            work5,
            work6,
            work7,
            work8,
            
          ].map((src, i) => (
            <div key={i} className="gallery-card">
              <img src={src + "?auto=format&fit=crop&w=800&q=80"} alt="Work" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready for Your Best Look?</h2>
        <p>Book your appointment today and experience the Oladex difference.</p>
        <div className="cta-buttons">
          <a href="https://wa.link/chzchz">
          <button className="btn-primary">Book Appointment</button>
          </a>
          <a href="tel:+2347042701433">
          <button className="btn-outline white">Call +234 704 270 1433</button>
          </a>
         

        </div>
         <div className="social_icons">
          <a href="https://www.instagram.com/oladexbarbing?igsh=N3o3eTlxaW04c3Ny">
            <img src={ig_icon} alt="" className='ig_icon' />
            </a>
            <a href="https://wa.link/chzchz">
             <img src={whatsapp_icon} alt="" className='whatsapp_icon' />
             </a>
          </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="scissors">
              <img src={scissors} alt="" />
            </span> <span>OLADEX</span>
          </div>
          <p>© 2025 Oladex Barbershop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
