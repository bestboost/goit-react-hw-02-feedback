import React, { Component } from 'react';
import {Buttons, ChooseButton} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

  static defaultProps = [];

  state = {
    options: this.props.options,
    onLeaveFeedback: this.props.onLeaveFeedback,
  }


  render () {

    return (
      <Buttons>
        {this.props.options.map(option => (
          <ChooseButton key={option} type="button" onClick={ (e) => this.props.onLeaveFeedback(option)}>{option}</ChooseButton>
         ))}
    </Buttons> 
    )
  }
}

export default FeedbackOptions;