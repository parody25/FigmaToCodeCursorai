import React, {FC} from 'react';
import {Text} from 'react-native';
import {getStyles} from './styles';
import {LabelProperties, variants} from './types';
import {useNewTheme} from 'react-core';

const Label: FC<LabelProperties> = (properties: LabelProperties) => {
  const {
    id,
    variant = variants.bodyRegularM,
    text,
    style,
    numberOfLines,
    textProps,
  } = properties;
  const theme = useNewTheme();
  const styles = getStyles({theme});

  return (
    <Text
      key={id}
      numberOfLines={numberOfLines}
      style={[styles[variant], style]}
      {...textProps}>
      {text}
    </Text>
  );
};

export {Label};
