import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {getStyles} from './styles';
import {ShortcutsProperties} from './types';
import {useNewTheme} from 'react-core';
import {ShortcutItem} from './shortcutItem';

const Shortcuts: FC<ShortcutsProperties> = (
  properties: ShortcutsProperties,
) => {
  const {shortcuts, inverted = false} = properties;
  const theme = useNewTheme();
  const styles = getStyles({theme, inverted});

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}>
      {shortcuts.map(shortcut => (
        <ShortcutItem key={shortcut.id} {...shortcut} />
      ))}
    </ScrollView>
  );
};

export {Shortcuts};
