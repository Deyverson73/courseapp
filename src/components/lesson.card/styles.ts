import styled from 'styled-components/native';
import { Icon } from '../global';
import Text from '../global/Text';

interface PlayContainerProps {
  played: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;
export const Number = styled(Text)`
  width: 45px;
  color: #b2b2b2;
  font-size: 20px;
  font-weight: bold;
`;

export const LessonDetails = styled.View`
  flex: 1;
`;

export const Title = styled(Text)`
  flex: 1;
  flex-direction: row;
  font-size: 20px;
  font-weight: bold;
`;

export const Duration = styled(Text)`
  color: #a1a1a1;
  font-size: 16px;
`;

export const PlayContainer = styled.View`
  transform: rotate(35deg);
  border-radius: 20px;
  border-width: 2.5px;
  border-color: #ffffff;
  border-top-color: ${(props: PlayContainerProps) =>
    props.played ? '#ffc561' : '#ffffff'};
  border-right-color: ${(props: PlayContainerProps) =>
    props.played ? '#ffc561' : '#ffffff'};
`;

export const PlayIcon = styled((props) => Icon(props, 'AntDesign')).attrs(
  (props: PlayContainerProps) => ({
    name: 'play',
    color: props.played ? '#5D3EA8' : '#9092CC',
  }),
)`
  transform: rotate(-35deg);
  font-size: 36px;
`;
