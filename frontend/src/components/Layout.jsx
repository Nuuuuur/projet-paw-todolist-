import React from 'react';
import TaskIndicator from './TaskIndicator';
import CreateTask from './createTask/CreateTask';
import { Outlet } from 'react-router-dom';
import "./tasklist.css"
function Layout() {
    return (
        <div>
            <div className='customClassName'>
                <CreateTask />
                <div className='task-container '>
                    <div className='outlet'>
                        <Outlet />
                    </div>
                    <div className='indicator'>
                        <TaskIndicator />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Layout;