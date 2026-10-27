import { Link } from 'react-router-dom';
function NotFound() { return <section className="auth-section"><div className="auth-card center"><span className="eyebrow">404</span><h1>Page Not Found</h1><p>The page you are looking for does not exist.</p><Link to="/" className="btn btn-primary">Back Home</Link></div></section>; }
export default NotFound;