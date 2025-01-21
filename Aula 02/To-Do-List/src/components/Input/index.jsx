import React from "react";
import { InputStyles } from "./styles";

export function Input() {
    const [task, setTask] = React.useState("");

    const handleButtonClick = () => {
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
                type="button"
                value="+"
                onClick={handleButtonClick}
            />
        </InputStyles>
    );
}
