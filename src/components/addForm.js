/** @format */

import React, { useRef } from "react";

function AddForm({ setTaskData }) {
	// Form variables
	const taskName = useRef();
	const taskDescription = useRef();
	const taskForm = useRef();
	const newTask = (event) => {
		event.preventDefault();
		const name = taskName.current.value;
		const description = taskDescription.current.value;
		const isComplete = false;
		const task = { name, description, isComplete };

		fetch("http://localhost:8000/taskList", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		}).then(() => {
			fetch(`http://localhost:8000/taskList`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setTaskData(data);
				});
		});
		taskForm.current.reset();
	};
	return (
		<div className="holder">
			<form className="form-inline" onSubmit={newTask} ref={taskForm}>
				<div className="inputHolder">
					<label for="Name">Name</label>
					<br />
					<input
						type="text"
						id="name"
						required
						ref={taskName}
						placeholder="Enter Name"
						name="Name"
					/>
				</div>
				<div className="inputHolder">
					<label for="Name">Description</label>
					<br />
					<input
						type="text"
						id="description"
						required
						ref={taskDescription}
						placeholder="Enter Description"
						name="Name"
					/>
				</div>
				<div>
					<br />
					<button type="submit">Add Todo</button>
				</div>
			</form>
		</div>
	);
}

export default AddForm;
