import {StyleSheet} from 'react-native';
import {TagSize, TagStyleProps} from './types';

export const getStyles = (props: TagStyleProps) => {
  const {theme, size} = props;

  return StyleSheet.create({
    tagContainer: {
      height: 20,
      borderRadius: 999,
      paddingLeft: 8,
      paddingRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
    },
    successContainer: {
      backgroundColor: theme.colors['surface-semantic-success-01'],
    },
    infoContainer: {
      backgroundColor: theme.colors['surface-semantic-info-01'],
    },
    warningContainer: {
      backgroundColor: theme.colors['surface-semantic-warning-01'],
    },
    errorContainer: {
      backgroundColor: theme.colors['surface-semantic-error-01'],
    },
    otherContainer: {
      backgroundColor: theme.colors['surface-02'],
    },
    successLabel: {
      color: theme.colors['content-semantic-success-02'],
    },
    infoLabel: {
      color: theme.colors['content-semantic-info-02'],
    },
    warningLabel: {
      color: theme.colors['content-semantic-warning-02'],
    },
    errorLabel: {
      color: theme.colors['content-semantic-error-02'],
    },
    otherLabel: {
      color: theme.colors['content-secondary'],
    },
  });
};
