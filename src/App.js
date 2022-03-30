/** @format */

import { useState, useEffect } from "react";
import Task from "./components/task";
import AddForm from "./components/AddForm";
import "./App.css";
import "./index.css";

function App() {
	const [taskData, setTaskData] = useState(null);

	// Remove Task
	const deleteTask = (TaskId) => {
		// const newTasks = taskData.filter((task) => task.id !== TaskId);
		// setTaskData(newTasks);

		const deleteTask = fetch(`http://localhost:8000/taskList/` + TaskId, {
			method: "DELETE",
		}).then(() => {
			fetch(`http://localhost:8000/taskList`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setTaskData(data);
				});
		});

		// setTaskData(...taskData, deleteTask);
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
			<AddForm setTaskData={setTaskData} />
			<br />
			<div>
				{taskData && <Task taskData={taskData} deleteTask={deleteTask} />}
			</div>
		</div>
	);
}

export default App;
