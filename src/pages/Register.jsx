import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({name:'', email:'', phone:'', password:'', confirm:''});
  const [error, setError] = useState('');
  const change = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError('Passwords do not match.'); return; }
    setError('');
    localStorage.setItem('medicareUser', JSON.stringify(form));
    alert('Registration successful!');
    navigate('/login');
  };
  return (
    <section className="auth-section"><div className="auth-card"><span className="eyebrow">Join MediCare</span><h1>Create Account</h1><p>Create an account for a smoother healthcare experience.</p>
      <form onSubmit={submit}><label>Full Name<input name="name" value={form.name} onChange={change} required /></label><label>Email<input type="email" name="email" value={form.email} onChange={change} required /></label><label>Phone<input name="phone" value={form.phone} onChange={change} required pattern="[0-9]{10}" /></label><div className="form-row"><label>Password<input type="password" name="password" value={form.password} onChange={change} required minLength="6" /></label><label>Confirm Password<input type="password" name="confirm" value={form.confirm} onChange={change} required /></label></div>{error && <p className="error">{error}</p>}<button className="btn btn-primary full">Register</button></form>
      <p className="auth-bottom">Already have an account? <Link to="/login">Login</Link></p>
    </div></section>
  );
}
export default Register;