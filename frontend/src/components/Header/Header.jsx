import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import "./header.css"
function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);
    console.log("user", user);
    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }

    return (
        <div>
            <nav className='header-h'>
                <div className="logo w-1/4 text-center">
                    <NavLink to="/">Todo App</NavLink>
                </div>
                <div className='flex-containerr'>
                    {
                        token ? (
                            <div className='flex-container'>
                                <p className='mr-5'>welcome, <span className=' styled-text'>{user.name}</span></p>
                                <button onClick={logout} className="logout-button">Logout</button>
                            </div>
                        ) : (
                            <ul className='flexx-container'>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;