import {FC} from 'react';
import {IconProps} from 'app/constants';
import {Theme} from 'react-core';
import {ViewStyle, TextStyle} from 'react-native';
import {variants as LabelVariants} from '../label/types';
export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
}

export enum ButtonTypes {
  text = 'text',
  onlyIcon = 'only-icon',
}

export enum ButtonSizes {
  large = 'large',
  small = 'small',
}

export interface ButtonProperties {
  id: string;
  variant?: ButtonVariants;
  type?: ButtonTypes;
  size?: ButtonSizes;
  label?: string;
  disabled?: boolean;
  Icon?: FC<IconProps>;
  StartIcon?: FC<IconProps>;
  EndIcon?: FC<IconProps>;
  inverted?: boolean;
  onPress?: () => void;
  style?: object;
  labelStyle?: TextStyle;
  labelVariants?: LabelVariants;
  isSubmitButton?: boolean;
}

export interface ButtonStyleProperties {
  inverted: boolean;
  theme: Theme;
  size: ButtonSizes.large | ButtonSizes.small;
  isSubmitButton?: boolean;
}
