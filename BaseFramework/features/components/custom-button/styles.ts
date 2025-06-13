import {StyleSheet} from 'react-native';
import {ButtonSizes, ButtonStyleProperties} from './types';

export const getStyles = (properties: ButtonStyleProperties) => {
  const {size, inverted, theme, isSubmitButton} = properties;

  return StyleSheet.create({
    buttonContainer: {
      width: ButtonSizes.large === size ? '100%' : 'auto',
      height: ButtonSizes.large === size ? 56 : 40,
      borderRadius: isSubmitButton ? 0 : 999,
      paddingHorizontal: ButtonSizes.large === size ? 16 : 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: ButtonSizes.large === size ? 8 : 4,
    },
    primaryContainer: {
      backgroundColor: inverted
        ? theme.colors['surface-interactive-primary-inverted-enabled']
        : theme.colors['surface-interactive-primary-enabled'],
    },
    secondaryContainer: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: inverted
        ? theme.colors['border-interactive-inverted-enabled']
        : theme.colors['surface-interactive-primary-enabled'],
    },
    ghostContainer: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    label: {
      paddingHorizontal: ButtonSizes.large === size ? 0 : 4,
    },
    primaryLabel: {
      color: inverted
        ? theme.colors['content-interactive-primary-enabled']
        : theme.colors['content-interactive-inverted-enabled'],
    },
    secondaryLabel: {
      color: inverted
        ? theme.colors['content-interactive-inverted-enabled']
        : theme.colors['content-interactive-primary-enabled'],
    },
    ghostLabel: {
      color: inverted
        ? theme.colors['content-interactive-inverted-enabled']
        : theme.colors['content-interactive-primary-enabled'],
    },
    iconOnlyStyle: {
      height: ButtonSizes.large === size ? 56 : 40,
      width: ButtonSizes.large === size ? 56 : 40,
    },
    icon: {
      height: 20,
      width: 20,
    },
    primaryIcon: {
      color: inverted
        ? theme.colors['icon-interactive-primary-enabled']
        : theme.colors['icon-interactive-inverted-enabled'],
    },
    secondaryIcon: {
      color: inverted
        ? theme.colors['icon-interactive-inverted-enabled']
        : theme.colors['icon-interactive-primary-enabled'],
    },
    ghostIcon: {
      color: inverted
        ? theme.colors['icon-interactive-inverted-enabled']
        : theme.colors['icon-interactive-primary-enabled'],
    },
    primaryPressedContainer: {
      backgroundColor: inverted
        ? theme.colors['surface-interactive-primary-inverted-active']
        : theme.colors['surface-interactive-primary-active'],
    },
    secondaryPressedContainer: {
      backgroundColor: 'transparent',
    },
    ghostPressedContainer: {
      backgroundColor: 'transparent',
    },
    primaryPressedLabel: {
      color: inverted
        ? theme.colors['content-interactive-primary-active']
        : theme.colors['content-interactive-inverted-active'],
    },
    secondaryPressedLabel: {
      color: inverted
        ? theme.colors['content-interactive-inverted-enabled']
        : theme.colors['content-interactive-primary-active'],
    },
    ghostPressedLabel: {
      color: inverted
        ? theme.colors['content-interactive-inverted-active']
        : theme.colors['content-interactive-primary-active'],
    },
    primaryPressedIcon: {
      color: inverted
        ? theme.colors['icon-interactive-primary-active']
        : theme.colors['icon-interactive-inverted-active'],
    },
    secondaryPressedIcon: {
      color: inverted
        ? theme.colors['icon-interactive-inverted-enabled']
        : theme.colors['icon-interactive-primary-active'],
    },
    ghostPressedIcon: {
      color: inverted
        ? theme.colors['icon-interactive-inverted-enabled']
        : theme.colors['icon-interactive-primary-active'],
    },
    primaryDisabled: {
      backgroundColor:
        theme.colors['surface-interactive-primary-inverted-disabled'],
      borderWidth: 0,
      borderColor: 'transparent',
    },
    secondaryDisabled: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors['border-interactive-disabled'],
    },
    ghostDisabled: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      borderColor: 'transparent',
    },
    primaryDisabledLabel: {
      color: theme.colors['content-interactive-inverted-disabled'],
    },
    secondaryDisabledLabel: {
      color: theme.colors['content-interactive-primary-disabled'],
    },
    ghostDisabledLabel: {
      color: theme.colors['content-interactive-primary-disabled'],
    },
    primaryDisabledIcon: {
      color: theme.colors['icon-interactive-inverted-disabled'],
    },
    secondaryDisabledIcon: {
      color: theme.colors['icon-interactive-primary-disabled'],
    },
    ghostDisabledIcon: {
      color: theme.colors['icon-interactive-primary-disabled'],
    },
  });
};
