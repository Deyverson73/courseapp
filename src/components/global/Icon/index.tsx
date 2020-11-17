import React from 'react';

interface dictionary {
  [key: string]: any;
}

const iconsDictionary: dictionary = {
  Feather: require('react-native-vector-icons/Feather').default,
  AntDesign: require('react-native-vector-icons/AntDesign').default,
  SimpleLineIcons: require('react-native-vector-icons/SimpleLineIcons').default,
};

const index = ({ ...props }: any, lib: string) => {
  const IconComp = iconsDictionary[lib];

  return <IconComp {...props} />;
};

export default index;
