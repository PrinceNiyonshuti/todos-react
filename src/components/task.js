/** @format */

import React from "react";
import "./task.css";
function task({ taskData }) {
    
    return (
        <div>
            {taskData.map((task) => (
				<div className="holder" key={task.id}>
                    <div>
                        <h2>{task.name}</h2>
                        <p>{task.description}</p>
                    </div>
                </div>
			))}
        </div>
		
	);
}

export default task;
