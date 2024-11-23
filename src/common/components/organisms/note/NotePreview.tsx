import styled from 'styled-components/native';
import Colors from '../../../theme/Colors.ts';
import {Text} from 'react-native';
import React from 'react';
import {ReactionBar} from './components/ReactionBar.tsx';

interface NotePreviewState {
  isLiked: boolean;
  isLocked: boolean;
  contentImg: string;
  title: string;
  date: string;
  LikeCount: number;
}
const NotePreview = (props: NotePreviewState) => {
  const [isLiked, setIsLiked] = React.useState(props.isLiked);

  return (
    <PreviewContainer>
      <HeaderContainer>
        <IconContainer>
          <Text style={{fontSize: 22, color: Colors.black}}>❤️</Text>
        </IconContainer>
        <TitleContainer>
          <TitleTextContainer>
            <Text style={{fontSize: 18, color: Colors.black, fontWeight: 600}}>
              매일 유산소 30분 하기
            </Text>
            <Text style={{fontSize: 16, color: Colors.black, fontWeight: 400}}>
              1월 6일
            </Text>
          </TitleTextContainer>
        </TitleContainer>
      </HeaderContainer>
      <ImageContainer>
        <ContentImage
          source={require('../../../../assets/images/mock/running.png')}
        />
      </ImageContainer>
      <ReactionBar
        isLiked={isLiked}
        isLocked={false}
        setIsLiked={setIsLiked}
        likeCount={props.LikeCount}
      />
    </PreviewContainer>
  );
};
const PreviewContainer = styled.View`
  align-items: center;
  background-color: ${Colors.white};
`;
const HeaderContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  flex-direction: row;
  display: flex;
`;
const TitleContainer = styled.View`
  flex: 1;
`;
const TitleTextContainer = styled.View`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
const IconContainer = styled.View`
  width: 60px;
  height: 60px;
  margin-right: 16px;
  border-radius: 30px;
  background-color: ${Colors.highlightGreen};
  align-items: center;
  justify-content: center;
`;
//cover
const ContentImage = styled.Image`
  width: 100% !important;
  height: 100% !important;
  background-size: cover;
  border-radius: 10px;
  border: 2px solid ${Colors.lightGray};
`;
const ContentText = styled.Text`
  font-size: 16px;
  flex: 1;
  height: 30px;
`;
const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  aspect-ratio: 1;
  padding: 0px 20px;
  box-sizing: border-box;
  background-color: ${Colors.white};
`;

export default NotePreview;
