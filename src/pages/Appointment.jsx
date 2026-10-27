import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { doctors, departments } from '../data';

function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', phone:'', department:'', doctor:'', date:'', time:'', message:'' });

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    localStorage.setItem('medicareAppointment', JSON.stringify(form));
    setSubmitted(true);
  };

  return (
    <section className="section page-section">
      <div className="container form-layout">
        <div className="form-intro">
          <span className="eyebrow">Appointments</span>
          <h1>Book Your Appointment</h1>
          <p>Fill in your details and our team will help confirm your appointment.</p>
          <div className="info-card"><strong>Before your visit</strong><span>Carry a valid ID and any previous medical reports.</span></div>
          <div className="info-card"><strong>Emergency?</strong><span>For urgent medical needs, call +91 98765 43210.</span></div>
        </div>
        <form className="form-card" onSubmit={submit}>
          {submitted ? <div className="success"><CheckCircle2 size={54}/><h2>Appointment Request Submitted!</h2><p>Thank you, {form.name || 'patient'}. Our team will contact you soon.</p><button type="button" className="btn btn-primary" onClick={() => setSubmitted(false)}>Book Another</button></div> :
          <>
            <div className="form-row"><label>Patient Name<input name="name" value={form.name} onChange={change} required /></label><label>Email<input type="email" name="email" value={form.email} onChange={change} required /></label></div>
            <div className="form-row"><label>Phone Number<input name="phone" value={form.phone} onChange={change} required pattern="[0-9]{10}" placeholder="10-digit number" /></label><label>Department<select name="department" value={form.department} onChange={change} required><option value="">Select Department</option>{departments.map(d=><option key={d.name}>{d.name}</option>)}</select></label></div>
            <div className="form-row"><label>Doctor<select name="doctor" value={form.doctor} onChange={change} required><option value="">Select Doctor</option>{doctors.map(d=><option key={d.id}>{d.name} - {d.specialty}</option>)}</select></label><label>Date<input type="date" name="date" value={form.date} onChange={change} required /></label></div>
            <label>Preferred Time<select name="time" value={form.time} onChange={change} required><option value="">Select Time</option><option>9:00 AM - 10:00 AM</option><option>10:00 AM - 11:00 AM</option><option>11:00 AM - 12:00 PM</option><option>2:00 PM - 3:00 PM</option><option>4:00 PM - 5:00 PM</option></select></label>
            <label>Message<textarea name="message" value={form.message} onChange={change} rows="4" placeholder="Tell us anything we should know..."></textarea></label>
            <button className="btn btn-primary full" type="submit">Submit Appointment Request</button>
          </>}
        </form>
      </div>
    </section>
  );
}
export default Appointment;