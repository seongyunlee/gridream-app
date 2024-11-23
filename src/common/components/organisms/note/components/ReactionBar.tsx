import styled from 'styled-components/native';
import ToggleButton from '../../../molecules/buttons/ToggleButton.tsx';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface ReactionBarProps {
  isLiked: boolean;
  setIsLiked?: (isLiked: boolean) => void;
  isLocked: boolean;
  likeCount: number;
  setIsLocked?: (isLocked: boolean) => void;
}
export const ReactionBar: React.FC<ReactionBarProps> = ({
  isLiked,
  setIsLiked,
  isLocked,
  likeCount = 0,
  setIsLocked,
}) => {
  const onLikePressed = () => {
    if (setIsLiked) {
      setIsLiked(!isLiked);
    }
  };

  const onLockPressed = () => {
    console.log('Lock pressed');
  };

  return (
    <BarContainer>
      <LikeContainer>
        <ToggleButton
          isToggled={isLiked}
          onToggle={onLikePressed}
          component={'heart'}
          iconSize={24}
        />
        <Text style={{fontSize: 16}}>{likeCount}</Text>
      </LikeContainer>
      <TouchableOpacity onPress={onLockPressed}>
        <FontAwesomeIcon icon={['fas', 'lock']} size={24} />
      </TouchableOpacity>
    </BarContainer>
  );
};

const BarContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 18px 26px;
`;
const LikeContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
`;
