import React, { Component } from "react";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.reduce((sum, n) => sum + n.state), 0;
  };

  // countPositiveFeedbackPercentage() {

  // }

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          <Notification message="No feedback given"></Notification>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
          />
        </Section>

        {/* // total={} positivePercentage={} */}
      </>
    );
  }
}

export default App;
