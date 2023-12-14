import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return ( 
        <div className='foot-container'>
            <nav>
                <ul className='foot-bar'>
                    <li>
                        <NavLink to="/">All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/active">Active</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed">Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;