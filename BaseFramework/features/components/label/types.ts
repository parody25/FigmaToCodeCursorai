import {Theme} from 'react-core';
import {StyleProp, TextProps, TextStyle} from 'react-native';

export enum variants {
  titleXL = 'titleXL',
  titleL = 'titleL',
  titleM = 'titleM',
  titleS = 'titleS',
  titleXS = 'titleXS',
  bodySemiBoldL = 'bodySemiBoldL',
  bodyMediumL = 'bodyMediumL',
  bodyRegularL = 'bodyRegularL',
  bodySemiBoldM = 'bodySemiBoldM',
  bodyMediumM = 'bodyMediumM',
  bodyRegularM = 'bodyRegularM',
  bodySemiBoldS = 'bodySemiBoldS',
  bodyMediumS = 'bodyMediumS',
  bodyRegularS = 'bodyRegularS',
  bodySemiboldXS = 'bodySemiboldXS',
  bodyMediumXS = 'bodyMediumXS',
  bodyRegularXS = 'bodyRegularXS',
}
export interface LabelProperties {
  id: string;
  text: string;
  variant?: variants;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  textProps?: TextProps;
}
export interface LabelStyleProperties {
  theme: Theme;
}
