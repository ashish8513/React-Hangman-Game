import React, { useState } from 'react';
import WordDisplay from './WordDisplay';
import Keyboard from './Keyboard';

const words = ["javascript", "react", "programming", "hangman", "ashish", "prabhakar"];

const Hangman = () => {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  const isGameWon = word.split('').every(letter => guessedLetters.includes(letter));
  const isGameOver = wrongGuesses >= maxWrongGuesses;

  const restartGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  return (
    <div className="Hangman">
      <p>Wrong guesses: {wrongGuesses} / {maxWrongGuesses}</p>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      {isGameWon && <p>You won! 🎉</p>}
      {isGameOver && <p>Game Over! The word was: {word}</p>}
      <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} />
      {(isGameWon || isGameOver) && <button onClick={restartGame} className='reset-btn'> Restart</button>}
    </div>
  );
};

export default Hangman;
