import { useState } from 'react'
import './App.css'
import NumberBall from "./components/NumberBall/NumberBall";

type NumbersArray = number[];

const App: React.FC = () => {
    const initialNumbers: NumbersArray = [5, 11, 16, 23, 32];
    const [numbers, setNumbers] = useState<NumbersArray>(initialNumbers);

    const generateNewNumbers = () => {
        const newNumbers: NumbersArray = [];
        while (newNumbers.length < 5) {
            const newNumber = Math.floor(Math.random() * 32) + 5;
            if (!newNumbers.includes(newNumber)) {
                newNumbers.push(newNumber);
            }
        }
        newNumbers.sort((a, b) => a - b);
        setNumbers(newNumbers);
    };

    return (
        <div className="lottery-app">
            <div className="number-balls">
                {numbers.map((num) => (
                    <NumberBall key={num} number={num} />
                ))}
            </div>
            <button onClick={generateNewNumbers}>New numbers</button>
        </div>
    );
};


export default App
