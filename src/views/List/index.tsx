import React, { useState, useCallback, useImperativeHandle } from 'react';

import { Modal } from 'react-native';
import {
  StatusBar,
  ModalContainer,
  Header,
  BackIcon,
  HeaderImage,
  DetailsContainer,
  DetailsTitle,
  BookMarkIcon,
  ListContainer,
} from './styles';

interface imperativeFunctions {
  openModal: () => void;
}

const List = (props: any) => {
  const [visible, setVisible] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = () => {
    setVisible(false);
  };

  useImperativeHandle(
    props.refList,
    (): imperativeFunctions => {
      return {
        openModal,
      };
    },
  );

  return (
    <Modal
      visible={visible}
      animated
      animationType="none"
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
          <DetailsTitle>Digital Marketing</DetailsTitle>
          <DetailsTitle>Course </DetailsTitle>
          <BookMarkIcon />
        </DetailsContainer>
        <ListContainer>
          <></>
        </ListContainer>
      </ModalContainer>
    </Modal>
  );
};

export default List;
