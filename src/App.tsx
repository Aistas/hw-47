import { useState } from 'react'
import './App.css'
import NumberBall from "./components/NumberBall/NumberBall";

type Props = {
    initialNumbers: number[];
};

const App: React.FC<Props> = ({ initialNumbers }) => {
    const [numbers, setNumbers] = useState<number[]>(initialNumbers);

    const generateNewNumbers = () => {
        const newNumbers: number[] = [];
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
        <div className="app">
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
