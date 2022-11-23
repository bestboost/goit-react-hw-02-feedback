import styled from 'styled-components';
// import  {style}  from 'styled-system';

export const Buttons = styled.div`
`;

export const ChooseButton = styled.button`
cursor: pointer;
    padding: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    margin-right: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors. secondBackground};    
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};
 
    :hover, 
    :focus{ 
    background-color: ${p => p.theme.colors.hover}};
   
    :last-of-type {
        margin-right: ${p => p.theme.space[0]}px;
    }
          
`;

// export const FeedbackList = styled.ul`
//     padding: 0;
//     list-style-type: none;
// `;

// export const FeedbackItem = styled.li`
// display: flex;
// justify-contenr: center;
// aline-item: center;

//     margin-bottom: ${p => p.theme.space[0]}px;
// `;
    
// export const FeedbackName = styled.p`

//    font-size: ${p => p.theme.fontSizes.l}px;
//    color: ${p => p.theme.colors.text};
//    margin-bottom: ${p => p.theme.space[0]}px;
// `;
      
// export const Statistic = styled.span`
//     display: flex;
//     align-items: flex-end;
//     padding-left: ${p => p.theme.space[3]}px;
//     font-size: ${p => p.theme.fontSizes.l}px;
//     color: ${p => p.theme.colors.text};
// `;