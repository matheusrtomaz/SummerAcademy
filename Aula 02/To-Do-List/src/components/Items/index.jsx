import React from "react";
import { ItemsStyles } from "./styles";

export function Items({ tasks, removeTask }) {
    return (
        <ItemsStyles>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <div>
                            <i
                                id="check"
                                className="bx bx-check-square"
                                onClick={() => alert(`Concluído: ${task}`)}
                            ></i>
                            <i
                                id="remove"
                                className="bx bx-trash"
                                onClick={() => removeTask(index)}
                            ></i>
                        </div>
                    </li>
                ))}
            </ul>
        </ItemsStyles>
    );
}
