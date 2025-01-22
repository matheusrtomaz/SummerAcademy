import React, { useState } from "react";
import { InputStyles } from "./styles";

export function Input({ addTask }) {
    const [task, setTask] = useState("");

    const handleButtonClick = () => {
        addTask(task);
        setTask("");
    };

    return (
        <InputStyles>
            <input
                className="itext"
                type="text"
                placeholder="Digite sua tarefa"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <input
                className="ibutton"
                type="submit"
                value="+"
                onClick={handleButtonClick}
            />
        </InputStyles>
    );
}
