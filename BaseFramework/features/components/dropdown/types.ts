import {Animated, StyleProp, ViewStyle} from 'react-native';
import {Theme} from 'react-core';
import {ReactNode} from 'react';

export interface DropdownStyleProps {
  theme: Theme;
}
export interface DropdownProps {
  id: string;
  inputText?: string;
  BottomSheet: ReactNode;
  selectFlag?: React.JSX.Element;
  disabled?: boolean;
  placeholder?: string;
  helperText?: string;
  errorText?: string | false | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
export interface SvgColorProps {
  stroke: string;
}
export type AnimationProps = {
  AnimatedValue: Animated.Value;
  toValue:
    | number
    | Animated.Value
    | Animated.ValueXY
    | {
        x: number;
        y: number;
      }
    | Animated.AnimatedInterpolation<number>;
  duration: number;
  useNativeDriver: boolean;
};

export interface ArrowTypeProps {
  theme: Theme;
  isDropdownFocused: boolean;
  errorText: string | undefined;
  disabled: boolean | undefined;
}
