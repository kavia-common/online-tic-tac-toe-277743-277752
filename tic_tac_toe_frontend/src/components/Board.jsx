import React from "react";
import Square from "./Square";
import styles from "./Board.module.css";

// Helper for row/col calculation
function getRowCol(idx) {
  return { row: Math.floor(idx / 3) + 1, col: (idx % 3) + 1 };
}

/**
 * Renders a 3x3 Tic Tac Toe game board.
 * @param {object} props
 * @param {string[]} props.squares
 * @param {(idx: number) => void} props.onSquareClick
 * @param {number[]} props.winningLine
 * @param {boolean} props.gameOver
 */
function Board({ squares, onSquareClick, winningLine = [], gameOver }) {
  return (
    <div
      className={styles.board}
      role="grid"
      aria-label="Tic Tac Toe board"
      aria-disabled={gameOver}
    >
      {[...Array(9)].map((_, i) => {
        const { row, col } = getRowCol(i);
        const isWin = winningLine.includes(i);
        return (
          <Square
            key={i}
            value={squares[i]}
            onClick={() => onSquareClick(i)}
            row={row}
            col={col}
            isWinHighlight={isWin}
            disabled={Boolean(squares[i] || gameOver)}
            aria-label={`Place ${squares[i] || "mark"} at row ${row} column ${col}`}
          />
        );
      })}
    </div>
  );
}

export default Board;
