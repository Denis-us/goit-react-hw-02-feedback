import React, { Component } from "react";
import Statistics from "./components/Statistics";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  // countPositiveFeedbackPercentage() {

  // }

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <button onClick={this.goodFeedback}>Good</button>
          <button onClick={this.neutralFeedback}>Neutral</button>
          <button onClick={this.badFeedback}>Bad</button>
        </Section>

        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        <Section title="">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          ></Statistics>
        </Section>
        {/* // total={} positivePercentage={} */}
      </>
    );
  }
}

export default App;
