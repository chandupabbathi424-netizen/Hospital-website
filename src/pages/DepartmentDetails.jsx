import { Link, useParams } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle2, Clock3 } from 'lucide-react';
import { departments } from '../data';

const departmentDetails = {
  cardiology: {
    overview: 'Our Cardiology team provides complete care for your heart, from preventive screenings to diagnosis and long-term treatment.',
    services: ['Heart health checkups and risk assessment', 'ECG, echocardiogram and cardiac monitoring', 'Blood pressure and cholesterol management', 'Care for chest pain, arrhythmia and heart failure'],
    highlights: ['Advanced cardiac screening and diagnostics', 'Same-day consults for urgent heart symptoms', 'Personalized care plans for long-term heart health'],
    careExperience: 'Our cardiology team combines expert diagnosis with compassionate follow-up care, helping patients recover confidently and reduce future cardiac risks.',
    signs: 'chest pain, shortness of breath, palpitations, dizziness or unusual tiredness',
    team: 'Cardiologists, cardiac nurses, imaging specialists and rehabilitation support',
  },
  neurology: {
    overview: 'Our Neurology team evaluates and treats conditions affecting the brain, spine, nerves and muscles.',
    services: ['Headache and migraine care', 'Seizure and epilepsy management', 'Stroke evaluation and follow-up care', 'Memory, movement and nerve disorder assessment'],
    highlights: ['Specialized brain and nerve assessments', 'Modern imaging and diagnostic support', 'Focused treatment plans for chronic neurological issues'],
    careExperience: 'From early diagnosis to rehabilitation guidance, our neurology department helps patients regain stability, mobility and confidence.',
    signs: 'persistent headaches, weakness, numbness, seizures, balance problems or memory changes',
    team: 'Neurologists, neuro specialists, therapists and care coordinators',
  },
  orthopedics: {
    overview: 'Our Orthopedics team helps patients restore movement and manage injuries, joint pain and musculoskeletal conditions.',
    services: ['Bone and joint consultations', 'Sports injury assessment', 'Arthritis and back pain management', 'Fracture care and rehabilitation guidance'],
    highlights: ['Joint, bone and sports injury expertise', 'Non-surgical and surgical care planning', 'Recovery-focused rehabilitation guidance'],
    careExperience: 'We treat the cause of pain as well as the movement limits it creates, helping patients return to daily activity with better strength and comfort.',
    signs: 'joint pain, swelling, stiffness, limited movement or an injury that is not improving',
    team: 'Orthopedic surgeons, physiotherapists and rehabilitation specialists',
  },
  pediatrics: {
    overview: 'Our Pediatrics team provides gentle, age-appropriate care for infants, children and teenagers.',
    services: ['Well-child visits and growth monitoring', 'Vaccination guidance', 'Childhood illness treatment', 'Nutrition and development support'],
    highlights: ['Child-friendly clinical care', 'Regular wellness and development tracking', 'Expert support for everyday childhood concerns'],
    careExperience: 'We help children and families feel comfortable, informed and supported through each stage of growth, from infancy to adolescence.',
    signs: 'fever, breathing difficulty, poor appetite, unusual sleepiness or concerns about growth and development',
    team: 'Pediatricians, nurses and family wellness specialists',
  },
  dermatology: {
    overview: 'Our Dermatology team diagnoses and treats conditions affecting the skin, hair and nails.',
    services: ['Acne and scar treatment', 'Rashes and allergy evaluation', 'Hair and nail disorder care', 'Mole and skin lesion assessment'],
    highlights: ['Advanced skin and hair diagnostics', 'Personalized treatment plans for visible concerns', 'Guidance for long-term skin health'],
    careExperience: 'Our team focuses on both appearance and underlying skin health, helping patients feel confident and comfortable in their skin.',
    signs: 'persistent rash, changing mole, severe acne, hair loss or an unexplained skin change',
    team: 'Dermatologists, skin specialists and procedure support staff',
  },
  'general-medicine': {
    overview: 'Our General Medicine team is your first point of care for everyday health concerns, prevention and ongoing wellness.',
    services: ['Routine health checkups', 'Diabetes and blood pressure care', 'Infection and fever treatment', 'Preventive screening and lifestyle advice'],
    highlights: ['Comprehensive everyday healthcare', 'Preventive care and ongoing wellness planning', 'Clear guidance for long-term health goals'],
    careExperience: 'We make prevention and routine care easy to access, helping patients stay healthier through early guidance and consistent monitoring.',
    signs: 'ongoing fever, fatigue, digestive concerns, unexplained pain or a new health concern',
    team: 'General physicians, nurses and preventive care coordinators',
  },
  gynecology: {
    overview: 'Our Gynecology team supports women through preventive care, diagnosis and treatment at every stage of life.',
    services: ['Women’s wellness checkups', 'Menstrual and hormonal health care', 'Pregnancy and family planning guidance', 'Screening and reproductive health support'],
    highlights: ['Personalized women’s health care', 'Preventive screening and reproductive guidance', 'Support across every stage of life'],
    careExperience: 'We offer compassionate, evidence-based care that respects each patient’s health history, life stage and personal goals.',
    signs: 'unusual bleeding, pelvic pain, cycle changes or concerns about reproductive health',
    team: 'Gynecologists, supportive nursing staff and wellness counselors',
  },
  ent: {
    overview: 'Our ENT team cares for the ear, nose and throat, helping patients breathe, hear and communicate comfortably.',
    services: ['Ear infection and hearing assessment', 'Sinus and allergy care', 'Throat and voice evaluation', 'Balance and dizziness assessment'],
    highlights: ['Hearing and breathing support', 'Treatment for recurring sinus and throat issues', 'Focused care for voice and balance concerns'],
    careExperience: 'Our ENT department combines advanced assessment with practical treatment plans to help patients breathe, hear and speak with ease.',
    signs: 'hearing changes, persistent sinus symptoms, sore throat, voice changes or recurring dizziness',
    team: 'ENT specialists, audiology support and care specialists',
  },
};

function DepartmentDetails() {
  const { departmentSlug } = useParams();
  const department = departments.find(item => item.name.toLowerCase().replace(/\s+/g, '-') === departmentSlug);
  const details = departmentDetails[departmentSlug];

  if (!department || !details) {
    return (
      <section className="section page-section">
        <div className="container empty-detail">
          <span className="eyebrow">Department Not Found</span>
          <h1>We could not find that department.</h1>
          <Link to="/departments" className="btn btn-primary">View Departments</Link>
        </div>
      </section>
    );
  }

  const Icon = Icons[department.icon] || Icons.Stethoscope;

  return (
    <section className="section page-section department-detail">
      <div className="container">
        <Link to="/departments" className="back-link">← All Departments</Link>
        <div className="detail-hero">
          <div className="department-icon"><Icon size={34} /></div>
          <span className="eyebrow">Specialized Care</span>
          <h1>{department.name}</h1>
          <p>{details.overview}</p>
          <Link to="/appointment" className="btn btn-primary">Book an Appointment <ArrowRight size={18} /></Link>
        </div>

        <div className="detail-grid">
          <div className="detail-panel">
            <h2>Services we provide</h2>
            <div className="detail-list">
              {details.services.map(service => <div key={service}><CheckCircle2 size={19} /> <span>{service}</span></div>)}
            </div>
          </div>
          <div className="detail-panel detail-note">
            <Clock3 size={28} />
            <h2>When to consult us</h2>
            <p>Consider speaking with our {department.name.toLowerCase()} team if you have {details.signs}.</p>
            <div className="detail-callout"><strong>Need urgent help?</strong><span>Call +91 98765 43210 for immediate assistance.</span></div>
          </div>
        </div>

        <div className="detail-extra-grid">
          <div className="detail-panel">
            <h2>Why choose this department</h2>
            <div className="detail-benefits">
              {details.highlights.map(item => (
                <div key={item} className="benefit-item">
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-panel">
            <h2>Care experience</h2>
            <p className="detail-extra-copy">{details.careExperience}</p>
            <div className="detail-mini-card">
              <strong>Care team</strong>
              <span>{details.team}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepartmentDetails;