import React, { useState } from 'react';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js"
import "./createTask.css"
function CreateTask() {
    const { dispatch } = useContext(TaskContext)
    const {userToken} = useContext(TokenContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // const [toast, setToast] = useState();
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/task/addTask", {title, description},{
              headers: {
                Authorization: `Bearer ${userToken}`
              }
            })
            //setToast(res.data)
            // showToast();
          } catch (error) {
            console.log(error);
          }
        dispatch({
            type: "ADD_TASK",
            title,
            description
        })
        setTitle("")
        setDescription("")
    }

    // const showToast = () => {
    //     const toast = document.getElementById('toast');
    //     toast.style.display = "block"
    //     setTimeout(hideToast,2000)
    // }
    // const hideToast = () => {
    //     const toast = document.getElementById('toast');
    //     toast.style.display = "none"
    // }
    return (
        <div className="container-form">
            <div >
                <form onSubmit={handleAdd}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            className='input-title '/>
                    </div>
                    <div >
                        <label htmlFor="description">Description</label>
                        <textarea
                            rows={5}
                            name="description"
                            id="description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ resize: "none" }}
                            className='textarea-description' />
                    </div>
                    
                      
                    <div >
                        <button
                            type='submit'
                            className='btn-add'
                        >Add</button>
                    </div>
                </form>
              
            </div>
        </div>
    );
}

export default CreateTask;