import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {getStyles} from './styles';
import {ShortcutsItem} from './types';
import {useNewTheme} from 'react-core';
import {Label} from '../label';
import {variants} from '../label/types';

const ShortcutItem: FC<ShortcutsItem> = (properties: ShortcutsItem) => {
  const {
    id,
    variant,
    labelValue = '',
    Icon,
    inverted = false,
    onPress,
    numberOfLines,
  } = properties;
  const theme = useNewTheme();
  const styles = getStyles({theme, inverted});

  return (
    <View key={id} style={styles.parentComponentStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.buttonStyle,
          variant === 'primary'
            ? styles.primaryContainer
            : styles.secondaryContainer,
        ]}>
        <View style={styles.iconContainer}>{Icon}</View>
      </TouchableOpacity>
      <Label
        id="shortcut"
        text={labelValue}
        numberOfLines={numberOfLines}
        style={styles.labelValueStyle}
        variant={variants.bodyRegularS}
      />
    </View>
  );
};

export {ShortcutItem};
