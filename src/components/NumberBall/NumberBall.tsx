import React from 'react';
import './NumberBall.css';

interface Props {
    number: number;
}

const NumberBall: React.FC<Props> = ({ number }) => {
    return (
        <div className="number-ball">
            {number}
        </div>
    );
};


export default NumberBall;