import {BottomTabHeaderProps} from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import Colors from "../../theme/Colors.ts";
import LogoImg from "../../../assets/images/logo.svg";

export function TabHeader(props: BottomTabHeaderProps) {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${Colors.gray};
`;

const Logo = styled.View`
  width: 100px;
  height: 30px;
    background-image: url(${LogoImg});
`
