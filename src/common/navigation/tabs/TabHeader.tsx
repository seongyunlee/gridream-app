import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import Colors from '../../theme/Colors.ts';
import Gridream from '../../../assets/images/2x/Gridream.png';

export function TabHeader(props: BottomTabHeaderProps) {
  return (
    <HeaderContainer>
      <Logo source={Gridream} resizeMode="contain" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  backgroud-color: ${Colors.white};
`;

const Logo = styled.ImageBackground`
  width: 128px;
  height: 24px;
  background-size: cover;
`;
