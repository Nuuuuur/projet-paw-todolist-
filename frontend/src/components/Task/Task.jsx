import React from 'react';
import moment from 'moment';
import "./task.css";
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';
function Task({ task, id }) {
    const { dispatch } = useContext(TaskContext);

    const handleRemove = (e) => {
        e.preventDefault();
        

        dispatch({
            type: "REMOVE_TASK",
            id
        })
    }

    const handleMarkDone = (e) => {
        dispatch({
            type: "MARK_DONE",
            id
        })
    }
    return (
        <div className='alltasks-container'>
            <div className="mark-done">
                <input type="checkbox" className="checkbox" onChange={handleMarkDone} checked={task.completed} />
            </div>
            <div className="task-info">
                <h4 className="task-title">{task.title}</h4>
                <p className="task-description">{task.description}</p>
                <div className='italic-opacity' >
                    {
                        task?.createdAt ? (
                            <p>{moment(task.createdAt).fromNow()}</p>
                        ) : (
                            <p>just now</p>
                        )
                    }
                </div>
            </div>
            <div className="remove-task ">
                <DeleteIcon
                    style={{ fontSize: 30, cursor: "pointer" }}
                    size="large"
                    onClick={handleRemove}
                    className="remove-task-btn " />
            </div>
        </div>
    );
}

export default Task;