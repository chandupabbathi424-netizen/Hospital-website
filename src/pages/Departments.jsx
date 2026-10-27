import DepartmentCard from '../components/DepartmentCard';
import { departments } from '../data';

function Departments() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading center"><span className="eyebrow">Specialized Care</span><h1>Our Departments</h1><p>Comprehensive services across major medical specialties.</p></div>
        <div className="departments-grid">{departments.map(d => <DepartmentCard key={d.name} department={d} />)}</div>
      </div>
    </section>
  );
}
export default Departments;