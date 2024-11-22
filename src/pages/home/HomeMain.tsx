import React from 'react';
import styled from 'styled-components/native';
import Mandart from '../../common/components/organisms/mandart/Mandart.tsx';
import Colors from '../../common/theme/Colors.ts';
import NotePreview from '../../common/components/organisms/note/NotePreview.tsx';

export const HomeMain = () => {
  return (
    <HomeMainContainer>
      <MandartContainer>
        <Mandart />
      </MandartContainer>
      <NotePreview />
    </HomeMainContainer>
  );
};

const MandartContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  padding: 0 10px 20px 10px;
`;
const HomeMainContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 15px;
  background-color: ${Colors.white};
`;
