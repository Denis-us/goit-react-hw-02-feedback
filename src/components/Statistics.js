import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <ul>Statistics</ul>

      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>

      <li>Total: {}</li>
      <li>Positive feedback:</li>
    </div>
  );
};

export default Statistics;