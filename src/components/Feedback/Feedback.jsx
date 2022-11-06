import PropTypes from 'prop-types';
import {} from './Feedback.styled';
import { Box } from '../Box';

export const Feedback = () => {
    return (
        <Box>
        <div>
      <p>Please laeve feedback</p>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <ul>
        <li>
            <p>Good:</p>
            <span></span>
        </li>
        <li>
            <p>Neutral:</p>
            <span></span>
        </li>
        <li>
            <p>Bad:</p>
            <span></span>
        </li>
      </ul>
      </div>
      </Box>
    );
};