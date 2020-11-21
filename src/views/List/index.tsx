import React, {
  useEffect,
  useState,
  useCallback,
  useImperativeHandle,
} from 'react';
import {
  Modal,
  FlatList,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

import {
  StatusBar,
  ModalContainer,
  Header,
  BackIcon,
  HeaderImage,
  DetailsContainer,
  Title,
  BookMarkIcon,
  UserInfo,
  UserImage,
  UserName,
  CourseDetails,
  DetailsItem,
  DetailsText,
  ClockIcon,
  FolderIcon,
  ListContainer,
  LessonSeparator,
  ButtonContainer,
  SubscribeButton,
  SubscribeText,
} from './styles';
import LessonCard from '../../components/lesson.card';

interface ImperativeFunctions {
  openModal: () => void;
}

interface Lesson {
  id: string;
  number: string;
  title: string;
  duration: string;
  played: boolean;
}

const data: Lesson[] = [
  {
    id: '1',
    number: '01',
    title: 'Introduction',
    duration: '15 mins',
    played: true,
  },
  {
    id: '2',
    number: '02',
    title: 'Market Research',
    duration: '10 mins',
    played: true,
  },
  {
    id: '3',
    number: '03',
    title: 'Make a Website',
    duration: '20 mins',
    played: false,
  },
  {
    id: '4',
    number: '04',
    title: 'Email Marketing',
    duration: '15 mins',
    played: false,
  },
];

const List = (props: any) => {
  const [visible, setVisible] = useState<boolean>(false);

  const headerAnimateY = new Animated.Value(Dimensions.get('screen').height);
  const detailsAnimateY = new Animated.Value(Dimensions.get('screen').height);
  const listAnimateY = new Animated.Value(Dimensions.get('screen').height);
  const buttonAnimateY = new Animated.Value(Dimensions.get('screen').height);

  const animateComponentsIn = () => {
    Animated.parallel([
      Animated.timing(headerAnimateY, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(detailsAnimateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(listAnimateY, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnimateY, {
        toValue: 0,
        duration: 1600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateComponentsOut = () => {
    const toValue = Dimensions.get('screen').height;
    return new Promise((resolve) => {
      Animated.parallel(
        [
          Animated.timing(headerAnimateY, {
            toValue,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(detailsAnimateY, {
            toValue,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(listAnimateY, {
            toValue,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(buttonAnimateY, {
            toValue,
            duration: 100,
            useNativeDriver: true,
          }),
        ].reverse(),
      ).start(() => resolve());
    });
  };

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = () => {
    animateComponentsOut().finally(() => {
      setVisible(false);
      props.animateComponentsIn();
    });
  };

  useImperativeHandle(
    props.refList,
    (): ImperativeFunctions => {
      return {
        openModal,
      };
    },
  );

  const renderLessons = (item: Lesson) => <LessonCard item={item} />;

  useEffect(() => {
    animateComponentsIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Modal
      visible={visible}
      style={styles.modal}
      animated
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}>
      <ModalContainer>
        <StatusBar animated />
        <Header
          as={Animated.View}
          style={{
            transform: [{ translateY: headerAnimateY }],
          }}>
          <BackIcon onTouchEnd={closeModal} />
          <HeaderImage
            resizeMode="contain"
            source={require('../../assets/images/headerimage.png')}
          />
        </Header>

        <DetailsContainer
          as={Animated.View}
          style={{
            transform: [{ translateY: detailsAnimateY }],
          }}>
          <Title>Digital Marketing</Title>
          <Title>Course </Title>
          <BookMarkIcon />
          <UserInfo>
            <UserImage source={require('../../assets/images/avatar.png')} />
            <UserName>Deyverson Abreu</UserName>
          </UserInfo>
          <CourseDetails>
            <DetailsItem>
              <ClockIcon />
              <DetailsText>1 hour</DetailsText>
            </DetailsItem>
            <DetailsItem>
              <FolderIcon />
              <DetailsText>4 lessons</DetailsText>
            </DetailsItem>
          </CourseDetails>
        </DetailsContainer>

        <ListContainer
          as={Animated.View}
          style={{
            transform: [{ translateY: listAnimateY }],
          }}>
          <Title>Lessons</Title>
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderLessons(item)}
            ItemSeparatorComponent={LessonSeparator}
          />
        </ListContainer>
        <ButtonContainer
          as={Animated.View}
          style={{
            transform: [{ translateY: buttonAnimateY }],
          }}>
          <SubscribeButton>
            <SubscribeText>Enroll Now</SubscribeText>
          </SubscribeButton>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#eefaff',
  },
  list: {
    marginTop: 15,
  },
});

export default List;
