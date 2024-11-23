import styled from 'styled-components/native';
import Colors from '../../../theme/Colors.ts';
import {Text} from 'react-native';
const NotePreview = () => {
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
      <ContentImage
        source={require('../../../../assets/images/mock/running.png')}
      />
    </PreviewContainer>
  );
};
const PreviewContainer = styled.View`
  flex: 1;
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
const ContentImage = styled.Image`
  width: 40px;
  padding: 20px;
  border-radius: 10px;
  aspect-ratio: 1;
  border: 2px solid ${Colors.lightGray};
`;
const ContentText = styled.Text`
  font-size: 16px;
  flex: 1;
  height: 30px;
`;

export default NotePreview;
