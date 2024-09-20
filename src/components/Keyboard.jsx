import React from 'react';

const letters = "abcdefghijklmnopqrstuvwxyz".split('');

const Keyboard = ({ handleGuess, guessedLetters }) => {
  return (
    <div className="Keyboard">
      {letters.map((letter, index) => (
        <button
          key={index}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
