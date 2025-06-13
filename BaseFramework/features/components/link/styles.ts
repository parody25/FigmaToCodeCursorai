import {StyleSheet} from 'react-native';
import {LinkStyleProps} from './types';
import {Typography} from '@app/utils';

export const getStyle = (properties: LinkStyleProps) => {
  const {theme} = properties;
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      minHeight: 24,
      alignSelf: 'flex-start',
    },
    smallVariantGap: {
      gap: 4,
    },
    largeAndMidumVariantGap: {
      gap: 8,
    },
    iconViewStyle: {
      height: 20,
      width: 20,
    },
    smallIconViewStyle: {
      height: 16,
      width: 16,
    },
    baseTextStyle: {
      marginStart: 4,
      color: theme.colors['content-interactive-primary-enabled'],
      fontWeight: '600',
      fontSize: 16,
      alignItems: 'center',
      fontFamily: Typography.fonts.figtree_semibold,
    },
    baseInvertedTextStyle: {
      marginStart: 4,
      color: theme.colors['content-interactive-inverted-enabled'],
      fontWeight: '600',
      alignItems: 'center',
      fontFamily: Typography.fonts.figtree_semibold,
    },
    disabledStyle: {
      color: theme.colors['content-interactive-primary-disabled'],
    },

    activeStyle: {
      color: theme.colors['content-interactive-primary-active'],
    },

    largeSizeStyle: {
      fontSize: 16,
      lineHeight: 24,
    },
    mediumSizeStyle: {
      fontSize: 14,
      lineHeight: 20,
    },
    smallSizeStyle: {
      fontSize: 12,
      lineHeight: 16,
    },
  });
};
