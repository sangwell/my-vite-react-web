import {Link, NavLink, useLocation} from "react-router-dom";
import './AppMenu.css';

export default function AppMenu() {
    const location = useLocation();

    return (
        <>
            <h1>Vite + React</h1>
            <ul className="menu">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
                <li><Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>Form</Link></li>
                <li><NavLink to="/table">Table</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </>
    );
}