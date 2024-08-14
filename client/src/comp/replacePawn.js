import React from 'react';

const buttonContents = [
    { symbol: '♖', name: 'rook' },
    { symbol: '♘', name: 'knight' },
    { symbol: '♗', name: 'bishop' },
    { symbol: '♕', name: 'queen' }
];



const ReplacePawn = ({newPawnSymbolandName}) => {
    
    const printButtonContent = (symbol, name) => {
        newPawnSymbolandName(symbol, name);
    }

    return (
        <>
            Choose one of the following
            {buttonContents.map((button, index) => (
                <button key={index} onClick={() => printButtonContent(button.symbol, button.name)}>
                    '{button.symbol}', '{button.name}'
                </button>
            ))}
        </>
    );
}

export default ReplacePawn;
