import React, {FC, useEffect, useRef, useCallback, useMemo} from 'react';
import {Pressable, View, Animated} from 'react-native';
import {translation, useNewTheme} from 'react-core';
import {getStyle} from './styles';
import {DropdownProps} from './types';
import {SvgArrowIcon} from '@app/assets/svg/arrow-icon';
import {arrowType, handleAnimation, animatedDuration} from './dropdown-utility';
import {ErrorText} from '../error-text';
import {HelperText} from '../helper-text';
import {Label} from '../label';
import {variants} from '../label/types';

const Dropdown: FC<DropdownProps> = (properties: DropdownProps) => {
  const {
    id,
    placeholder,
    inputText,
    helperText,
    errorText,
    disabled,
    selectFlag,
    BottomSheet,
    containerStyle,
    onPress,
  } = properties;

  const isDropdownFocused = useMemo(
    () => ({
      id: id,
      value: inputText,
      active: false,
    }),
    [id, inputText],
  );
  const theme = useNewTheme();
  const styles = getStyle({theme});
  const {t} = translation.useTranslation();
  const placeholderPosition = useRef(new Animated.Value(25)).current;
  const placeholderFontSize = useRef(new Animated.Value(16)).current;
  const arrowRotation = useRef(new Animated.Value(0)).current;
  const placeholderTransformPosition = placeholderPosition.interpolate({
    inputRange: [0, 50],
    outputRange: [25, 0],
  });
  const placeholderTransformFontSize = placeholderFontSize.interpolate({
    inputRange: [0, 16],
    outputRange: [14, 16],
  });
  const animatedPlaceholderStyle = {
    transform: [
      {
        translateY: placeholderTransformPosition,
      },
    ],
    fontSize: placeholderTransformFontSize,
  };
  const animatedArrowStyle = {
    transform: [
      {
        rotate: arrowRotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['-180deg', '0deg'],
        }),
      },
    ],
  };

  const inputTextValueAnimation = useCallback(() => {
    Animated.parallel([
      handleAnimation({
        AnimatedValue: placeholderFontSize,
        toValue: inputText ? 0 : 1,
        duration: animatedDuration,
        useNativeDriver: true,
      }),
      handleAnimation({
        AnimatedValue: placeholderPosition,
        toValue: inputText ? 50 : 25,
        duration: animatedDuration,
        useNativeDriver: true,
      }),
      handleAnimation({
        AnimatedValue: arrowRotation,
        toValue: inputText ? 1 : 0,
        duration: animatedDuration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [placeholderFontSize, placeholderPosition, inputText, arrowRotation]);

  useEffect(() => {
    if (inputText || !inputText) {
      inputTextValueAnimation();
    }
    if (isDropdownFocused.value !== '') {
      isDropdownFocused.active = false;
    }
    isDropdownFocused.value = inputText;
  }, [
    inputTextValueAnimation,
    inputText,
    isDropdownFocused,
    isDropdownFocused.value,
    isDropdownFocused.active,
  ]);
  return (
    <View key={id} style={styles.viewContainer}>
      <Pressable
        disabled={disabled}
        onPress={() => {
          onPress?.();
          isDropdownFocused.value = '';
          isDropdownFocused.active = !isDropdownFocused.active;
        }}
        style={() => [
          styles.pressableStyle,
          disabled && styles.pressableDisabledState,
          isDropdownFocused.active && styles.pressableActiveState,
          errorText?.length !== undefined && styles.pressableErrorState,
          containerStyle,
        ]}>
        <View style={styles.flagAndTextContainer}>
          {selectFlag ? (
            <View style={styles.flagViewStyle}>{selectFlag}</View>
          ) : null}
          <View style={styles.textViewStyle}>
            <Animated.Text
              style={[styles.placeholderStyle, animatedPlaceholderStyle]}>
              {placeholder}
            </Animated.Text>

            <Label
              id="dropdown"
              text={inputText ?? ''}
              style={styles.inputTextStyle}
              variant={variants.bodyRegularM}
              numberOfLines={1}
            />
          </View>
        </View>

        <View style={styles.imageViewStyle}>
          <Animated.View style={[styles.imageStyle, animatedArrowStyle]}>
            <SvgArrowIcon
              stroke={arrowType({
                isDropdownFocused: isDropdownFocused.active,
                errorText: errorText,
                disabled: disabled,
                theme: theme,
              })}
            />
          </Animated.View>
        </View>
      </Pressable>
      {errorText || helperText ? (
        <View style={styles.textHelperViewStyle}>
          {(errorText && (
            <ErrorText id="dropdown" errorText={t(errorText)} />
          )) ||
            (helperText && (
              <HelperText id="dropdown" helperText={helperText} />
            ))}
        </View>
      ) : null}
      {BottomSheet}
    </View>
  );
};

export {Dropdown};
