import React, {Component} from 'react';
import { Box } from '../components/Box';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Section from 'components/Title/SectionTitle';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    state: PropTypes.shape ({
       good: PropTypes.number.isRequired,
       neutral: PropTypes.number.isRequired,
       bad: PropTypes.number.isRequired
    })
 };

   state = {
       good: 0,
       neutral: 0,
       bad: 0,
     }  

     handleAdd = (option) => {
      this.setState({
              [option]: this.state[option] + 1,
      })
    };  
    
  countTotalFeedback = () => {
   const {good, neutral, bad} = this.state;
   return good + neutral + bad;
  
  };
  
  
  countPositiveFeedbackPercentage = () => {
      const {good, neutral, bad} = this.state;
      const total = good + neutral + bad;
      return Math.round((good*100) / total) || 0;
  };
  

  render () {

    const keys = Object.keys(this.state);
    const {good, neutral, bad} = this.state
const total = this.countTotalFeedback();
const positivePercentage = this.countPositiveFeedbackPercentage();

  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={this.handleAdd} />
            {good || neutral || bad !== 0 ? 
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
        : <Notification message="There is no feedback"></Notification>}
       
      </Section>
    </Box>
  );
};
};

export default App;
