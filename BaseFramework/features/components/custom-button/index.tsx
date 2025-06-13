import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {getStyles} from './styles';
import {useNewTheme} from 'react-core';
import {
  ButtonProperties,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
} from './types';
import {Label} from '../label';
import {variants as LabelVariants} from '../label/types';
import {isRTLLanguage} from 'app/utils/language-utils';

const Button: FC<ButtonProperties> = props => {
  const {
    id,
    label = '',
    variant = ButtonVariants.primary,
    size = ButtonSizes.large,
    type = ButtonTypes.text,
    disabled = false,
    Icon,
    StartIcon,
    EndIcon,
    inverted = false,
    onPress,
    style,
    labelStyle,
    labelVariants,
    isSubmitButton,
  } = props;

  const numberOfLines = isRTLLanguage() ? 2 : 1;
  const [focused, setFocused] = useState(false);
  const theme = useNewTheme();
  const styles = getStyles({theme, size, inverted, isSubmitButton});
  const iconColor = () => {
    if (focused === true) {
      return styles[`${variant}PressedIcon`].color;
    }
    if (disabled === true) {
      return styles[`${variant}DisabledIcon`].color;
    }
    return styles[`${variant}Icon`].color;
  };
  return (
    <TouchableOpacity
      key={id}
      onPressIn={() => setFocused(true)}
      onPressOut={() => setFocused(false)}
      activeOpacity={1}
      style={[
        {...styles.buttonContainer},
        {...styles[`${variant}Container`]},
        type === ButtonTypes.onlyIcon && {...styles.iconOnlyStyle},
        disabled && {...styles[`${variant}Disabled`]},
        focused && {...styles[`${variant}PressedContainer`]},
        style,
      ]}
      disabled={disabled}
      onPress={onPress}>
      {type === ButtonTypes.text && (
        <>
          {StartIcon && (
            <StartIcon color={iconColor()} width={20} height={20} />
          )}

          <Label
            id="custom-button"
            numberOfLines={numberOfLines}
            text={label}
            variant={labelVariants ?? LabelVariants.bodySemiBoldM}
            style={[
              {...styles.label},
              {...styles[`${variant}Label`]},
              focused && {...styles[`${variant}PressedLabel`]},
              disabled && {...styles[`${variant}DisabledLabel`]},
              labelStyle,
            ]}
          />

          {EndIcon && <EndIcon color={iconColor()} />}
        </>
      )}

      {type === ButtonTypes.onlyIcon && Icon !== undefined ? (
        <Icon color={iconColor()} />
      ) : null}
    </TouchableOpacity>
  );
};

export {Button};
export type {ButtonProperties};
