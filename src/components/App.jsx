import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = INITIAL_STATE;

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please Leave Feedback">
          <Feedback onFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics good={good} neutral={neutral} bad={bad} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
