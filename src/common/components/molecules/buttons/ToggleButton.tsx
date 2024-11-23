import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Colors from '../../common/theme/Colors.ts';
import {FaFontAwesome} from 'react-icons/fa';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {IconName} from '@fortawesome/duotone-light-svg-icons';

interface ToggleButtonProps {
  isToggled: boolean;
  onToggle: () => void;
  component: IconName;
  iconSize?: number;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isToggled = false,
  onToggle,
  component,
  iconSize = 24,
}: ToggleButtonProps) => {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <ButtonContainer onPress={handleToggle}>
      <FontAwesomeIcon
        icon={[isToggled ? 'fas' : 'far', component]}
        size={iconSize}
      />
    </ButtonContainer>
  );
};

const ButtonContainer = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export default ToggleButton;
