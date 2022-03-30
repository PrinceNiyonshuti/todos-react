/** @format */

import {  useState, useEffect } from "react";
import Task from "./components/task";
import AddForm from "./components/AddForm";
import "./App.css";
import "./index.css";

function App() {
	const [taskData, setTaskData] = useState(null);
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
			<div>{taskData && <Task taskData={taskData} />}</div>
		</div>
	);
}

export default App;
