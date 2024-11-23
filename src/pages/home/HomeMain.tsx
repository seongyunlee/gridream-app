import React from 'react';
import styled from 'styled-components/native';
import Mandart from '../../common/components/organisms/mandart/Mandart.tsx';
import Colors from '../../common/theme/Colors.ts';
import NotePreview from '../../common/components/organisms/note/NotePreview.tsx';
import {ScrollView} from 'react-native';

export const HomeMain = () => {
  return (
    <HomeMainContainer>
      <ScrollView style={{width: '100%'}}>
        <MandartContainer>
          <Mandart />
        </MandartContainer>
        <NotePreview />
        <NotePreview />
      </ScrollView>
    </HomeMainContainer>
  );
};

const MandartContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  padding: 10px 10px;
  background-color: ${Colors.lightGray};
`;
const HomeMainContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 15px;
  background-color: ${Colors.white};
`;
