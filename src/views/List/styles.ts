import styled from 'styled-components/native';
import { Text, Icon } from '../../components/global';

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#5d3ea8',
})``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

// Header
export const Header = styled.View`
  height: 30%;
  align-items: flex-end;
  background-color: #5d3ea8;
`;

export const HeaderImage = styled.Image`
  width: 75%;
  height: 60%;
  margin-top: 5%;
  z-index: -100;
`;

export const BackIcon = styled((props) => Icon(props, 'Ionicons')).attrs({
  name: 'chevron-back-sharp',
  color: '#ffffff',
})`
  position: absolute;
  top: 28px;
  left: 28px;
  font-size: 20px;
  padding: 10px;
  border-radius: 12px;
  background-color: #6d51b1;
`;

// Details
export const DetailsContainer = styled.View`
  height: 35%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 28px 28px 0px;
  margin-top: -18%;
  background-color: #eefaff;
`;

export const Title = styled(Text)`
  font-size: 28px;
  line-height: 35px;
  font-weight: bold;
`;

export const BookMarkIcon = styled((props) => Icon(props, 'FontAwesome')).attrs(
  {
    name: 'bookmark',
    color: '#FFC561',
  },
)`
  position: absolute;
  top: 28px;
  right: 28px;
  font-size: 20px;
  padding: 9px 12px;
  border-radius: 100px;
  background-color: #ffffff;
  elevation: 30;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const UserImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 8px;
`;

export const UserName = styled(Text)`
  font-size: 22px;
  margin-top: -4px;
  margin-left: 8px;
`;

export const CourseDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const DetailsItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ClockIcon = styled((props) =>
  Icon(props, 'MaterialCommunityIcons'),
).attrs({
  name: 'clock-time-five-outline',
  color: '#6d51b1',
})`
  font-size: 20px;
`;

export const FolderIcon = styled((props) => Icon(props, 'Feather')).attrs({
  name: 'folder',
  color: '#6d51b1',
})`
  font-size: 20px;
`;

export const DetailsText = styled(Text)`
  font-size: 22px;
  margin-top: -4px;
  margin-left: 8px;
  color: #6d51b1;
`;

// List
export const ListContainer = styled.View`
  flex: 1;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: -25%;
  padding: 28px 28px 0px;
  background-color: #ffffff;
`;

export const LessonSeparator = styled.View`
  height: 1px;
  margin: 16px 0px;
  border-bottom-width: 0.7px;
  border-color: #dcdcdc;
`;

// Subscribe Button
export const SubscribeButton = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  margin: 10px 28px 28px;
  padding: 20px 0px;
  border-radius: 100px;
  background-color: #5d3ea8;
`;

export const SubscribeText = styled(Text)`
  font-size: 22px;
  margin-top: -4px;
  color: #ffffff;
`;
