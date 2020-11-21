import React, { useEffect, useRef, useCallback } from 'react';
import { Animated, Easing } from 'react-native';
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
  const userNameAnimateX = new Animated.Value(-200);
  const titleAnimateX = new Animated.Value(-200);
  const userImageAnimateOpacity = new Animated.Value(0);
  const searchInputOpacity = new Animated.Value(0);
  const mainCardOpacity = new Animated.Value(0);
  const titleTopCoursesAnimateX = new Animated.Value(-200);
  const topCoursesAnimateY = new Animated.Value(500);
  const footerAnimateY = new Animated.Value(500);

  const refList = useRef<imperativeFunctions>();
  const openModal = () => {
    animateComponentsOut().finally(() => refList.current?.openModal());
  };

  const defaultProperties = {
    duration: 600,
    useNativeDriver: true,
    easing: Easing.ease,
  };

  const animateComponentsIn = useCallback(() => {
    Animated.parallel([
      Animated.timing(userNameAnimateX, {
        toValue: 0,
        ...defaultProperties,
      }),
      Animated.timing(titleAnimateX, {
        toValue: 0,
        ...defaultProperties,
      }),
      Animated.timing(userImageAnimateOpacity, {
        toValue: 1,
        ...defaultProperties,
      }),
      Animated.timing(searchInputOpacity, {
        toValue: 1,
        ...defaultProperties,
      }),
      Animated.timing(mainCardOpacity, {
        toValue: 1,
        ...defaultProperties,
      }),
      Animated.timing(titleTopCoursesAnimateX, {
        toValue: 0,
        ...defaultProperties,
      }),
      Animated.timing(topCoursesAnimateY, {
        toValue: 0,
        ...defaultProperties,
      }),
      Animated.timing(footerAnimateY, {
        toValue: 0,
        ...defaultProperties,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateComponentsOut = useCallback(() => {
    return new Promise((resolve) => {
      Animated.parallel(
        [
          Animated.timing(userNameAnimateX, {
            toValue: -200,
            ...defaultProperties,
          }),
          Animated.timing(titleAnimateX, {
            toValue: -200,
            ...defaultProperties,
          }),
          Animated.timing(userImageAnimateOpacity, {
            toValue: 0,
            ...defaultProperties,
          }),
          Animated.timing(searchInputOpacity, {
            toValue: 0,
            ...defaultProperties,
          }),
          Animated.timing(mainCardOpacity, {
            toValue: 0,
            ...defaultProperties,
          }),
          Animated.timing(titleTopCoursesAnimateX, {
            toValue: -200,
            ...defaultProperties,
          }),
          Animated.timing(topCoursesAnimateY, {
            toValue: 500,
            ...defaultProperties,
          }),
          Animated.timing(footerAnimateY, {
            toValue: 500,
            ...defaultProperties,
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
      <Header>
        <UserName
          as={Animated.Text}
          style={{
            opacity: userNameAnimateX.interpolate({
              inputRange: [-150, 0],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
            transform: [{ translateX: userNameAnimateX }],
          }}>
          Hi, Deyverson
        </UserName>
        <Title
          as={Animated.Text}
          style={{
            opacity: titleAnimateX.interpolate({
              inputRange: [-150, 0],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
            transform: [{ translateX: titleAnimateX }],
          }}>
          Find a perfect course for you
        </Title>
        <UserImage
          as={Animated.Image}
          style={{ opacity: userImageAnimateOpacity }}
          source={require('../../assets/images/avatar.png')}
        />
      </Header>
      <InputContainer
        as={Animated.View}
        style={{ opacity: searchInputOpacity }}>
        <SearchInput placeholder="Search course..." />
        <SearchButton onPress={() => ''}>
          <SearchIcon />
        </SearchButton>
      </InputContainer>

      <MainCard as={Animated.View} style={{ opacity: mainCardOpacity }}>
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
          opacity: titleTopCoursesAnimateX.interpolate({
            inputRange: [-150, 0],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
          transform: [{ translateX: titleTopCoursesAnimateX }],
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
