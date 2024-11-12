import React from "react";
import { useState } from "react";

function TaskBoard() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", status: "upcoming"},
        { id: 2, title: "Task 2", status: "current"},
        { id: 3, title: "Task 3", status: "complete"},
    ]);

    // New task state
    const [newTask, setNewTask] = useState("");

    // Adding new task
    const addTask = () => {

        if (newTask.trim() === "") return; // If empty

        const newTaskObject = {
            id: tasks.length + 1, // Task id - !UPDATE LATER!
            title: newTask,       // Input value
            status: "upcoming"    // Status by default
        };

        // Update task array with the new task
        setTasks([...tasks, newTaskObject]);

        // Clear the input field
        setNewTask("");

    };

    const deleteTask = (id) => {
        // Filter out the task with the matching id
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks); // Update the state with the new list of tasks
      };
    
    return (
        <div className="taskboard">
            <div className="taskColumn">
                <h1>Upcoming Tasks</h1>
                {tasks.filter(task => task.status === "upcoming").map(task => (
                    <div key={task.id}>
                        {task.title}{" "}
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                ))}
            </div>

            <div className="taskColumn">
                <h1>Current Tasks</h1>
                {tasks.filter(task => task.status === "current").map(task => (
                    <div key={task.id}>
                        {task.title}{" "}
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>   
                ))}

            </div>
            <div className="taskColumn">
                <h1>Completed Tasks</h1>
                {tasks.filter(task => task.status === "complete").map(task => (
                    <div key={task.id}>
                        {task.title}{" "}
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>  
                ))}

            </div>

            <form id="newTaskForm">
                <input 
                    id="newTaskInput" 
                    type="text" 
                    value={newTask} //Input value to state
                    onChange={(e) => setNewTask(e.target.value)} // Update state live
                />
            <button type="button" onClick={addTask}>Add Task</button>    
            </form>

        </div>        
    );
}

export default TaskBoard;