import React, { useState } from "react";
import HomeStyles from "./HomeStyles";
import { Input } from "../components/Input";
import { Items } from "../components/Items";

function Home() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <HomeStyles>
            <div className="home">
                <h1>To-Do List</h1>
                <div>
                    <Input addTask={addTask} />
                </div>
                <div>
                    <Items tasks={tasks} removeTask={removeTask} />
                </div>
            </div>
        </HomeStyles>
    );
}

export default Home;
