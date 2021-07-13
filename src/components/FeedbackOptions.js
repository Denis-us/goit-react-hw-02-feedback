import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option) => (
        <button onClick={onLeaveFeedback}>{option}</button>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
