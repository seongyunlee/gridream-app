import styled from 'styled-components/native';
import Colors from '../../../theme/Colors.ts';
import {Text} from 'react-native';
const NotePreview = () => {
  return (
    <PreviewContainer>
      <HeaderContainer>
        <IconContainer>
          <Text style={{fontSize: 20, color: Colors.black}}>❤️</Text>
        </IconContainer>
        <TitleContainer>
          <TitleTextContainer>
            <Text style={{fontSize: 20, color: Colors.black}}>
              매일 유산소 30분 하기
            </Text>
            <Text style={{fontSize: 12, color: Colors.black}}>1월 6일</Text>
          </TitleTextContainer>
        </TitleContainer>
      </HeaderContainer>
      <ContentImage
        source={require('../../../../assets/images/mock/running.png')}
      />
    </PreviewContainer>
  );
};
const PreviewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
`;
const HeaderContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  height: auto;
  background-color: aqua;
  flex-direction: row;
  display: flex;
`;
const TitleContainer = styled.View`
  flex: 1;
  padding: 10px;
`;
const TitleTextContainer = styled.View`
  flex-direction: column;
  display: flex;
  justify-content: center;
  background-color: ${Colors.primary};
`;
const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
`;
const ContentImage = styled.Image`
  width: 240px;
  height: 240px;
  padding: 20px;
  border-radius: 10px;
  aspect-ratio: 1;
`;
const ContentText = styled.Text`
  font-size: 16px;
  flex: 1;
  height: 30px;
`;

export default NotePreview;
