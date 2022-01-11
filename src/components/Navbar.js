import { NavLink } from "react-router-dom";

import './navbar.css';

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </div>
    )
}