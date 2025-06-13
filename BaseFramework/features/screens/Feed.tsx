import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Feed = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.feed}>
      <View style={styles.feed1}>
        <View style={styles.post}>
          <Image
            style={styles.avatarIcon}
            resizeMode="cover"
            source={require("../assets/avatar1.png")}
          />
          <View style={styles.postContent}>
            <View style={styles.postHeader}>
              <View style={styles.metaData}>
                <View style={styles.nameGroup}>
                  <Text
                    style={styles.helena}
                    numberOfLines={1}
                  >{`Helena `}</Text>
                  <Text
                    style={[styles.inGroupName, styles.minAgoTypo]}
                    numberOfLines={1}
                  >
                    in Group name
                  </Text>
                </View>
                <Text
                  style={[styles.minAgo, styles.minAgoTypo]}
                  numberOfLines={1}
                >
                  3 min ago
                </Text>
              </View>
              <Image
                style={[styles.iconmore, styles.iconmoreLayout]}
                resizeMode="cover"
                source={require("../assets/iconmore1.png")}
              />
            </View>
            <ImageBackground
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image.png")}
            />
            <View style={styles.comment}>
              <Text style={styles.postDescription} numberOfLines={1}>
                Post description
              </Text>
              <View style={styles.postActions}>
                <View style={styles.likes}>
                  <Image
                    style={styles.heartIcon}
                    resizeMode="cover"
                    source={require("../assets/heart.png")}
                  />
                  <Text
                    style={[styles.likes1, styles.likes1Typo]}
                    numberOfLines={1}
                  >
                    21 likes
                  </Text>
                </View>
                <View style={styles.comments}>
                  <Image
                    style={styles.heartIcon}
                    resizeMode="cover"
                    source={require("../assets/messagesquare.png")}
                  />
                  <Text
                    style={[styles.likes1, styles.likes1Typo]}
                    numberOfLines={1}
                  >
                    4 comments
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.buttonCompact, styles.viewSpaceBlock]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.goBack, styles.likes1Typo]}>Go Back</Text>
      </Pressable>
      <View style={styles.tabBar}>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileAppHeader: {
    backgroundColor: "#ed8f8f",
  },
  minAgoTypo: {
    fontFamily: FontFamily.presetsBody2,
    textAlign: "left",
    overflow: "hidden",
  },
  iconmoreLayout: {
    height: 24,
    width: 24,
  },
  likes1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  tabItemPosition: {
    height: 49,
    width: 76,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  tabFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  homeLayout: {
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
  },
  avatarIcon: {
    top: 4,
    borderRadius: Border.br_981xl,
    width: 32,
    height: 32,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  helena: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  inGroupName: {
    width: 97,
    marginLeft: 4,
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.presetsBody2,
  },
  nameGroup: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  minAgo: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorGray_100,
    alignSelf: "stretch",
  },
  metaData: {
    width: 259,
    zIndex: 0,
  },
  iconmore: {
    top: 8,
    left: 275,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  postHeader: {
    alignItems: "center",
    flexDirection: "row",
    width: 299,
  },
  imageIcon: {
    borderRadius: Border.br_9xs,
    height: 299,
    marginTop: 12,
    width: 299,
    overflow: "hidden",
  },
  postDescription: {
    lineHeight: 20,
    fontFamily: FontFamily.presetsBody2,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  heartIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  likes1: {
    marginLeft: 8,
    color: Color.colorBlack,
    overflow: "hidden",
  },
  likes: {
    alignItems: "center",
    flexDirection: "row",
  },
  comments: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  postActions: {
    marginTop: 12,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  comment: {
    justifyContent: "center",
    marginTop: 12,
  },
  postContent: {
    left: 44,
    top: 0,
    position: "absolute",
  },
  post: {
    width: 343,
    height: 414,
    overflow: "hidden",
  },
  feed1: {
    top: 100,
    left: 17,
    position: "absolute",
  },
  goBack: {
    color: Color.colorWhite,
  },
  buttonCompact: {
    top: 604,
    left: 33,
    borderRadius: Border.br_5xs,
    width: 327,
    height: 40,
    paddingVertical: 0,
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    bottom: 0,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -65.5,
    bottom: 8,
  },
  tabBar: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 375,
    height: 83,
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  feed: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Feed;
