import React, { useEffect, useRef, useCallback } from 'react';
import { Animated, Dimensions } from 'react-native';
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
  const headerAnimateY = new Animated.Value(Dimensions.get('screen').height);
  const mainCardAnimateY = new Animated.Value(Dimensions.get('screen').height);
  const topCoursesAnimateY = new Animated.Value(
    Dimensions.get('screen').height,
  );
  const footerAnimateY = new Animated.Value(Dimensions.get('screen').height);

  const refList = useRef<imperativeFunctions>();
  const openModal = () => {
    animateComponentsOut().finally(() => refList.current?.openModal());
  };

  const animateComponentsIn = useCallback(() => {
    Animated.parallel([
      Animated.timing(headerAnimateY, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(mainCardAnimateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(topCoursesAnimateY, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(footerAnimateY, {
        toValue: 0,
        duration: 1600,
        useNativeDriver: true,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateComponentsOut = useCallback(() => {
    const toValue = Dimensions.get('screen').height;
    return new Promise((resolve) => {
      Animated.parallel(
        [
          Animated.timing(headerAnimateY, {
            toValue,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(mainCardAnimateY, {
            toValue,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(topCoursesAnimateY, {
            toValue,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(footerAnimateY, {
            toValue,
            duration: 100,
            useNativeDriver: true,
          }),
        ].reverse(),
      ).start(() => resolve());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    animateComponentsIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <StatusBar animated />
      <Header
        as={Animated.View}
        style={{
          transform: [{ translateY: headerAnimateY }],
        }}>
        <UserName>Hi, Deyverson</UserName>
        <Title>Find a perfect course for you</Title>
        <UserImage source={require('../../assets/images/avatar.png')} />
        <InputContainer>
          <SearchInput placeholder="Search course..." />
          <SearchButton onPress={() => ''}>
            <SearchIcon />
          </SearchButton>
        </InputContainer>
      </Header>

      <MainCard
        as={Animated.View}
        style={{
          transform: [{ translateY: mainCardAnimateY }],
        }}>
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

      <TopCoursesText
        as={Animated.Text}
        style={{
          transform: [{ translateY: topCoursesAnimateY }],
        }}>
        Top Courses
      </TopCoursesText>
      <TopCoursesContainer
        as={Animated.View}
        style={{
          transform: [{ translateY: topCoursesAnimateY }],
        }}>
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

      <Footer
        as={Animated.View}
        style={{
          transform: [{ translateY: footerAnimateY }],
        }}>
        <GridIcon />
        <PlayButton onPress={() => openModal()}>
          <PlayIcon />
        </PlayButton>
        <GraphicIcon />
      </Footer>

      <List refList={refList} animateComponentsIn={animateComponentsIn} />
    </Container>
  );
};

export default Home;
