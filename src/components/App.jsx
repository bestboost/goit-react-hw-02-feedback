import React, {Component} from 'react';
import { Box } from '../components/Box';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Section from 'components/Title/SectionTitle';
// import AddButton from 'components/Feedback/FeedbackOptions';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
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
  
  // handleAddNeutral = () => {
  //     this.setState(prevState => ({
  //         neutral: prevState.neutral + 1,
  // }))
  // }; 
  
  // handleAddBad = () => {
  //     this.setState(prevState => ({
  //         bad: prevState.bad + 1,
  // }))
  // }; 
  
  
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
    // const {good, neutral, bad} = this.state;
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
      {/* <AddButton onAddGood={this.handleAddGood}
   onAddNeutral={this.handleAddNeutral} 
   onAddBad={this.handleAddBad}/> */}
        <FeedbackOptions options={keys} onLeaveFeedback={this.handleAdd}/>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
      </Section>
    </Box>
  );
};
};

export default App;
