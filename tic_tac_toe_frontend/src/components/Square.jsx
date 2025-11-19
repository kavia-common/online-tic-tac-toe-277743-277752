import React from "react";
import styles from "./Square.module.css";

/**
 * Board cell button for the Tic Tac Toe game.
 * @param {object} props
 * @param {string} props.value
 * @param {function} props.onClick
 * @param {number} props.row
 * @param {number} props.col
 * @param {boolean} props.isWinHighlight
 * @param {boolean} props.disabled
 * @param {string} props["aria-label"]
 */
function Square({
  value,
  onClick,
  row,
  col,
  isWinHighlight = false,
  disabled = false,
  ...rest
}) {
  let className = styles.square;
  if (isWinHighlight) className += ` ${styles.highlight}`;
  if (disabled) className += ` ${styles.disabled}`;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-pressed={!!value}
      aria-label={rest["aria-label"] || ""}
      tabIndex={0}
      disabled={disabled}
      data-row={row}
      data-col={col}
    >
      {value}
    </button>
  );
}

export default Square;
