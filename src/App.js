import React, { Component } from "react";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = () => {
    this.setState((prevState) => {
      return {
        option: prevState.option + 1,
      };
    });
  };

  // neutralFeedback = () => {
  //   this.setState((prevState) => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // badFeedback = () => {
  //   this.setState((prevState) => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  // countPositiveFeedbackPercentage() {

  // }

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}></Section>
        {/* <button onClick={this.goodFeedback}>Good</button>
          <button onClick={this.neutralFeedback}>Neutral</button>
          <button onClick={this.badFeedback}>Bad</button> */}

        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        {/* {/* <Section title={"Statistics"}></Section> */}
        <Statistics>
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        </Statistics>

        {/* // total={} positivePercentage={} */}
      </>
    );
  }
}

export default App;
