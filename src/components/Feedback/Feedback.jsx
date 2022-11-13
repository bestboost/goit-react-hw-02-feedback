import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Block, CallToAction, FeedbackList, FeedbackItem, FeedbackName, Statistic, Buttons, ChooseButton} from './Feedback.styled';
import { Box } from '../Box';
// import AddButton from './AddButton';

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
 const {good, neutral, bad} = this.state;
 return good + neutral + bad;

};


countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return Math.round((good*100) / total) || 0;
};


    render() { 
const total = this.countTotalFeedback();
const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <Box>
              <Block>
                 <CallToAction>Please laeve feedback</CallToAction>
                 <Buttons>
    <ChooseButton type="button" onClick={this.handleAddGood}>Good</ChooseButton>
    <ChooseButton type="button" onClick={this.handleAddNeutral}>Neutral</ChooseButton>
    <ChooseButton type="button" onClick={this.handleAddBad}>Bad</ChooseButton>
  </Buttons> 
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
                        <Statistic >{total}</Statistic>
                    </FeedbackItem>
                    <FeedbackItem>
                        <FeedbackName >Positive feedback:</FeedbackName >
                        <Statistic>{positivePercentage}%</Statistic>
                    </FeedbackItem>
                 </FeedbackList>
               </Block>
           </Box>
        );
    }
};

export default Feedback;