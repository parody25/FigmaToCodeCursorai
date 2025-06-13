import { ScaledSheet } from 'react-native-size-matters';
import { themeType, Typography } from '@app/utils';

export const getStyle = (theme) => {
  return ScaledSheet.create({
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      paddingTop: 5,
      height: 60,
    },
    tabBarLabelStyle: {
      fontSize: '13@ms',
      fontFamily: Typography.fonts.semiBold,
      marginBottom: '5@ms',
    },
    iconStyle: {
      height: '20@ms',
      width: '20@ms',
    },
    addButtonIconStyle: {
      fontSize: '28@ms',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginTop: '7@ms',
      color: theme.colors.black,
    },
    activeTabBarStyle: {
      color: theme.colors.blue,
      fontSize: '13@ms',
      fontFamily: Typography.fonts.semiBold,
      marginBottom: '5@ms',
    },
  });
};
