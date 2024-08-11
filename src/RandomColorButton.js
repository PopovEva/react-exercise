import React, { useState } from 'react';

const RandomColorButton = () => {
    const [buttonColor, setButtonColor] = useState('green');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleClick = () => {
        const newColor = getRandomColor();
        setButtonColor(newColor);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h4>Random Color Button Component:</h4>
            <button 
                onClick={handleClick} 
                style={{ backgroundColor: buttonColor, padding: '10px', border: 'none', color: 'white', cursor: 'pointer' }}
            >
                Change Color
            </button>
        </div>
    );
};

export default RandomColorButton;
