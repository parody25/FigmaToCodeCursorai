import React from 'react';
import {View} from 'react-native';
import {translation, Theme, useNewTheme} from 'react-core';
import * as Components from '@app/components';
import * as Icons from '@app/assets/svg';
import {getStyles} from './styles';
import {LoginScreenProps} from './types';
import {
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
} from 'app/components/custom-button/types';
import {variants as LabelVariants} from 'app/components/label/types';
import {AuthRoutes} from 'app/constants';
import {linkVariant} from 'app/components/link/types';
import {useLogin} from '../../hooks/use-login';
import {toggleAppLanguage} from 'app/utils';
import {isRTLLanguage} from 'app/utils/language-utils';

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const theme: Theme = useNewTheme();
  const styles = getStyles({theme});
  const {t: translate} = translation.useTranslation();
  const {
    loginForm,
    handleOtpSubmit,
    resendOtpRequest,
    enableOtp,
    setEnableOtp,
    bottomSheetVisible,
    setBottomSheetVisible,
    authorizeRefetch,
    createChallenge,
    openAuthMenu,
    goToExploreMeem,
    goToOpenAccount,
    handleForgotPwd,
    otpError,
    setOtpError,
  } = useLogin();

  // TODO : add the meem arabic logo when the icon is provided
  const meemLogo = isRTLLanguage() ? (
    <Icons.MeemTextIcon height={16} width={64} />
  ) : (
    <Icons.MeemTextIcon height={16} width={64} />
  );
  return (
    <>
      <Components.OtpSheet
        enableScreen={enableOtp}
        onClose={() => {
          setEnableOtp(false);
          createChallenge();
          authorizeRefetch();
        }}
        onSubmitOtp={(otp: string) => {
          handleOtpSubmit(otp);
        }}
        title={translate('AuthenticationEnterOtpLblTitle')}
        subtitle={`${translate(
          'AuthenticationEnterOtpLblSubtitle',
        )} *******019`}
        onResendOtp={resendOtpRequest}
        error={otpError}
        clearError={() => setOtpError('')}
      />
      <Components.ScreenContainer
        id="vwauthentication_login"
        showStory={true}
        showStatusBar={true}
        showRightContent={true}
        showCenterContent={true}
        leftContent={<Icons.MoreHorizontalIcon />}
        onPressLeftContent={() => openAuthMenu()}
        centerContent={meemLogo}
        disableKeyboardAvoidingScrollView
        rightContent={
          <Components.Button
            id="authentication_login_btntranslate"
            variant={ButtonVariants.secondary}
            size={ButtonSizes.small}
            type={ButtonTypes.text}
            label={translate('AuthenticationLoginBtnTranslate')}
            onPress={toggleAppLanguage}
            inverted
          />
        }
        inverted={true}
        scrollViewStyle={styles.containerScrollStyle}>
        <View id="vwcontainer" style={styles.container}>
          <View id="vwbody" style={styles.body}>
            <Components.Label
              id="lblwelcome"
              style={styles.lblWelcomeStyle}
              variant={LabelVariants.titleXL}
              text={translate('AuthenticationLoginLblWelcome')}
            />
            <View id="vwcontent" style={styles.content}>
              <View id="vwinputs" style={styles.inputs}>
                <Components.Input
                  id="txtid"
                  placeholder={translate('AuthenticationLoginTxtIdPlc')}
                  inverted={true}
                  value={loginForm.values.nationalId}
                  setValue={loginForm.handleChange('nationalId')}
                  errorText={
                    loginForm.touched.nationalId
                      ? loginForm.errors.nationalId
                      : ''
                  }
                  maximumLength={20}
                  onFormikBlur={loginForm.handleBlur('nationalId')}
                />
                <Components.Input
                  id="txtpassword"
                  placeholder={translate('AuthenticationLoginTxtPasswordPlc')}
                  inverted={true}
                  secure
                  value={loginForm.values.password}
                  setValue={loginForm.handleChange('password')}
                  errorText={
                    loginForm.touched.password ? loginForm.errors.password : ''
                  }
                  maximumLength={20}
                  onFormikBlur={loginForm.handleBlur('password')}
                />
              </View>
              <Components.Link
                id="Link"
                linkText={translate('AuthenticationLoginBtnForgotPass')}
                inverted={true}
                variant={linkVariant.medium}
                onPress={handleForgotPwd}
              />
            </View>
          </View>
          <View id="vwStickyButtonBar1" style={styles.vwStickyButtonBar1}>
            <Components.Button
              id="btnexploremeem"
              variant={ButtonVariants.ghost}
              inverted={true}
              type={ButtonTypes.text}
              StartIcon={Icons.MeemLogo}
              onPress={goToExploreMeem}
              size={ButtonSizes.large}
              label={translate('AuthenticationLoginBtnExploreMeem')}
            />
            <Components.Button
              id="btnopenanaccount"
              variant={ButtonVariants.secondary}
              inverted={true}
              type={ButtonTypes.text}
              size={ButtonSizes.large}
              label={translate('AuthenticationLoginBtnOpenAccount')}
              onPress={goToOpenAccount}
            />
            <Components.Button
              id="btnlogin"
              variant={ButtonVariants.primary}
              inverted={true}
              type={ButtonTypes.text}
              size={ButtonSizes.large}
              disabled={!(loginForm.isValid && loginForm.dirty)}
              onPress={() => loginForm.handleSubmit()}
              label={translate('AuthenticationLoginBtnLogin')}
            />
          </View>
        </View>
        <Components.InfoBottomSheet
          id="btmForgotUsername"
          titleId="lblRmtitle"
          descriptionId="lblRmsubtitle"
          description="AuthenticationForgotCredentialsLblSubtitle"
          title="AuthenticationForgotCredentialsLblTitle"
          visible={bottomSheetVisible}
          labelStyle={{fontSize: 13}}
          primaryBtnLabel="AuthenticationForgotCredentialsBtnResetpassword"
          secondaryBtnLabel="AuthenticationForgotCredentialsBtnRecoverusername"
          closeButtonIcon={true}
          onClose={() => {
            setBottomSheetVisible(false);
          }}
          primaryBtnOnPress={() => {
            setBottomSheetVisible(false);
            navigation.navigate(AuthRoutes.PasswordRecovery);
          }}
          secondaryBtnOnPress={() => {
            setBottomSheetVisible(false);
            navigation.navigate(AuthRoutes.UsernameRecovery);
          }}
        />
      </Components.ScreenContainer>
    </>
  );
};

export {LoginScreen};
