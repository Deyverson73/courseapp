import React, { useState, useCallback, useImperativeHandle } from 'react';
import { Modal, FlatList, StyleSheet } from 'react-native';
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

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = () => {
    props.animateComponentsIn();
    setVisible(false);
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

  return (
    <Modal
      visible={visible}
      animated
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}>
      <ModalContainer>
        <StatusBar animated />
        <Header>
          <BackIcon onTouchEnd={closeModal} />
          <HeaderImage
            resizeMode="contain"
            source={require('../../assets/images/headerimage.png')}
          />
        </Header>
        <DetailsContainer>
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
        <ListContainer>
          <Title>Lessons</Title>
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderLessons(item)}
            ItemSeparatorComponent={LessonSeparator}
          />
        </ListContainer>
        <SubscribeButton>
          <SubscribeText>Enroll Now</SubscribeText>
        </SubscribeButton>
      </ModalContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 15,
  },
});

export default List;
