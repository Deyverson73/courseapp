import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInputComp } from './styles';

interface Props extends TextInputProps {}

const TextInput = (props: Props) => {
  return <TextInputComp {...props} />;
};

export default TextInput;
