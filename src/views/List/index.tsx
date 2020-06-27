import React, { useState, useCallback, useImperativeHandle } from 'react';

import { Modal } from 'react-native';
import { StatusBar, ModalContainer, Header, Details } from './styles';

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
      animationType="slide"
      transparent={true}
      onRequestClose={closeModal}>
      <ModalContainer>
        <StatusBar />
        <Header>
          <></>
        </Header>
        <Details>
          <></>
        </Details>
      </ModalContainer>
    </Modal>
  );
};

export default List;
