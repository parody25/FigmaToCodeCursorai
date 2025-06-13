import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {Label} from '../label';
import {getStyle} from './styles';
import {LinkProps, linkVariant} from './types';
import {useNewTheme} from 'react-core';
import {variants} from '../label/types';

const Link = (properties: LinkProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const theme = useNewTheme();

  const {
    id,
    linkText,
    variant = linkVariant.medium,
    inverted,
    icon,
    onPress,
    disabled,
    customStyle,
    customLabelStyle,
  } = properties;
  const styles = getStyle({theme});
  return (
    <Pressable
      key={id}
      onPress={onPress}
      onPressIn={() => setIsActive(!isActive)}
      onPressOut={() => setIsActive(!isActive)}
      style={[
        styles.container,

        variant !== linkVariant.large
          ? styles.largeAndMidumVariantGap
          : styles.smallVariantGap,
        customStyle,
      ]}
      disabled={disabled}>
      {icon && (
        <View
          style={[
            variant === linkVariant.small
              ? styles.smallIconViewStyle
              : styles.iconViewStyle,
          ]}>
          {icon}
        </View>
      )}

      <Label
        id="link"
        variant={variants.bodyRegularM}
        style={[
          inverted ? styles.baseInvertedTextStyle : styles.baseTextStyle,
          variant === linkVariant.large && styles.largeSizeStyle,
          variant === linkVariant.small && styles.smallSizeStyle,
          disabled && styles.disabledStyle,
          isActive && styles.activeStyle,
          customLabelStyle,
        ]}
        text={linkText}
      />
    </Pressable>
  );
};

export {Link};
