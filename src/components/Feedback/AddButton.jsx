import React from 'react';
import {Buttons, ChooseButton} from './Feedback.styled';

const AddButton = ({ onAddGood, onAddNeutral, onAddBad }) => (
  <Buttons>
    <ChooseButton type="button" onClick={onAddGood}>Good</ChooseButton>
    <ChooseButton type="button" onClick={onAddNeutral}>Neutral</ChooseButton>
    <ChooseButton type="button" onClick={onAddBad}>Bad</ChooseButton>
  </Buttons>  
);

export default AddButton;