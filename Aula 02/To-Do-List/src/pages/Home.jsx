import React, { useState } from "react";
import HomeStyles from "./HomeStyles";
import { Input } from "../components/Input";
import { Items } from "../components/Items";
import { Finish } from "../components/Finish";

function Home() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const addTask = (task) => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const completeTask = (index) => {
        const taskToComplete = tasks[index];
        setTasks(tasks.filter((_, i) => i !== index));
        setCompletedTasks([...completedTasks, taskToComplete]);
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HomeStyles>
            <div className="home">
                <h1>To-Do List</h1>
                <div className="input-container">
                    <Input addTask={addTask} />
                </div>
                <div className="tasks-container">
                    <Items
                        tasks={tasks}
                        removeTask={removeTask}
                        completeTask={completeTask}
                    />
                </div>
                {isOpen && (
                    <div className="completed-container">
                        <ul>
                            {completedTasks.map((task, index) => (
                                <li key={index}>
                                    {task}
                                    <button onClick={() => {
                                        const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
                                        setCompletedTasks(updatedCompletedTasks);
                                    }}>
                                        <i class='bx bx-trash'></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <Finish completedTasks={completedTasks} toggleList={toggleList} />
            </div>
        </HomeStyles>
    );
}

export default Home;
