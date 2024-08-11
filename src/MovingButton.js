import React, { useState } from 'react';

const MovingButton = () => {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    const getRandomPosition = () => {
        const top = Math.floor(Math.random() * 90) + '%';
        const left = Math.floor(Math.random() * 90) + '%';
        return { top, left };
    };

    const handleClick = () => {
        const newPosition = getRandomPosition();
        setPosition(newPosition);
    };

    return (
        <div style={{ position: 'relative', height: '400px', border: '1px solid black' }}>
            <button 
                onClick={handleClick} 
                style={{ 
                    position: 'absolute', 
                    top: position.top, 
                    left: position.left, 
                    transform: 'translate(-50%, -50%)'
                }}
            >
                Move Me
            </button>
        </div>
    );
};

export default MovingButton;
