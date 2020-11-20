import React from 'react';
import {
  Container,
  Number,
  LessonDetails,
  Title,
  Duration,
  PlayContainer,
  PlayIcon,
} from './styles';

interface Props {
  item: {
    id: string;
    number: string;
    title: string;
    duration: string;
    played: boolean;
  };
}

const TextInput = (props: Props) => {
  return (
    <Container>
      <Number>{props.item.number}</Number>
      <LessonDetails>
        <Title>{props.item.title}</Title>
        <Duration>{props.item.duration}</Duration>
      </LessonDetails>
      <PlayContainer played={props.item.played}>
        <PlayIcon played={props.item.played} />
      </PlayContainer>
    </Container>
  );
};

export default TextInput;
