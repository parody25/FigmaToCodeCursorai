import {KeyboardTypes} from 'app/constants';
import {Theme} from 'react-core';
import { useRef } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

export type InputProperties = {
  id: string;
  disabled?: boolean;
  placeholder?: string;
  errorText?: string | false | undefined;
  helperText?: string;
  value?: string;
  setValue?: (value: string) => void;
  clearInputValue?: () => void;
  inverted?: boolean;
  customKeyboardType?: KeyboardTypes;
  prefix?: React.ReactNode | string;
  SuffixIcon?: any;
  secure?: boolean;
  maximumLength?: number;
  formatAmount?: boolean;
  onPressOut?: () => void;
  setTouchedProperty?: () => void;
  onEndEditing?: () => void;
  onFormikBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  textInputProps?: TextInputProps;
  onKeyboardFocus?: () => void;
  alwaysFocusOn?: boolean;
  isIban?: boolean;
  setComponentFocus?:(status:boolean)=>void,
  flag?:string,
  currency?:string
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
};

export type CustomInputStyleParams = {
  position: Animated.Value;
  fieldActive: boolean;
  theme: Theme;
  inverted: boolean;
  focused: boolean;
  disabled: boolean;
  isError: boolean;
};
