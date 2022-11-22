import React, { Component } from 'react';
import {Buttons, ChooseButton} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import App from 'components/App';


// const AddButton = ({ onAddGood, onAddNeutral, onAddBad }) => (
//   <Buttons>
//     <ChooseButton type="button" onClick={onAddGood}>Good</ChooseButton>
//     <ChooseButton type="button" onClick={onAddNeutral}>Neutral</ChooseButton>
//     <ChooseButton type="button" onClick={onAddBad}>Bad</ChooseButton>
//   </Buttons> 
  
// );

// export default AddButton;

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
  }

  static defaultProps = [];

  state = {
    options: this.props.options,
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