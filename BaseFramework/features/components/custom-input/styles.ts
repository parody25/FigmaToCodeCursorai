import {Typography} from '@app/utils';
import {Platform, StyleSheet} from 'react-native';
import {CustomInputStyleParams} from './type';
import {isRTLLanguage} from 'app/utils/language-utils';

export const getStyle = ({
  position,
  fieldActive,
  theme,
  inverted,
  focused,
  disabled,
  isError,
}: CustomInputStyleParams) => {
  const textAlign = isRTLLanguage() ? 'right' : 'left';
  return StyleSheet.create({
    parentContainer: {
      display: 'flex',
      gap: 8,
    },
    inputRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      height: 64,
      borderWidth: 1,
      borderColor: '#FFFFFF00',
      width: '100%',
      backgroundColor: inverted
        ? theme.colors['surface-interactive-secondary-inverted-enabled']
        : theme.colors['surface-interactive-secondary-enabled'],
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 8,
    },
    innerContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: fieldActive ? 'flex-end' : 'center',
    },
    placeholder: {
      position: 'absolute',
      color: inverted
        ? theme.colors['content-inverted-secondary']
        : theme.colors['content-secondary'],
      fontSize: 16,
      fontFamily: Typography.fonts.figtree_regular,
    },
    input: {
      color: inverted
        ? theme.colors['content-inverted-primary']
        : theme.colors['content-primary'],
      width: '100%',
      lineHeight: Platform.OS === 'ios' ? 0 : 24,
      height: 24,
      fontSize: 16,
      fontFamily: Typography.fonts.figtree_regular,
      fontWeight: '400',
      fontStyle: 'normal',
      padding: 0,
      margin: 0,
      textAlignVertical: 'center',
      textAlign: textAlign,
    },
    animatedPlacholderStyle: {
      fontSize: 12,
      height: 16,
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0],
      }),
    },
    focusedContainer: {
      borderWidth: 1,
      borderColor: inverted
        ? theme.colors['border-interactive-inverted-active']
        : theme.colors['border-interactive-active'],
    },
    cancelContainer: {
      padding: 5,
      justifyContent: 'center',
      alignSelf: 'center',
      height: 24,
      width: 24,
    },
    disabledContainerStyle: {
      backgroundColor: theme.colors['surface-interactive-secondary-disabled'],
      borderWidth: 0,
    },
    disabledPlaceholderStyle: {
      color: inverted
        ? theme.colors['content-inverted-disabled']
        : theme.colors['content-disabled'],
    },
    disabledInputStyle: {
      color: theme.colors['content-disabled'],
    },
    errorContainerStyle: {
      backgroundColor: inverted
        ? theme.colors['surface-interactive-secondary-inverted-enabled']
        : theme.colors['surface-semantic-error-01'],
      borderColor: inverted
        ? theme.colors['border-semantic-error-inverted']
        : theme.colors['border-semantic-error'],
      borderWidth: 1,
    },
    bottomContainerStyle: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      paddingLeft: 16,
    },
    errorText: {
      fontSize: 12,
      color: inverted
        ? theme.colors['content-semantic-error-inverted']
        : theme.colors['border-semantic-error'],
      justifyContent: 'center',
    },
    alertIconContainer: {
      width: 12,
      height: 16,
      justifyContent: 'center',
    },
    eyeOpen: {
      color: focused
        ? theme.colors['icon-interactive-secondary-active']
        : theme.colors['icon-interactive-secondary-enabled'],
    },
    focusedIcon: {
      color: theme.colors['icon-interactive-secondary-active'],
    },
    invertedIcon: {
      color: isError
        ? theme.colors['icon-semantic-error-01']
        : theme.colors['icon-interactive-inverted-active'],
    },
    errorIcon: {
      color: theme.colors['icon-semantic-error-01'],
    },
    prefixStyle: {
      color: theme.colors['content-disabled'],
      textAlignVertical: 'bottom',
      height: 24,
      fontSize: 16,
      paddingTop: 2,
    },
    disabledIcon: {
      color: theme.colors['icon-interactive-secondary-enabled'],
    },
    defaultIcon: {
      color: disabled
        ? theme.colors['icon-interactive-inverted-disabled']
        : theme.colors['icon-interactive-secondary-enabled'],
    },
    prefixSymbol: {
      flex: 1,
      justifyContent: 'center',
      paddingRight: 10,
    },
  });
};

export const getFlagComponentStyle = ({theme}) => {
  return StyleSheet.create({
    /* Flag Component Style */
    flagContainer: {
      borderRadius: 999,
      height: 24,
      width: 24,
      backgroundColor: theme.colors['background-01'],
      alignSelf: 'center',
    },
  });
};
