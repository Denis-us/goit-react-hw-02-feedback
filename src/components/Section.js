import React from "react";

const Section = ({ title }) => {
  return <section>{title && <h2>{title}</h2>}</section>;
};

export default Section;
