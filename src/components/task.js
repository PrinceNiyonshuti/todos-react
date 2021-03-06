/** @format */

import React from "react";
import "./task.css";
function task({ taskData,deleteTask,completeTask }) {
    
    return (
        <div>
            {taskData.map((task) => (
				<div className="task-holder" key={task.id} >
                    <div className={task.isComplete ? "task-complete" : "task-content"} onDoubleClick={() => completeTask(task.id)}>
                        <h2>{task.name}</h2>
                        <p>{task.description}</p>
                    </div>
                    <div className="task-actions">
                        <button onClick={() => completeTask(task.id)} className={task.isComplete? 'task-complete-btn':"btn complete-btn"} type="submit">Complete</button>
                        <button onClick={() => deleteTask(task.id)} className="btn delete-btn" type="submit">Delete</button>
                    </div>
                </div>
			))}
        </div>
		
	);
}

export default task;
