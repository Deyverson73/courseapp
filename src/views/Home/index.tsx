import React, { useRef } from 'react';

import {
  StatusBar,
  Container,
  Header,
  UserName,
  Title,
  UserImage,
  InputContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  MainCard,
  MainContent,
  MainCardImage,
  TitleContainer,
  TitleCart,
  ContinueButton,
  ContinueContent,
  ContinueText,
  ContinueIcon,
  TopCoursesText,
  TopCoursesContainer,
  FirstTopCourseImage,
  SecondTopCourseImage,
  FirstTopCourse,
  SecondTopCourse,
  TopCourseTitle,
  Footer,
  GridIcon,
  PlayButton,
  PlayIcon,
  GraphicIcon,
} from './styles';
import List from '../List';

interface imperativeFunctions {
  openModal: () => void;
}

const Home = () => {
  const refList = useRef<imperativeFunctions>();

  const openModal = () => refList.current?.openModal();

  return (
    <Container>
      <StatusBar animated />
      <Header>
        <UserName>Hi, Deyverson</UserName>
        <Title>Find a perfect course for you</Title>
        <UserImage source={require('../../assets/images/avatar.png')} />
      </Header>
      <InputContainer>
        <SearchInput placeholder="Search course..." />
        <SearchButton onPress={() => ''}>
          <SearchIcon />
        </SearchButton>
      </InputContainer>

      <MainCard>
        <MainContent>
          <TitleContainer>
            <TitleCart>Mobile</TitleCart>
            <TitleCart>Websit</TitleCart>
            <TitleCart>Optimization</TitleCart>
          </TitleContainer>
          <ContinueButton>
            <ContinueContent>
              <ContinueText>Continue</ContinueText>
              <ContinueIcon />
            </ContinueContent>
          </ContinueButton>
        </MainContent>
        <MainCardImage
          resizeMode="contain"
          source={require('../../assets/images/main.png')}
        />
      </MainCard>

      <TopCoursesText>Top Courses</TopCoursesText>
      <TopCoursesContainer>
        <FirstTopCourse>
          <TopCourseTitle>SEO</TopCourseTitle>
          <TopCourseTitle>Marketing</TopCourseTitle>
          <FirstTopCourseImage
            resizeMode="contain"
            source={require('../../assets/images/first.png')}
          />
        </FirstTopCourse>
        <SecondTopCourse>
          <TopCourseTitle>Cosumer</TopCourseTitle>
          <TopCourseTitle>Analysis</TopCourseTitle>
          <SecondTopCourseImage
            resizeMode="contain"
            source={require('../../assets/images/second.png')}
          />
        </SecondTopCourse>
      </TopCoursesContainer>

      <Footer>
        <GridIcon />
        <PlayButton onPress={() => openModal()}>
          <PlayIcon />
        </PlayButton>
        <GraphicIcon />
      </Footer>

      <List refList={refList} />
    </Container>
  );
};

export default Home;
