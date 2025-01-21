import React from "react";
import { ItemsStyles } from "./styles";

export function Items() {
    return (
        <ItemsStyles>
            <ul>
                <li>
                    Estudar
                    <div>
                        <i id="check" class="bx bx-check-square"></i>
                        <i id="remove" class="bx bx-trash"></i>
                    </div>
                </li>
                <li>
                    Trabalhar
                    <div>
                        <i id="" class="bx bx-check-square"></i>
                        <i id="" class="bx bx-trash"></i>
                    </div>
                </li>
                <li>
                    Descansar
                    <div>
                        <i id="" class="bx bx-check-square"></i>
                        <i id="" class="bx bx-trash"></i>
                    </div>
                </li>
            </ul>
        </ItemsStyles>
    );
}
