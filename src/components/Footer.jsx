import { Link } from 'react-router-dom';
import { HeartPulse, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-icon"><HeartPulse size={23} /></span>
            <span>MediCare <small>Hospital</small></span>
          </div>
          <p>Providing compassionate, modern healthcare with experienced doctors and patient-focused services.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/doctors">Our Doctors</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/appointment">Appointments</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p><MapPin size={16} /> 123 Health Avenue, Hyderabad</p>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><Mail size={16} /> care@medicarehospital.com</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 MediCare Hospital. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;