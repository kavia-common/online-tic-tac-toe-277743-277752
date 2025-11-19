import React from "react";
import styles from "./Controls.module.css";

/**
 * Controls section with a Reset button.
 * @param {object} props
 * @param {function} props.onReset
 */
function Controls({ onReset }) {
  return (
    <div className={styles.controls}>
      <button
        type="button"
        className={styles.resetButton}
        onClick={onReset}
        aria-label="Reset the game"
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;
