import styled from 'styled-components';

export const StatisticsTitle = styled.p`
    color: ${p => p.theme.colors.title};
    font-size: ${p =>p.theme.fontSizes.xl}px;
`;

export const FeedbackList = styled.ul`
    padding: ${p => p.theme.space[0]}px;
    margin: ${p => p.theme.space[0]}px;
    list-style-type: none;
`;

export const FeedbackItem = styled.li`
    display: flex;
    justify-contenr: center;
    aline-item: center;

    margin-bottom: ${p => p.theme.space[0]}px;
`;
    
export const FeedbackName = styled.p`

   font-size: ${p => p.theme.fontSizes.l}px;
   color: ${p => p.theme.colors.text};
   margin-bottom: ${p => p.theme.space[0]}px;
`;
      
export const Statistic = styled.span`
    display: flex;
    align-items: flex-end;
    padding-left: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.l}px;
    color: ${p => p.theme.colors.text};
`;