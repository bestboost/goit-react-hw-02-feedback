import PropTypes from 'prop-types';
import {Block, CallToAction,ChooseButton ,FeedbackList, FeedbackItem, FeedbackName } from './Feedback.styled';
import { Box } from '../Box';

export const Feedback = () => {
    return (
        <Box>
        <Block>
      <CallToAction>Please laeve feedback</CallToAction>
      <ChooseButton>Good</ChooseButton>
      <ChooseButton>Neutral</ChooseButton>
      <ChooseButton>Bad</ChooseButton>
      <FeedbackList>
        <FeedbackItem>
            <FeedbackName >Good:</FeedbackName >
            <span></span>
        </FeedbackItem>
        <FeedbackItem>
            <FeedbackName >Neutral:</FeedbackName >
            <span></span>
        </FeedbackItem>
        <FeedbackItem>
            <FeedbackName >Bad:</FeedbackName >
            <span></span>
        </FeedbackItem>
      </FeedbackList>
      </Block>
      </Box>
    );
};