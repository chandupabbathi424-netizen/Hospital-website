import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const submit = e => { e.preventDefault(); setError(''); alert('Login demo successful!'); navigate('/'); };
  return (
    <section className="auth-section"><div className="auth-card"><span className="eyebrow">Welcome Back</span><h1>Login</h1><p>Access your MediCare account.</p>
      <form onSubmit={submit}><label>Email<input type="email" required placeholder="you@example.com" /></label><label>Password<input type="password" required minLength="6" placeholder="••••••••" /></label><button className="btn btn-primary full">Login</button></form>
      <p className="auth-bottom">Don't have an account? <Link to="/register">Create one</Link></p>
    </div></section>
  );
}
export default Login;