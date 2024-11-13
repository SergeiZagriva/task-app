import React from "react";
import { useState } from "react";

function TaskBoard() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", status: "upcoming"},
        { id: 2, title: "Task 2", status: "current"},
        { id: 3, title: "Task 3", status: "complete"},
    ]);

    // New upcoming task state
    const [newUpcomingTask, setNewUpcomingTask] = useState("");

    // New current task state
    const [newCurrentTask, setNewCurrentTask] = useState("");

    // Adding new upcoming task
    const addUpcomingTask = (e) => {

        e.preventDefault() // Prevents the page from refreshing to allow ENTER to work

        if (newUpcomingTask.trim() === "") return; // If empty

        const newTaskObject = {
            id: tasks.length + 1, // Task id - !UPDATE LATER!
            title: newUpcomingTask,       // Input value
            status: "upcoming"    // Status by default
        };

        // Update task array with the new task
        setTasks([...tasks, newTaskObject]);

        // Clear the input field
        setNewUpcomingTask("");

    };

    // Adding new current task
    const addCurrentTask = (e) => {

        e.preventDefault() // Prevents the page from refreshing to allow ENTER to work

        if (newCurrentTask.trim() === "") return; // If empty

        const newTaskObject = {
            id: tasks.length + 1, // Task id - !UPDATE LATER!
            title: newCurrentTask,       // Input value
            status: "current"    // Status by default
        };

        // Update task array with the new task
        setTasks([...tasks, newTaskObject]);

        // Clear the input field
        setNewCurrentTask("");

    };

    const deleteTask = (id) => {
        // Filter out the task with the matching id
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks); // Update the state with the new list of tasks
      };
    
    return (
        <div className="taskboard">
            <div className="taskColumnUpcoming">
                <h1>Upcoming Tasks</h1>
                {tasks.filter(task => task.status === "upcoming").map(task => (
                    <div className="taskItem" key={task.id}>
                        {task.title}{" "}
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                ))}

                <form id="newUpcomingTaskForm">
                    <input 
                    id="newUpcomingTaskInput" 
                    type="text" 
                    value={newUpcomingTask} //Input value to state
                    onChange={(e) => setNewUpcomingTask(e.target.value)} // Update state live
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addUpcomingTask(e);
                        }
                    }}
                    />
                <button type="button" onClick={addUpcomingTask}>Add Task</button>    
                </form>
            </div>

            <div className="taskColumnCurrent">
                <h1>Current Tasks</h1>
                {tasks.filter(task => task.status === "current").map(task => (
                    <div className="taskItem" key={task.id}>
                        {task.title}{" "}
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>     
                ))}

                <form id="newCurrentTaskForm">
                    <input 
                    id="newCurrentTaskInput" 
                    type="text" 
                    value={newCurrentTask} //Input value to state
                    onChange={(e) => setNewCurrentTask(e.target.value)} // Update state live
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addCurrentTask(e);
                        }
                    }}
                    />
                <button type="button" onClick={addCurrentTask}>Add Task</button>    
                </form>

            </div>
            <div className="taskColumnComplete">
                <h1>Completed Tasks</h1>
                {tasks.filter(task => task.status === "complete").map(task => (
                    <div className="taskItem" key={task.id}>
                        {task.title}{" "}
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>  
                ))}

            </div>
        </div>        
    );
}

export default TaskBoard;