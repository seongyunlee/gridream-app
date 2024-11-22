import React from 'react';
import styled from 'styled-components/native';

interface CellProps {
  content: string;
  topLeftRounded?: boolean;
  topRightRounded?: boolean;
  bottomLeftRounded?: boolean;
  bottomRightRounded?: boolean;
}

const Cell: React.FC<CellProps> = ({
  content,
  topLeftRounded = false,
  topRightRounded = false,
  bottomLeftRounded = false,
  bottomRightRounded = false,
}) => (
  <StyledView
    topLeftRounded={topLeftRounded}
    topRightRounded={topRightRounded}
    bottomLeftRounded={bottomLeftRounded}
    bottomRightRounded={bottomRightRounded}>
    <StyledText>{content}</StyledText>
  </StyledView>
);

const StyledView = styled.View<{
  topLeftRounded: boolean;
  topRightRounded: boolean;
  bottomLeftRounded: boolean;
  bottomRightRounded: boolean;
}>`
  padding: 10px;
  border-width: 1px;
  border-color: gray;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-left-radius: ${({topLeftRounded}) =>
    topLeftRounded ? '10px' : '0px'};
  border-top-right-radius: ${({topRightRounded}) =>
    topRightRounded ? '10px' : '0px'};
  border-bottom-left-radius: ${({bottomLeftRounded}) =>
    bottomLeftRounded ? '10px' : '0px'};
  border-bottom-right-radius: ${({bottomRightRounded}) =>
    bottomRightRounded ? '10px' : '0px'};
`;

const StyledText = styled.Text`
  font-size: 16px;
`;

export default Cell;
