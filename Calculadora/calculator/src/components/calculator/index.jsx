import React, { useState } from "react";
import "./styles.css";
import maisMenosIcon from "../../assets/images/mais-menos.png";
import { RiDivideFill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

export function Calculator() {
    const [currentInput, setCurrentInput] = useState("");
    const [history, setHistory] = useState("");

    const handleButtonClick = (value) => {
        if (value === "AC") return limparDisplay();
        if (value === "=") return calcularResultado();
        setCurrentInput((prev) => prev + value);
    };

    const limparDisplay = () => {
        setCurrentInput("");
        setHistory("");
    };

    const calcularResultado = () => {
        try {
            const sanitizedInput = currentInput
                .replace(/÷/g, "/")
                .replace(/x/g, "*")
                .replace(/%/g, "/100");
            if (/\/0/.test(sanitizedInput)) {
                setCurrentInput("0");
                return;
            }
            const result = eval(sanitizedInput);
            setHistory(`${currentInput}`);
            setCurrentInput(result.toString());
        } catch {
            setCurrentInput("Erro");
        }
    };

    const buttons = [
        "AC",
        "±",
        "%",
        "÷",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "0",
        ".",
        "=",
    ];

    return (
        <div className="calculator">
            <div className="display">
                <div className="history">{history}</div>
                <div className="result">
                    {currentInput.length > 7
                        ? currentInput.slice(0, 7) + "..."
                        : currentInput || "0"}
                </div>
            </div>
            <div className="buttons">
                {buttons.map((btn, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleButtonClick(btn)}
                        className={`button ${
                            btn === "=" ||
                            btn === "-" ||
                            btn === "*" ||
                            btn === "+" ||
                            btn === "÷"
                                ? "special"
                                : ""
                        } ${btn === "0" ? "double" : ""} ${
                            btn === "AC" || btn === "±" || btn === "%"
                                ? "top"
                                : ""
                        } ${btn === "±" ? "maismenos" : ""} ${
                            btn === "-" ? "minus" : ""
                        } ${btn === "*" ? "multiply" : ""} ${
                            btn === "÷" ? "dividir" : ""
                        } ${btn === "+" ? "mais" : ""} ${
                            btn === "=" ? "igual" : ""
                        }`}
                    >
                        {btn === "÷" ? (
                            <RiDivideFill />
                        ) : btn === "*" ? (
                            <BiX />
                        ) : btn === "-" ? (
                            <FaMinus />
                        ) : btn === "±" ? (
                            <img
                                src={maisMenosIcon}
                                style={{
                                    width: "1.6rem",
                                    height: "auto",
                                    paddingTop: "7px",
                                }}
                            />
                        ) : (
                            btn
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
