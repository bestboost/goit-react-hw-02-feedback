import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Block, CallToAction, FeedbackList, FeedbackItem, FeedbackName, Statistic } from './Feedback.styled';
import { Box } from '../Box';
import AddButton from './AddButton';

class Feedback extends Component {
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
        bad: 0
      }

handleAddGood = () => {
    this.setState(prevState => ({
            good: prevState.good + 1,
    }))
  };  

handleAddNeutral = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1,
}))
}; 

handleAddBad = () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1,
}))
}; 


countTotalFeedback = () => {
    this.setState(prevState => ({

    state: prevState.state.reduce((total, state) => (
     state.completed ? total + 1 : total), 0
    )}));
 
};

// countPositiveFeedbackPercentage();

    render() { 

        return (
            <Box>
              <Block>
                 <CallToAction>Please laeve feedback</CallToAction>
                <AddButton 
                onAddGood={this.handleAddGood}
                onAddNeutral={this.handleAddNeutral}
                onAddBad={this.handleAddBad}
                />
                 <FeedbackList>
                    <FeedbackItem>
                        <FeedbackName >Good:</FeedbackName > 
                        <Statistic>{this.state.good}</Statistic>
                    </FeedbackItem>
                    <FeedbackItem>
                        <FeedbackName >Neutral:</FeedbackName >
                        <Statistic>{this.state.neutral}</Statistic>
                    </FeedbackItem>
                    <FeedbackItem>
                        <FeedbackName >Bad:</FeedbackName >
                        <Statistic>{this.state.bad}</Statistic>
                    </FeedbackItem>    
                    <FeedbackItem>
                        <FeedbackName >Total:</FeedbackName >
                        <Statistic >0</Statistic>
                    </FeedbackItem>
                    <FeedbackItem>
                        <FeedbackName >Positive feedback:</FeedbackName >
                        <Statistic>0%</Statistic>
                    </FeedbackItem>
                 </FeedbackList>
               </Block>
           </Box>
        );
    }
};

export default Feedback;