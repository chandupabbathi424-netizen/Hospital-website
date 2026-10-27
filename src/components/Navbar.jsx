import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, HeartPulse, MoonStar, SunMedium } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('medicare-theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('medicare-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon"><HeartPulse size={25} /></span>
          <span>MediCare <small>Hospital</small></span>
        </Link>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode(value => !value)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/doctors" onClick={closeMenu}>Doctors</NavLink>
          <NavLink to="/departments" onClick={closeMenu}>Departments</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <Link to="/appointment" className="nav-cta" onClick={closeMenu}>Book Appointment</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;