import {Theme} from 'react-core';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export enum linkVariant {
  large = 'Large',
  medium = 'Medium',
  small = 'Small',
}
export interface LinkProps {
  id: string;
  disabled?: boolean;
  variant?: linkVariant;
  inverted?: boolean;
  linkText: string;
  icon?: React.JSX.Element;
  onPress?: () => void;
  customStyle?: StyleProp<ViewStyle>;
  customLabelStyle?: StyleProp<TextStyle>;
}

export interface LinkStyleProps {
  theme: Theme;
}

export interface SvgColorProps {
  iconcolor: string;
}
