import css from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1>
        <i>
          <span className={css.titleSpan}>Sip</span> Happens Café
        </i>
      </h1>
      <p className={css.text}>
        Please leave your feedback <span className={css.textSpan}>about</span>{" "}
        our service <span className={css.textSpan}>by</span> selecting one{" "}
        <span className={css.textSpan}>of the</span> options{" "}
        <span className={css.textSpan}>below</span>.
      </p>
    </>
  );
}