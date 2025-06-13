import {StyleProp, ViewStyle} from 'react-native';
import {Theme} from 'react-core';
export enum TagTypes {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
  other = 'other',
}
export enum TagSize {
  large = 'large',
  small = 'small',
}
export interface TagProperties {
  id: string;
  type: TagTypes;
  onPress?: () => void;
  label: string;
  size: TagSize;
  style?: StyleProp<ViewStyle>;
  customContainerStyle?: StyleProp<ViewStyle>;
  customLabelStyle?: StyleProp<ViewStyle>;
}
export interface TagStyleProps {
  theme: Theme;
  size: TagSize.large | TagSize.small;
}
