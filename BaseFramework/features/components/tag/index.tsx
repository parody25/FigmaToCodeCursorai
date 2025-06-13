import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {getStyles} from './styles';
import {useNewTheme} from 'react-core';
import {TagProperties} from './types';
import {Label} from '../label';
import {variants} from '../label/types';

const Tag: FC<TagProperties> = props => {
  const {
    label,
    size,
    type,
    id,
    customContainerStyle,
    customLabelStyle,
    onPress,
  } = props;
  const theme = useNewTheme();
  const styles = getStyles({size, theme});

  return (
    <TouchableOpacity
      key={id}
      style={[
        {...styles.tagContainer},
        {...styles[`${type}Container`]},
        customContainerStyle,
      ]}
      onPress={onPress}>
      <Label
        id="lblText"
        text={label}
        variant={variants.bodyMediumS}
        style={[styles[`${type}Label`], customLabelStyle]}
      />
    </TouchableOpacity>
  );
};
export {Tag};
