import {Link, NavLink, useLocation} from "react-router-dom";
import './AppMenu.css';

export default function AppMenu() {
    const location = useLocation();

    return (
        <>
            <h1>Keeps</h1>
            <ul className="menu">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}><span className="menu-icon">🙋‍♀️</span>
                    学习计划</Link></li>
                <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
                <li><Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>Form</Link></li>
                <li><NavLink to="/widgets">Widgets</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
                <li><NavLink to="/table">Table(动态加载)</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </>
    );
}