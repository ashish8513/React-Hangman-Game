<h1 align="center">Hangman Game</h1>


Hangman is a classic word-guessing game where players attempt to guess a hidden word by suggesting letters one at a time. Each incorrect guess brings the player closer to losing, as a stick-figure representation of a "hangman" is drawn progressively. The objective is to guess the word correctly before running out of attempts.


![Home Page](https://github.com/ashish8513/React-Hangman-Game/blob/main/image.png)
## Features

- **Random Word Selection**: A random word is chosen for the player to guess.
- **Letter Guessing**: Players can guess letters individually to reveal the hidden word.
- **Limited Attempts**: Players are given a fixed number of incorrect guesses before they lose the game.
- **Visual Representation**: A stick-figure hangman is drawn as incorrect guesses are made.
- **Win/Loss Conditions**: Players win if they guess the word correctly before using all attempts, and lose if the hangman figure is fully drawn.

## How to Play

1. The game randomly selects a hidden word.
2. You can guess letters one by one.
3. For each correct guess, the letter is revealed in its correct position(s) in the word.
4. For each incorrect guess, a part of the hangman is drawn.
5. You win if you guess the word before the hangman is fully drawn.
6. You lose if you run out of guesses and the hangman is completed.

## Project Structure

```bash
.
├── public/
│   └── index.html         # HTML entry point
├── src/
│   ├── components/
│   │   └── Hangman.js     # Main Hangman component
│   ├── App.js             # Application root component
│   ├── index.js           # JavaScript entry point
│   └── styles.css         # Styling for the game
├── README.md              # Project documentation
└── package.json           # Project dependencies and scripts
