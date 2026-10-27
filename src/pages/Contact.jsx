import { useState } from 'react';
import { MapPin, Phone, Mail, Clock3, CheckCircle2 } from 'lucide-react';

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = e => { e.preventDefault(); setSent(true); };
  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading center"><span className="eyebrow">Get In Touch</span><h1>Contact MediCare</h1><p>We are here to answer your questions and help you access the right care.</p></div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item"><MapPin/><div><strong>Address</strong><span>123 Health Avenue, Hyderabad, Telangana</span></div></div>
            <div className="contact-item"><Phone/><div><strong>Phone</strong><span>+91 98765 43210</span></div></div>
            <div className="contact-item"><Mail/><div><strong>Email</strong><span>care@medicarehospital.com</span></div></div>
            <div className="contact-item"><Clock3/><div><strong>Hours</strong><span>Mon - Sun: 24 Hours</span></div></div>
            <div className="map-placeholder"><MapPin size={40}/><strong>Hospital Location</strong><span>Map integration can be added here.</span></div>
          </div>
          <form className="form-card" onSubmit={submit}>
            {sent ? <div className="success"><CheckCircle2 size={54}/><h2>Message Sent!</h2><p>Thank you for contacting MediCare Hospital.</p><button type="button" className="btn btn-primary" onClick={() => setSent(false)}>Send Another</button></div> :
            <><label>Name<input required /></label><label>Email<input type="email" required /></label><label>Phone<input required pattern="[0-9]{10}" /></label><label>Subject<input required /></label><label>Message<textarea rows="6" required></textarea></label><button className="btn btn-primary full">Send Message</button></>}
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;