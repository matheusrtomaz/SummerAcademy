// import React, { useState } from 'react';
// import './styles.css';

// export function Calculator() {
//   const [currentInput, setCurrentInput] = useState('');
//   const [history, setHistory] = useState('');

//   const appendValue = (value) => {
//     setCurrentInput((prev) => prev + value);
//   };

//   const clearDisplay = () => {
//     setCurrentInput('');
//     setHistory('');
//   };

// //   const backspace = () => {
// //     setCurrentInput((prev) => prev.slice(0, -1));
// //   };

//   const calculateResult = () => {
//     try {
//       const result = eval(currentInput); // Cuidado com eval; alternativas como math.js podem ser mais seguras
//       setHistory(`${currentInput} = ${result}`);
//       setCurrentInput(result.toString());
//     } catch {
//       setCurrentInput('Erro');
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <div className="history">{history}</div>
//         <div className="result">{currentInput || '0'}</div>
//       </div>
//       <div className="buttons">
//         <button onClick={clearDisplay}>C</button>
//         {/* <button className="duplo" onClick={backspace}>⌫</button> */}
//         <button onClick={() => appendValue('/')}>÷</button>
//         <button onClick={() => appendValue('7')}>7</button>
//         <button onClick={() => appendValue('8')}>8</button>
//         <button onClick={() => appendValue('9')}>9</button>
//         <button onClick={() => appendValue('*')}>x</button>
//         <button onClick={() => appendValue('4')}>4</button>
//         <button onClick={() => appendValue('5')}>5</button>
//         <button onClick={() => appendValue('6')}>6</button>
//         <button onClick={() => appendValue('-')}>-</button>
//         <button onClick={() => appendValue('1')}>1</button>
//         <button onClick={() => appendValue('2')}>2</button>
//         <button onClick={() => appendValue('3')}>3</button>
//         <button onClick={() => appendValue('+')}>+</button>
//         <button onClick={() => appendValue('0')}>0</button>
//         <button onClick={() => appendValue('.')}>.</button>
//         <button className="duplo" onClick={calculateResult}>=</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import './styles.css';

export function Calculator() {
  const [currentInput, setCurrentInput] = useState('');
  const [history, setHistory] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'AC') return clearDisplay();
    if (value === '=') return calculateResult();
    setCurrentInput((prev) => prev + value);
  };

  const clearDisplay = () => {
    setCurrentInput('');
    setHistory('');
  };

  const calculateResult = () => {
    try {
      const result = eval(currentInput); // Substituir eval por biblioteca externa para maior segurança em produção.
      setHistory(`${currentInput} = ${result}`);
      setCurrentInput(result.toString());
    } catch {
      setCurrentInput('Erro');
    }
  };

  const buttons = [
    'AC', '±', '%', '÷',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    // <div className='geral'>
    <div className="calculator">
      <div className="display">
        <div className="history">{history}</div>
        <div className="result">{currentInput || '0'}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleButtonClick(btn)}
            className={`button ${btn === '=' || btn === 'AC' || btn === '-' || btn === '*' || btn === '+' || btn === '÷' ? 'special' : ''} ${btn === '0' ? 'double' : ''}`}
          >
            {btn === '÷' ? '/' : btn === '*' ? 'x' : btn}
          </button>
        ))}
      </div>
    </div>
    // </div>
  );
}
