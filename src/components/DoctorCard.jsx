import { Link } from 'react-router-dom';
import { CalendarDays, Clock3 } from 'lucide-react';

function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <div className="doctor-content">
        <span className="tag">{doctor.specialty}</span>
        <h3>{doctor.name}</h3>
        <p>{doctor.experience} experience</p>
        <div className="doctor-time"><Clock3 size={16} /> {doctor.availability}</div>
        <Link to="/appointment" className="btn btn-primary full">Book Appointment</Link>
      </div>
    </article>
  );
}

export default DoctorCard;