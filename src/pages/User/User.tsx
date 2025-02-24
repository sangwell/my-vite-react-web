import {Link, NavLink, Outlet} from "react-router-dom";
import './User.css';

export default function User(){
    return (
        <>
        <h1>User</h1>
            <div className="container">
                <div className="user-menu">
                    <ul>
                        <li><NavLink to="profile/1">Profile_1</NavLink></li>
                        <li><NavLink to="profile/2">Profile_2</NavLink></li>
                        <li><NavLink to="posts/1" state={{ userId: 1 }}>Posts_1</NavLink></li>
                        <li><NavLink to="posts/2" state={{ userId: 2 }}>Posts_2</NavLink></li>
                    </ul>
                </div>
                <div className="user-page">
                    <Outlet />
                </div>
            </div>
        </>
    )
}