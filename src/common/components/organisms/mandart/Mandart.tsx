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
  flex: 1;
  margin: 1.5px;
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

const Mandart = () => {
  return (
    <Container>
      <Row>
        <Cell content="1" topLeftRounded />
        <Cell content="2" />
        <Cell content="3" topRightRounded />
      </Row>
      <Row>
        <Cell content="4" />
        <Cell content="5" />
        <Cell content="6" />
      </Row>
      <Row>
        <Cell content="7" bottomLeftRounded />
        <Cell content="8" />
        <Cell content="9" bottomRightRounded />
      </Row>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 1.5px;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default Mandart;
