import moment from "moment"
import "./tasklist.css"
function CompletedTask({task}) {
    return ( 
        <div className='alltasks-container'>
            <div  className="task-info">
                <h4 className="task-title">{task.title}</h4>
                <p className="task-description">{task.description}</p>
                <div className=' italic-opacity'>
                    {
                        task?.createdAt ? (
                            <p>{moment(task.createdAt).fromNow()}</p>
                        ) : (
                            <p>just now</p>
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default CompletedTask;