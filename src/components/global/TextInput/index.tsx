import React from 'react';
import { TextInputComp } from './styles';

const TextInput = (props: any) => {
  const newProps = {
    ...props,
    style: [
      {
        ...props.style[0],
        fontWeight: 'normal',
        fontFamily:
          props.style[0].fontWeight === 'bold'
            ? 'Quicksand-Bold'
            : 'Quicksand-Regular',
      },
    ],
  };
  return <TextInputComp {...newProps} />;
};

export default TextInput;
