import { CheckCircle2, HeartPulse, Target, Eye, Users } from 'lucide-react';

function About() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">About MediCare</span><h1>Compassionate Care.<br /><span>Better Health.</span></h1><p>Our mission is simple: make quality healthcare accessible, comfortable and patient-centered.</p></div></section>
      <section className="section"><div className="container about-grid">
        <div><img className="about-image" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" alt="Hospital interior" /></div>
        <div><span className="eyebrow">Who We Are</span><h2>Healthcare built around people</h2><p>MediCare Hospital is a modern multi-specialty hospital focused on delivering safe, reliable and compassionate healthcare.</p><p>Our team of experienced doctors, nurses and support staff work together to provide personalized treatment in a welcoming environment.</p><div className="check-list"><span><CheckCircle2 /> Experienced medical professionals</span><span><CheckCircle2 /> Modern diagnostic facilities</span><span><CheckCircle2 /> Patient-first approach</span><span><CheckCircle2 /> Transparent communication</span></div></div>
      </div></section>
      <section className="section soft"><div className="container"><div className="section-heading center"><span className="eyebrow">What Guides Us</span><h2>Our Mission & Vision</h2></div><div className="values-grid">
        <div className="value-card"><div className="department-icon"><Target /></div><h3>Our Mission</h3><p>To provide accessible, ethical and high-quality healthcare while treating every patient with dignity and compassion.</p></div>
        <div className="value-card"><div className="department-icon"><Eye /></div><h3>Our Vision</h3><p>To be a trusted healthcare partner known for clinical excellence, innovation and exceptional patient experiences.</p></div>
        <div className="value-card"><div className="department-icon"><Users /></div><h3>Our Values</h3><p>Integrity, empathy, teamwork, safety and continuous improvement guide everything we do.</p></div>
      </div></div></section>
    </>
  );
}
export default About;