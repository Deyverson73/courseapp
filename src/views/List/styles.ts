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

export const DetailsContainer = styled.View`
  height: 35%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 28px 28px 0px;
  margin-top: -18%;
  background-color: #eefaff;
`;

export const DetailsTitle = styled(Text)`
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
  padding: 10px 14px;
  border-radius: 100px;
  background-color: #ffffff;
  elevation: 30;
`;

export const ListContainer = styled.View`
  height: 20%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: -17%;
  background-color: #ffffff;
`;
