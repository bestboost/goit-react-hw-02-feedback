import styled from 'styled-components';
import { textStyle } from 'styled-system';

export const Block = styled.div`

`;

export const CallToAction = styled.p`
    color: ${p => p.theme.colors.title};
    font-size: ${p =>p.theme.fontSizes.xl}px;
`;

export const ChooseButton = styled.button`
    padding: ${p => p.theme.space[2]}px;
    margin-right: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors. secondBackground};    
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};
   
    :last-of-type {
        margin-right: ${p => p.theme.space[0]}px;
    }
          
`;

export const FeedbackList = styled.ul`
padding: 0;
list-style-type: none;
`;

export const FeedbackItem = styled.li`
    margin-bottom: ${p => p.theme.space[0]}px;
`;
    
export const FeedbackName = styled.p`
   font-size: ${p => p.theme.fontSizes.l}px;
   color: ${p => p.theme.colors.text};
   margin-bottom: ${p => p.theme.space[0]}px;
`;
      
export const Statistics = styled.span`

`;