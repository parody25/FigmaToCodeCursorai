import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signIn}>
      <View style={[styles.homeIndicator, styles.viewPosition]}>
        <View style={[styles.homeIndicator1, styles.labelPosition]} />
      </View>
      <View style={[styles.content, styles.buttonSpaceBlock]}>
        <View style={styles.copy}>
          <View style={styles.createAnAccount}>
            <Text style={[styles.createAnAccount1, styles.signinTypo]}>
              Create an account
            </Text>
          </View>
          <Text style={[styles.enterYourEmail, styles.fieldTypo]}>
            Enter your email to sign up for this app
          </Text>
        </View>
        <View style={[styles.inputAndButton, styles.buttonLayout1]}>
          <TextInput
            style={[styles.field, styles.viewFlexBox]}
            placeholder="email@domain.com"
            secureTextEntry={true}
            placeholderTextColor="#828282"
          />
          <Pressable
            style={[styles.button, styles.viewFlexBox]}
            onPress={() => {}}
          >
            <Text style={[styles.primary, styles.googleTypo]}>
              Sign up with email
            </Text>
          </Pressable>
        </View>
        <View style={[styles.divider, styles.labelFlexBox]}>
          <View style={styles.dividerLayout} />
          <Text style={styles.orContinueWith}>or continue with</Text>
          <View style={[styles.divider2, styles.dividerLayout]} />
        </View>
        <Pressable
          style={[styles.button1, styles.buttonLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "List1" })
          }
        >
          <View style={[styles.label, styles.labelFlexBox]}>
            <Image
              style={styles.googleIcon}
              resizeMode="cover"
              source={require("../assets/google.png")}
            />
            <Text style={[styles.google, styles.googleTypo]}>Google</Text>
          </View>
        </Pressable>
        <Text style={styles.byClickingContinueContainer}>
          <Text
            style={styles.byClickingContinue}
          >{`By clicking continue, you agree to our `}</Text>
          <Text style={styles.termsOfService}>Terms of Service</Text>
          <Text style={styles.byClickingContinue}>{` and `}</Text>
          <Text style={styles.termsOfService}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileAppHeader: {
    backgroundColor: "#fff",
  },
  viewPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  labelPosition: {
    left: "50%",
    position: "absolute",
  },
  buttonSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  signinTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
  },
  fieldTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.presetsBody2,
  },
  buttonLayout1: {
    width: 327,
    marginTop: 24,
  },
  viewFlexBox: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  googleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  labelFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  dividerLayout: {
    height: 1,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
  },
  buttonLayout: {
    height: 40,
    borderRadius: Border.br_5xs,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    bottom: 0,
    height: 34,
  },
  createAnAccount1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
    fontWeight: "600",
  },
  createAnAccount: {
    width: 160,
    height: 27,
  },
  enterYourEmail: {
    lineHeight: 21,
    marginTop: 2,
    fontFamily: FontFamily.presetsBody2,
    textAlign: "center",
    color: Color.colorBlack,
  },
  copy: {
    alignItems: "center",
  },
  field: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    height: 40,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    fontFamily: FontFamily.presetsBody2,
    fontSize: FontSize.size_sm,
    backgroundColor: Color.colorWhite,
  },
  primary: {
    color: Color.colorWhite,
  },
  button: {
    marginTop: 16,
    height: 40,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    paddingVertical: 0,
    justifyContent: "center",
    backgroundColor: Color.colorBlack,
  },
  inputAndButton: {
    marginTop: 24,
  },
  orContinueWith: {
    marginLeft: 8,
    color: Color.colorGray_100,
    lineHeight: 20,
    fontFamily: FontFamily.presetsBody2,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  divider2: {
    marginLeft: 8,
  },
  divider: {
    marginTop: 24,
    width: 327,
    justifyContent: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  google: {
    marginLeft: 8,
    color: Color.colorBlack,
  },
  label: {
    marginTop: -10,
    marginLeft: -37.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  button1: {
    backgroundColor: "#eee",
    marginTop: 24,
    width: 327,
  },
  byClickingContinue: {
    color: Color.colorGray_100,
  },
  termsOfService: {
    color: Color.colorBlack,
  },
  byClickingContinueContainer: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    alignSelf: "stretch",
    marginTop: 24,
    fontFamily: FontFamily.presetsBody2,
    textAlign: "center",
  },
  content: {
    top: 240,
    paddingHorizontal: 24,
    alignItems: "center",
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  signIn: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default SignIn;
