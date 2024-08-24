import css from "./Feedback.module.css";

export default function Feedback({ value, feedback, totalValue, persent }) {
  return (
    <>
      {feedback.map((item) => (
        <p className={css.text} key={item}>
          {item}: {value[item]}
        </p>
      ))}
      {totalValue > 0 && (
        <>
          <p className={css.text}>Total: {totalValue}</p>
          <p className={css.text}>Positive: {persent}%</p>
        </>
      )}
    </>
  );
}