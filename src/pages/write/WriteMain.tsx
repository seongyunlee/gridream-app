import styled from 'styled-components/native';
import Colors from '../../common/theme/Colors.ts';
import {Text} from 'react-native';
import React from 'react';
import Mandart from '../../common/components/organisms/mandart/Mandart.tsx';
export const WriteMain = () => {
  return (
    <MainContainer>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '800',
          textAlign: 'center',
        }}>
        어떤 목표를 기록할까요?
      </Text>
      <MandartContainer>
        <Mandart />
      </MandartContainer>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  background-color: ${Colors.white};
`;
const MandartContainer = styled.View`
  width: 100%;
  aspect-ratio: 1 /1;
  padding: 20px;
  background-color: ${Colors.white};
`;
