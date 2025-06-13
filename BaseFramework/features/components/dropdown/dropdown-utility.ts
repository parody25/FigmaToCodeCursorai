import {Animated} from 'react-native';
import {ArrowTypeProps, AnimationProps} from './types';

export const arrowType: (properties: ArrowTypeProps) => string = properties => {
  const {theme, isDropdownFocused, errorText, disabled} = properties;

  if (isDropdownFocused && errorText === undefined) {
    return theme.colors['icon-interactive-secondary-active'];
  } else if (disabled) {
    return theme.colors['icon-interactive-secondary-disabled'];
  } else if (errorText !== undefined) {
    return theme.colors['icon-semantic-error-01'];
  } else {
    return theme.colors['icon-interactive-secondary-enabled'];
  }
};

export const animatedDuration = 200;

export const handleAnimation = ({
  AnimatedValue,
  toValue,
  duration,
  useNativeDriver,
}: AnimationProps) => {
  return Animated.timing(AnimatedValue, {
    toValue: toValue,
    duration: duration,
    useNativeDriver: useNativeDriver,
  });
};
