import styled from 'styled-components';

export const Block = styled.div`

`;

export const CallToAction = styled.p`
    color: ${p => p.theme.colors.title};
`;

export const ChooseButton = styled.button`
    padding: ${p => p.theme.space[2]};
    backgruond: ${p => p.theme.colors.secondBackground};    
    border: ${p => p.theme.border};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};
    margin-right: ${p => p.theme.space[4]}px;

    :last-of-type {
        margin-right: ${p => p.theme.space[0]}px;
    }
          
`;

export const FeedbackList = styled.ul`

`;

export const FeedbackItem = styled.li`

`;
    
export const FeedbackName = styled.p`
   font-size: ${p => p.theme.fontSizes.l}px;
`;
      
export const Statistics = styled.span`

`;