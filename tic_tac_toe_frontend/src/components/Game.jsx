import React, { useState, useMemo } from "react";
import Board from "./Board";
import StatusBar from "./StatusBar";
import Controls from "./Controls";
import styles from "./Game.module.css";
import { calculateWinner } from "../utils/calculateWinner";

// PUBLIC_INTERFACE
const initialSquares = () => Array(9).fill(null);

/**
 * Main game logic and state container for the Tic Tac Toe game.
 */
function Game() {
  const [squares, setSquares] = useState(initialSquares);
  const [isXNext, setIsXNext] = useState(true);
  const [hasReset, setHasReset] = useState(false);

  const winnerInfo = useMemo(() => calculateWinner(squares), [squares]);
  const winner = winnerInfo.winner;
  const winningLine = winnerInfo.line;

  const isDraw = useMemo(
    () => !winner && squares.every(Boolean),
    [winner, squares]
  );

  // Prevent further moves if game is over
  const gameOver = Boolean(winner) || isDraw;

  // Returns 'X' or 'O' for current player
  const current = isXNext ? "X" : "O";

  // PUBLIC_INTERFACE
  const handleSquareClick = (idx) => {
    if (gameOver || squares[idx]) return;
    const next = squares.slice();
    next[idx] = current;
    setSquares(next);
    setIsXNext((x) => !x);
    setHasReset(false);
  };

  // PUBLIC_INTERFACE
  const handleReset = () => {
    setSquares(initialSquares);
    setIsXNext(true);
    setHasReset(true);
  };

  return (
    <div className={styles.gameShell} aria-label="Tic Tac Toe game">
      <header className={styles.header}>
        <h1 className={styles.title}>Tic Tac Toe</h1>
        <p className={styles.description}>
          A modern, accessible two-player game. X goes first.
        </p>
      </header>
      <StatusBar
        current={current}
        winner={winner}
        isDraw={isDraw}
        hasReset={hasReset}
      />
      <Board
        squares={squares}
        onSquareClick={handleSquareClick}
        winningLine={winningLine}
        gameOver={gameOver}
      />
      <Controls onReset={handleReset} />
    </div>
  );
}

export default Game;
