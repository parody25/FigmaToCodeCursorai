import {StyleSheet} from 'react-native';
import {LabelStyleProperties} from './types';
import {Typography} from '@app/utils';
export const getStyles = (props: LabelStyleProperties) => {
  const {theme} = props;
  return StyleSheet.create({
    titleXL: {
      fontSize: 28,
      fontWeight: '500',
      color: theme.colors['content-primary'],
      fontFamily: Typography.fonts.figtree_medium,
      lineHeight: 32,
    },
    titleL: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.colors['content-primary'],
      fontFamily: Typography.fonts.figtree_semibold,
      lineHeight: 28,
    },
    titleM: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
      color: theme.colors['content-primary'],
      fontFamily: Typography.fonts.figtree_semibold,
    },
    titleS: {
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 24,
      color: theme.colors['content-primary'],
      fontFamily: Typography.fonts.figtree_medium,
    },
    titleXS: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
      color: theme.colors['content-primary'],
      fontFamily: Typography.fonts.figtree_semibold,
    },
    bodySemiBoldL: {
      color: theme.colors['content-primary'],
      fontWeight: '600',
      lineHeight: 24,
      fontSize: 18,
      fontFamily: Typography.fonts.figtree_semibold,
    },
    bodyMediumL: {
      color: theme.colors['content-primary'],
      fontWeight: '500',
      lineHeight: 24,
      fontSize: 18,
      fontFamily: Typography.fonts.figtree_medium,
    },
    bodyRegularL: {
      color: theme.colors['content-primary'],
      fontWeight: '400',
      lineHeight: 24,
      fontSize: 18,
      fontFamily: Typography.fonts.figtree_regular,
    },
    bodySemiBoldM: {
      color: theme.colors['content-primary'],
      fontWeight: '600',
      lineHeight: 24,
      fontSize: 16,
      fontFamily: Typography.fonts.figtree_semibold,
    },
    bodyMediumM: {
      color: theme.colors['content-primary'],
      fontWeight: '500',
      lineHeight: 24,
      fontSize: 16,
      fontFamily: Typography.fonts.figtree_medium,
    },
    bodyRegularM: {
      color: theme.colors['content-secondary'],
      fontWeight: '400',
      lineHeight: 24,
      fontSize: 14,
      fontFamily: Typography.fonts.figtree_regular,
    },
    bodySemiBoldS: {
      color: theme.colors['content-interactive-primary-enabled'],
      fontWeight: '600',
      lineHeight: 20,
      fontSize: 14,
      fontFamily: Typography.fonts.figtree_semibold,
    },
    bodyMediumS: {
      color: theme.colors['content-interactive-primary-enabled'],
      fontWeight: '500',
      lineHeight: 20,
      fontSize: 14,
      fontFamily: Typography.fonts.figtree_medium,
    },
    bodyRegularS: {
      color: theme.colors['content-secondary'],
      fontWeight: '400',
      lineHeight: 20,
      fontSize: 14,
      fontFamily: Typography.fonts.figtree_regular,
    },
    bodySemiboldXS: {
      color: theme.colors['content-secondary'],
      fontWeight: '600',
      lineHeight: 16,
      fontSize: 12,
      fontFamily: Typography.fonts.figtree_semibold,
    },
    bodyMediumXS: {
      color: theme.colors['content-secondary'],
      fontWeight: '500',
      lineHeight: 16,
      fontSize: 12,
      fontFamily: Typography.fonts.figtree_medium,
    },

    bodyRegularXS: {
      color: theme.colors['content-secondary'],
      fontWeight: '400',
      lineHeight: 16,
      fontSize: 12,
      fontFamily: Typography.fonts.figtree_regular,
    },
  });
};
