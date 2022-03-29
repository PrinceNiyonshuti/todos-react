/** @format */

import { useRef, useState, useEffect } from "react";
import Task from "./components/task";
import "./App.css";
import "./index.css";

function App() {
	const [taskData, setTaskData] = useState(null);
	// Form variables
	const taskName = useRef();
	const taskDescription = useRef();
	const taskForm = useRef();
	const newTask = (event) => {
		event.preventDefault();
		const name = taskName.current.value;
		const description = taskDescription.current.value;
		const task = { name, description };

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

	// Retrieve all Tasks
	useEffect(() => {
		fetch(`http://localhost:8000/taskList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTaskData(data);
			});
	}, []);
	return (
		<div className="App">
			<h1>My Todos</h1>
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
			<br />
			<div>{taskData && <Task taskData={taskData} />}</div>
		</div>
	);
}

export default App;
