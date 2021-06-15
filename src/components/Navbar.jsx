import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <nav className="navbar navbar-dark bg-success navbar-expand-lg px-3">
        <div className="navbar-brand">Список задач</div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to={'/'}>Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={'/todos'}>Список задач</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={'/about'}>О списке</NavLink>
            </li>
        </ul>
    </nav>
}