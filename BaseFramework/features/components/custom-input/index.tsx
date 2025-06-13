import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {getFlagComponentStyle, getStyle} from './styles';
import {useNewTheme, translation, Theme} from 'react-core';
import {InputProperties} from './type';
import {CancelIcon} from '@app/assets/svg/cancel-icon';
import EyeOpenComponent from '@app/assets/svg/eye-open';
import {EyeCloseComponent} from '@app/assets/svg/eye-close';
import {ErrorText} from '../error-text';
import {HelperText} from '../helper-text';
import {Label} from '../label';

import {KeyboardTypes} from 'app/constants';
import {variants} from '../label/types';

const Input: FC<InputProperties> = (
  properties: InputProperties,
): JSX.Element => {
  const {
    id,
    disabled = false,
    placeholder = '',
    errorText,
    helperText,
    value = '',
    customKeyboardType = KeyboardTypes.Default,
    inverted = false,
    prefix,
    SuffixIcon,
    clearInputValue,
    secure = false,
    setValue,
    maximumLength,
    formatAmount = false,
    onPressOut,
    setTouchedProperty,
    onEndEditing,
    onFormikBlur,
    textInputProps,
    onKeyboardFocus,
    flag,
    currency,
    alwaysFocusOn = false,
    isIban = false,
    onFocus,
    setComponentFocus,
  } = properties;
  const [fieldActive, setFieldActive] = useState(!!value);
  const [secureValue, setSecureValue] = useState(!!secure);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [focused, setFocused] = useState(false);
  const position = new Animated.Value(
    fieldActive || value || alwaysFocusOn ? 1 : 0,
  );
  const isError = Boolean(errorText && errorText?.length > 0);
  const theme: Theme = useNewTheme();
  const inputRef = useRef<TextInput>(null);
  const {t} = translation.useTranslation();
  const styles = getStyle({
    position,
    fieldActive,
    theme,
    inverted,
    focused,
    disabled,
    isError,
  });

  useEffect(() => {
    // Move placeholder if the value is set from outside
    if ((value && !fieldActive) || alwaysFocusOn) {
      setFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 1,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onKeyboardFocus?.();
    setComponentFocus?.(true)
    onFocus?.(e)
    if (!fieldActive) {
      setFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    setComponentFocus?.(false)
    onFormikBlur?.(e);
    if (fieldActive && value === '' && !alwaysFocusOn) {
      setFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }
  };

  const changeMode = () => {
    setShowCloseIcon(!showCloseIcon);
    setSecureValue(!secureValue);
  };

  const iconColor = () => {
    if (errorText && errorText?.length > 0) {
      return inverted ? styles.invertedIcon.color : styles.errorIcon.color;
    }
    if (focused) {
      return inverted ? styles.invertedIcon.color : styles.focusedIcon.color;
    }
    if (disabled) {
      return styles.disabledIcon.color;
    } else {
      return inverted ? styles.invertedIcon.color : styles.defaultIcon.color;
    }
  };

  const clearInput = () => {
    setValue?.('');
    clearInputValue && clearInputValue();
  };

  const handleInputChange = (text: string) => {
    if (formatAmount) {
      const rawText = text.replace(/,/g, '');
      if (rawText === '') {
        setValue?.('');
        return;
      }
      const regex = /^\d+(\.\d{0,2})?$/;
      if (regex.test(rawText) || rawText === '') {
        const [integer, decimal] = rawText.split('.');
        const formattedInteger = new Intl.NumberFormat('en-US').format(
          Number(integer || ''),
        );
        let formattedText =
          decimal !== undefined
            ? `${formattedInteger}.${decimal}`
            : formattedInteger;
        if (formattedText.length > 13 && integer) {
          return;
        }
        if (formattedText.length > 12 && decimal) {
          return;
        }
        if (formattedText.length === 12 && formattedText.endsWith('.')) {
          formattedText = formattedText.slice(0, -1);
        }
        setValue?.(formattedText);
      }
    } else if (isIban) {
      let cleanedText = text.replace(/\s+/g, '').toUpperCase();
      let formattedIban = cleanedText.replace(/(.{4})/g, '$1 ').trim();
      setValue?.(formattedIban);
    } else {
      setValue?.(text);
      if (text.length === 1) {
        setTouchedProperty && setTouchedProperty();
      }
    }
  };

  return (
    <View key={id} style={styles.parentContainer}>
      <View
        style={[
          styles.container,
          focused && {...styles.focusedContainer},
          disabled && styles.disabledContainerStyle,
          isError ? styles.errorContainerStyle : null,
        ]}>
        <FlagComponent flag={flag} />
        <View style={styles.innerContainer}>
          <Animated.Text
            style={[
              styles.placeholder,
              fieldActive && styles.animatedPlacholderStyle,
              disabled && styles.disabledPlaceholderStyle,
            ]}
            numberOfLines={1}>
            {placeholder}
          </Animated.Text>
          <View style={styles.inputRow}>
            {prefix &&
              typeof prefix === 'string' &&
              (focused || value !== '') && (
                <Label
                  id="custom-input"
                  text={prefix}
                  variant={variants.bodyRegularM}
                  style={[
                    styles.prefixStyle,
                    {opacity: focused || value != '' ? 1 : 0},
                  ]}
                />
              )}
            {prefix && (
              <View
                style={[
                  styles.prefixSymbol,
                  {opacity: focused || value != '' ? 1 : 0},
                ]}>
                {prefix}
              </View>
            )}
            <CurrencyComponent currency={currency} />
            <TextInput
              ref={inputRef}
              contextMenuHidden={true}
              selectTextOnFocus={false}
              maxLength={maximumLength}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              value={value}
              onPressOut={onPressOut}
              editable={!disabled}
              keyboardType={customKeyboardType}
              // onChangeText={value => setValue?.(value)}
              onChangeText={handleInputChange}
              secureTextEntry={secureValue}
              autoCorrect={false}
              autoComplete="off"
              underlineColorAndroid="transparent"
              style={[styles.input, disabled && styles.disabledInputStyle]}
              onEndEditing={onEndEditing}
              {...textInputProps}
            />
          </View>
        </View>
        {focused && value !== '' && !disabled && (
          <Pressable style={styles.cancelContainer} onPress={clearInput}>
            <CancelIcon stroke={iconColor()} />
          </Pressable>
        )}
        {secure && (focused || value !== '') && (
          <Pressable
            style={styles.cancelContainer}
            onPress={disabled ? undefined : changeMode}>
            {showCloseIcon ? (
              <EyeCloseComponent stroke={iconColor()} />
            ) : (
              <EyeOpenComponent stroke={iconColor()} />
            )}
          </Pressable>
        )}
        {SuffixIcon && (
          <View style={styles.cancelContainer}>
            <SuffixIcon />
          </View>
        )}
      </View>
      {errorText && errorText?.length > 0 && (
        <ErrorText id="custom-input" errorText={t(errorText)} />
      )}
      {helperText && helperText?.length > 0 && (
        <HelperText id="custom-input" helperText={t(helperText)} />
      )}
    </View>
  );
};

const FlagComponent = ({flag}) => {
  const theme = useNewTheme();
  const styles = getFlagComponentStyle({theme});

  return flag ? <View style={styles.flagContainer} /> : null;
};

const CurrencyComponent = ({currency}) => {
  return currency ? <Text>{currency}</Text> : null;
};

export {Input};
