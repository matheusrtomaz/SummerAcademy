export function Finish({ mudarVisibilidade }) {
    return (
        <FinishStyles>
            <button type="button" onClick={mudarVisibilidade}>
                Finalizadas
            </button>
        </FinishStyles>
    );
}

import React, { useState } from "react";
import { FinishStyles } from "./styles";
import { Finish } from "./Finish";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleList = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Finish toggleList={toggleList} />
            {isVisible && <p>Lista de tarefas finalizadas</p>}
        </div>
    );
}

export default App;