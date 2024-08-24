import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [value, setValue] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-value");
    return savedValues
      ? JSON.parse(savedValues)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-value", JSON.stringify(value));
  }, [value]);

  const updateFeedback = (feedbackType) => {
    setValue({ ...value, [feedbackType]: value[feedbackType] + 1 });
  };

  const resetValue = () => setValue({ good: 0, neutral: 0, bad: 0 });

  const totalFeedback = value.good + value.neutral + value.bad;
  const persent = Math.round((value.good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options
        click={updateFeedback}
        feedback={Object.keys(value)}
        totalValue={totalFeedback}
        reset={resetValue}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          value={value}
          feedback={Object.keys(value)}
          totalValue={totalFeedback}
          persent={persent}
        />
      )}
    </>
  );
}