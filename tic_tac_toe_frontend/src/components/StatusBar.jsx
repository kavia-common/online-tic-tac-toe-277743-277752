import React from "react";
import styles from "./StatusBar.module.css";

/**
 * Status bar showing the current player or game result.
 * @param {object} props
 * @param {string|null} props.current
 * @param {string|null} props.winner
 * @param {boolean} props.isDraw
 * @param {boolean} props.hasReset
 */
function StatusBar({ current, winner, isDraw, hasReset }) {
  let content;
  if (winner) {
    content = `Winner: ${winner}`;
  } else if (isDraw) {
    content = "Draw!";
  } else {
    content = `Next: ${current}`;
  }
  // Reset triggers ARIA polite announcement
  return (
    <div className={styles.statusBar} aria-live="polite">
      {content}
    </div>
  );
}

export default StatusBar;
