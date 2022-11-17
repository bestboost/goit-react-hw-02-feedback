import React, {Component} from 'react';
import { Box } from '../components/Box';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Section from 'components/Title/SectionTitle';

import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
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


  render () {
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
        {/* <FeedbackOptions /> */}
        <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0}/>
      </Section>
    </Box>
  );
};
};

export default App;
