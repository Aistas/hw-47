import React from 'react';

interface Props {
    number: number;
}

const NumberBall: React.FC<Props> = ({ number }) => {
    return (
        <div className="number-ball">
            <p>{number}</p>
        </div>
    );
};


export default NumberBall;