import {StyleSheet} from 'react-native';
import {DropdownStyleProps} from './types';
import {Typography} from 'app/utils';
export const getStyle = (properties: DropdownStyleProps) => {
  const {theme} = properties;
  return StyleSheet.create({
    viewContainer: {
      width: '100%',
    },
    pressableStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 64,
      backgroundColor: theme.colors['surface-interactive-secondary-enabled'],
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      gap: 8,
      borderWidth: 2,
      borderColor: theme.colors['surface-interactive-secondary-enabled'],
    },
    pressableActiveState: {
      borderColor: theme.colors['border-interactive-active'],
    },
    pressableDisabledState: {
      backgroundColor: theme.colors['surface-interactive-secondary-disabled'],
    },
    pressableErrorState: {
      backgroundColor: theme.colors['surface-semantic-error-01'],
      borderColor: theme.colors['border-semantic-error'],
    },
    textViewStyle: {
      minHeight: 24,
      gap: 4,
    },
    flagViewStyle: {
      height: 24,
      width: 24,
      borderRadius:999,
      overflow:'hidden'
    },
    imageViewStyle: {
      width: 24,
      height: 24,
    },
    imageStyle: {
      width: 12,
      height: 6,
      top: 9,
      left: 6,
      borderRadius: 0.5,
    },
    textHelperViewStyle: {
      paddingLeft: 8,
      marginTop: 4,
    },
    inputTextStyle: {
      color: theme.colors['content-primary'],
    },
    placeholderStyle: {
      color: theme.colors['content-secondary'],
      fontWeight: '400',
      height: 24,
      lineHeight: 24,
      fontFamily: Typography.fonts.figtree_regular,
    },
    flagAndTextContainer: {
      flexDirection:'row',
      alignItems:'center',
      gap:16
    }
  });
};
