import {BottomTabHeaderProps} from "@react-navigation/bottom-tabs";
import styled from "styled-components";
import Colors from "../../theme/Colors.ts";
import LogoImg from "../../../assets/images/logo.svg";

export function TabHeader(_props: BottomTabHeaderProps) {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${Colors.primary};
`;

const Logo = styled.img.attrs({
  src: LogoImg,
})`
  width: 130px;
  height: 25px;
`;
