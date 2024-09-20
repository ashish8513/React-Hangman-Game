import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="WordDisplay">
      {word.split('').map((letter, index) =>
        guessedLetters.includes(letter) ? (
          <span key={index} className="letter">{letter}</span>
        ) : (
          <span key={index} className="letter">_</span>
        )
      )}
    </div>
  );
};

export default WordDisplay;
