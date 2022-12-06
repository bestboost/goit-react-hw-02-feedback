import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StatisticsTitle, FeedbackList, FeedbackItem, FeedbackName, Statistic} from './Statistics.styled';
import { Box } from '../Box';

class Feedback extends Component {
  static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
  };


    render() { 
const {good, neutral, bad, total, positivePercentage} = this.props

        return (
            <Box>
              <StatisticsTitle>Statistics</StatisticsTitle>
                 <FeedbackList>
                    <FeedbackItem>
                        <FeedbackName >Good:</FeedbackName > 
                        <Statistic>{good}</Statistic>
                    </FeedbackItem>
                    <FeedbackItem>
                        <FeedbackName >Neutral:</FeedbackName >
                        <Statistic>{neutral}</Statistic>
                    </FeedbackItem>
                    <FeedbackItem>
                        <FeedbackName >Bad:</FeedbackName >
                        <Statistic>{bad}</Statistic>
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
           
           </Box>
        );
    }
};

export default Feedback;