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
		fetch(`http://localhost:8000/taskList/` + TaskId, {
			method: "DELETE",
		}).then(() => {
			allTask();
		});

		// setTaskData(...taskData, deleteTask);
	};

	// Retrieve all Tasks
	const allTask = () => {
		fetch(`http://localhost:8000/taskList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTaskData(data);
			});
	};
	useEffect(() => {
		allTask();
	}, []);
	return (
		<div className="App">
			<h1>My Todos</h1>
			<AddForm setTaskData={setTaskData} allTask={allTask} />
			<br />
			<div>
				{taskData && <Task taskData={taskData} deleteTask={deleteTask} />}
			</div>
		</div>
	);
}

export default App;
