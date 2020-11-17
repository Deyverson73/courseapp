import React from 'react';
import { TextProps } from 'react-native';
import { TextComp } from './styles';

interface Props extends TextProps {
  children: string;
}

const Text = (props: Props) => {
  return <TextComp {...props}>{props.children}</TextComp>;
};

export default Text;
