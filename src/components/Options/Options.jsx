import { useState, useEffect } from "react";
import css from "../Options/Options.module.css";

export default function Options({ click, feedback, totalValue, reset }) {
  return (
    <ul className={css.list}>
      {feedback.map((item) => (
        <li key={item}>
          <button className={css.btn} onClick={() => click(item)}>
            {item}
          </button>
        </li>
      ))}
      {totalValue > 0 && (
        <li>
          <button className={css.button} onClick={reset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}