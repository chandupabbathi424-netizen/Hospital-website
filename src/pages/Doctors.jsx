import { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data';

function Doctors() {
  const [search, setSearch] = useState('');
  const filtered = doctors.filter(d => `${d.name} ${d.specialty}`.toLowerCase().includes(search.toLowerCase()));
  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading center"><span className="eyebrow">Our Specialists</span><h1>Meet Our Doctors</h1><p>Experienced professionals committed to your health.</p></div>
        <div className="search-box"><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search doctor or specialization..." /></div>
        <div className="doctors-grid">{filtered.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>
        {filtered.length === 0 && <p className="empty">No doctors found.</p>}
      </div>
    </section>
  );
}
export default Doctors;