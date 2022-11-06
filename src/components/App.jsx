import { Box } from '../Box';
import { Feedback } from 'components/Feedback/Feedback'

export const App = () => {
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
      <Feedback/>
      React homework template
    </Box>
  );
};
