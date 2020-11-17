import styled from 'styled-components/native';
import { Text, TextInput, Icon } from '../../components/global';

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'dark-content',
  backgroundColor: '#eefaff',
})``;

export const Container = styled.View`
  flex: 1;
  padding: 28px 28px 0px;
  background-color: #eefaff;
`;

// Header
export const Header = styled.View``;

export const UserImage = styled.Image`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 45px;
  height: 45px;
  border-radius: 12px;
`;

export const UserName = styled(Text)`
  max-width: 65%;
  font-size: 22px;
`;
export const Title = styled(Text)`
  max-width: 65%;
  font-size: 32px;
  margin-top: 8px;
  line-height: 40px;
  font-weight: bold;
`;

//Search Input
export const InputContainer = styled.View`
  height: 45px;
  margin-top: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  justify-content: space-between;
  flex-direction: row;
`;

export const SearchInput = styled(TextInput)`
  max-width: 75%;
  margin-left: 10px;
  font-size: 16px;
`;

export const SearchButton = styled.TouchableHighlight.attrs({
  underlayColor: '#5D3EA8',
})`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #5d3ea8;
`;

export const SearchIcon = styled((props) => Icon(props, 'Feather')).attrs({
  name: 'search',
  color: '#ffffff',
})`
  font-size: 20px;
`;

//Main Card
export const MainCard = styled.View`
  elevation: 30;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #ffc561;
  padding: 18px 23px;
`;

export const MainContent = styled.View``;

export const TitleContainer = styled.View``;

export const TitleCart = styled(Text)`
  font-size: 21px;
  color: #ffffff;
`;

export const ContinueButton = styled.TouchableHighlight``;

export const ContinueContent = styled.View`
  max-width: 110px;
  padding: 6px 2px;
  border-radius: 12px;
  margin-top: 14px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #5d3ea8;
`;

export const ContinueText = styled(Text)`
  font-size: 16px;
  margin-right: 8px;
  color: #ffffff;
`;

export const ContinueIcon = styled((props) => Icon(props, 'AntDesign')).attrs({
  name: 'playcircleo',
  color: '#ffffff',
})`
  font-size: 16px;
`;

export const MainCardImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 12px;
`;

//Top courses
export const TopCoursesText = styled(Text)`
  font-size: 18px;
  margin-top: 28px;
  margin-right: 8px;
  color: #000000;
`;

export const TopCoursesContainer = styled.View`
  height: 28%;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FirstTopCourse = styled.View`
  flex: 1;
  elevation: 30;
  margin-right: 10px;
  padding: 18px 23px;
  border-radius: 20px;
  background-color: #c0a9f6;
`;

export const FirstTopCourseImage = styled.Image`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 100px;
  height: 100px;
  border-radius: 12px;
`;

export const SecondTopCourse = styled.View`
  flex: 1;
  elevation: 30;
  margin-left: 10px;
  padding: 18px 23px;
  border-radius: 20px;
  background-color: #81cff3;
`;

export const SecondTopCourseImage = styled.Image`
  position: absolute;
  bottom: 8px;
  align-self: center;
  width: 120px;
  height: 120px;
  border-radius: 12px;
`;

export const TopCourseTitle = styled(Text)`
  font-size: 21px;
  color: #ffffff;
`;

//Footer
export const Footer = styled.View`
  width: 100%;
  elevation: 30;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  padding: 15px 15%;
  border-radius: 100px;
  background-color: #ffffff;
`;

export const GridIcon = styled((props) => Icon(props, 'SimpleLineIcons')).attrs(
  {
    name: 'grid',
    color: '#5D3EA8',
  },
)`
  margin: 2px;
  font-size: 26px;
`;

export const PlayIcon = styled((props) => Icon(props, 'AntDesign')).attrs({
  name: 'play',
  color: '#5D3EA8',
})`
  margin-top: -27px;
  margin-bottom: -27px;
  font-size: 76px;
  padding: 4px;
  border-radius: 100px;
  background-color: #ffffff;
  z-index: 100;
`;

export const GraphicIcon = styled((props) => Icon(props, 'Feather')).attrs({
  name: 'pie-chart',
  color: '#5D3EA8',
})`
  font-size: 30px;
`;
