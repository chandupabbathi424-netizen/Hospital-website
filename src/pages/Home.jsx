import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock3, Users, HeartPulse, Award, Stethoscope } from 'lucide-react';
import { doctors, departments } from '../data';
import DoctorCard from '../components/DoctorCard';
import DepartmentCard from '../components/DepartmentCard';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Trusted Healthcare • Since 2011</span>
            <h1>Your Health,<br /><span>Our Priority.</span></h1>
            <p>Quality healthcare, experienced doctors, modern technology and compassionate care — all in one place.</p>
            <div className="hero-actions">
              <Link to="/appointment" className="btn btn-primary">Book Appointment <ArrowRight size={18} /></Link>
              <Link to="/doctors" className="btn btn-light">Meet Our Doctors</Link>
            </div>
            <div className="hero-trust"><ShieldCheck size={20} /> Trusted by 10,000+ patients</div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85" alt="Modern hospital" />
            <div className="hero-badge"><HeartPulse size={24} /><div><strong>24/7</strong><span>Emergency Care</span></div></div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><Award /><strong>15+</strong><span>Years Experience</span></div>
          <div><Stethoscope /><strong>50+</strong><span>Expert Doctors</span></div>
          <div><Users /><strong>20+</strong><span>Departments</span></div>
          <div><HeartPulse /><strong>10K+</strong><span>Happy Patients</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Healthcare Excellence</span><h2>Why Choose MediCare?</h2></div>
            <p>We combine medical expertise, modern facilities and genuine care to make every patient feel supported.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card"><Stethoscope /><h3>Expert Doctors</h3><p>Experienced specialists dedicated to accurate diagnosis and effective treatment.</p></div>
            <div className="feature-card"><Clock3 /><h3>24/7 Emergency</h3><p>Round-the-clock emergency services when you need immediate medical attention.</p></div>
            <div className="feature-card"><ShieldCheck /><h3>Modern Facilities</h3><p>Advanced equipment and comfortable facilities designed around patient needs.</p></div>
            <div className="feature-card"><HeartPulse /><h3>Patient-Centered Care</h3><p>Clear communication and compassionate support throughout your care journey.</p></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Our Services</span>
            <h2>Explore Our Departments</h2>
            <p>Specialized medical care for you and your family.</p>
          </div>
          <div className="departments-grid">
            {departments.slice(0, 6).map((department) => <DepartmentCard key={department.name} department={department} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Meet The Team</span>
            <h2>Our Expert Doctors</h2>
            <p>Meet our experienced medical professionals.</p>
          </div>
          <div className="doctors-grid">
            {doctors.slice(0, 3).map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div>
          <div className="center-btn"><Link to="/doctors" className="btn btn-outline">View All Doctors</Link></div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div><span className="eyebrow">Your Health Matters</span><h2>Take the First Step Towards Better Health</h2><p>Schedule a consultation with one of our specialists today.</p></div>
          <Link to="/appointment" className="btn btn-white">Book Appointment <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

export default Home;