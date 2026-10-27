import React from 'react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

function DepartmentCard({ department }) {
  const Icon = Icons[department.icon] || Icons.Stethoscope;
  const slug = department.name.toLowerCase().replace(/\s+/g, '-');
  return (
    <article className="department-card">
      <div className="department-icon"><Icon size={30} /></div>
      <h3>{department.name}</h3>
      <p>{department.description}</p>
      <Link to={`/departments/${slug}`}>Learn More →</Link>
    </article>
  );
}

export default DepartmentCard;