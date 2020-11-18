import React from 'react';
import { TextComp } from './styles';

const Text = (props: any) => {
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

  return <TextComp {...newProps}>{props.children}</TextComp>;
};

export default Text;
