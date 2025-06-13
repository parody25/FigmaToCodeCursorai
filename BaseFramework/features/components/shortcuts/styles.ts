import {StyleSheet} from 'react-native';
import {ShortcutsStyleProperties} from './types';
export const getStyles = (props: ShortcutsStyleProperties) => {
  const {theme, inverted} = props;
  return StyleSheet.create({
    containerStyle: {
      justifyContent: 'space-between',
      width: '100%',
    },
    parentComponentStyle: {
      width: 90.5,
      gap: 4,
    },
    buttonStyle: {
      height: 48,
      width: 48,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: 'red',
    },
    primaryContainer: {
      backgroundColor: inverted
        ? theme.colors['surface-interactive-primary-inverted-enabled']
        : theme.colors['surface-overlay-01'],
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondaryContainer: {
      backgroundColor: theme.colors['icon-interactive-inverted-enabled'],
      borderColor: inverted
        ? theme.colors['surface-interactive-primary-enabled']
        : theme.colors['border-interactive-inverted-enabled'],
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      height: 20,
      width: 20,
      alignSelf: 'center',
    },
    labelValueStyle: {
      textAlign: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      color: theme.colors['content-inverted-primary'],
    },
  });
};
