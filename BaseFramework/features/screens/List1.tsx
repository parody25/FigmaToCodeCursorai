import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

const List1 = () => {
  return (
    <View style={styles.list}>
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.homeLayout]} />
      </View>
      <ScrollView
        style={styles.list1}
        horizontal={false}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.listScrollViewContent}
      >
        <View style={styles.header}>
          <Text style={[styles.task, styles.taskLayout]}>Task</Text>
          <Text
            style={[styles.title, styles.titleSpaceBlock]}
            numberOfLines={1}
          >
            Title
          </Text>
          <Text style={[styles.project, styles.pillLayout]} numberOfLines={1}>
            Project
          </Text>
          <Text style={[styles.priority, styles.pill1Layout]} numberOfLines={1}>
            Priority
          </Text>
          <Text style={[styles.date, styles.dateLayout]} numberOfLines={1}>
            Date
          </Text>
          <Text style={[styles.owner, styles.ownerLayout]} numberOfLines={1}>
            Owner
          </Text>
        </View>
        <View style={styles.task1}>
          <Text style={[styles.fig121, styles.taskLayout]}>FIG-121</Text>
          <Text
            style={[styles.writeBlogPost, styles.labelClr]}
            numberOfLines={1}
          >
            Write blog post for demo day
          </Text>
          <View style={[styles.pill, styles.pillLayout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Acme GTM</Text>
            </View>
          </View>
          <View style={[styles.pill1, styles.pill1Layout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>High</Text>
            </View>
          </View>
          <Text style={[styles.dec5, styles.dateLayout]}>Dec 5</Text>
          <View style={[styles.avatar, styles.ownerLayout]}>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Image
            style={[styles.dotIcon, styles.titleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
        </View>
        <View style={styles.task1}>
          <Text style={[styles.fig121, styles.taskLayout]}>FIG-122</Text>
          <Text
            style={[styles.writeBlogPost, styles.labelClr]}
            numberOfLines={1}
          >
            Publish blog page
          </Text>
          <View style={[styles.pill, styles.pillLayout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Website launch
              </Text>
            </View>
          </View>
          <View style={[styles.pill1, styles.pill1Layout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Low</Text>
            </View>
          </View>
          <Text style={[styles.dec5, styles.dateLayout]}>Dec 5</Text>
          <View style={[styles.avatar, styles.ownerLayout]}>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Image
            style={[styles.dotIcon, styles.titleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
        </View>
        <View style={styles.task1}>
          <Text style={[styles.fig121, styles.taskLayout]}>FIG-123</Text>
          <Text
            style={[styles.writeBlogPost, styles.labelClr]}
            numberOfLines={1}
          >
            Add gradients to design system
          </Text>
          <View style={[styles.pill, styles.pillLayout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Design backlog
              </Text>
            </View>
          </View>
          <View style={[styles.pill1, styles.pill1Layout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Medium</Text>
            </View>
          </View>
          <Text style={[styles.dec5, styles.dateLayout]}>Dec 5</Text>
          <View style={[styles.avatar, styles.ownerLayout]}>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Image
            style={[styles.dotIcon, styles.titleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
        </View>
        <View style={styles.task1}>
          <Text style={[styles.fig121, styles.taskLayout]}>FIG-124</Text>
          <Text
            style={[styles.writeBlogPost, styles.labelClr]}
            numberOfLines={1}
          >
            Responsive behavior doesn’t work on Android
          </Text>
          <View style={[styles.pill, styles.pillLayout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Bug fixes</Text>
            </View>
          </View>
          <View style={[styles.pill1, styles.pill1Layout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Medium</Text>
            </View>
          </View>
          <Text style={[styles.dec5, styles.dateLayout]}>Dec 5</Text>
          <View style={[styles.avatar, styles.ownerLayout]}>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Image
            style={[styles.dotIcon, styles.titleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
        </View>
        <View style={styles.task1}>
          <Text style={[styles.fig121, styles.taskLayout]}>FIG-125</Text>
          <Text
            style={[styles.writeBlogPost, styles.labelClr]}
            numberOfLines={1}
          >
            Confirmation states not rendering properly
          </Text>
          <View style={[styles.pill, styles.pillLayout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Bug fixes</Text>
            </View>
          </View>
          <View style={[styles.pill1, styles.pill1Layout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Medium</Text>
            </View>
          </View>
          <Text style={[styles.dec5, styles.dateLayout]}>Dec 5</Text>
          <View style={[styles.avatar, styles.ownerLayout]}>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Image
            style={[styles.dotIcon, styles.titleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
        </View>
        <View style={styles.task1}>
          <Text style={[styles.fig121, styles.taskLayout]}>FIG-126</Text>
          <Text
            style={[styles.writeBlogPost, styles.labelClr]}
            numberOfLines={1}
          >
            Revise copy on the About page
          </Text>
          <View style={[styles.pill, styles.pillLayout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Website launch
              </Text>
            </View>
          </View>
          <View style={[styles.pill1, styles.pill1Layout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Low</Text>
            </View>
          </View>
          <Text style={[styles.dec5, styles.dateLayout]}>Dec 5</Text>
          <View style={[styles.avatar, styles.ownerLayout]}>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Image
            style={[styles.dotIcon, styles.titleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
        </View>
        <View style={styles.task1}>
          <Text style={[styles.fig121, styles.taskLayout]}>FIG-127</Text>
          <Text
            style={[styles.writeBlogPost, styles.labelClr]}
            numberOfLines={1}
          >
            Text wrapping is awkward on older iPhones
          </Text>
          <View style={[styles.pill, styles.pillLayout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Bug fixes</Text>
            </View>
          </View>
          <View style={[styles.pill1, styles.pill1Layout]}>
            <View style={[styles.tag, styles.tagFlexBox]}>
              <Text style={[styles.label, styles.labelTypo]}>Low</Text>
            </View>
          </View>
          <Text style={[styles.dec5, styles.dateLayout]}>Dec 5</Text>
          <View style={[styles.avatar, styles.ownerLayout]}>
            <Image
              style={[styles.avatarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Image
            style={[styles.dotIcon, styles.titleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
        </View>
      </ScrollView>
      <View style={[styles.tabBar, styles.viewPosition]}>
        <View style={[styles.homeIndicator2, styles.homeLayout]}>
          <View style={[styles.homeIndicator3, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.iconfilter, styles.containerLayout]}>
        <View style={[styles.container, styles.containerLayout]} />
        <Image
          style={styles.filterIcon}
          resizeMode="cover"
          source={require("../assets/filter.png")}
        />
      </View>
      <View style={[styles.search, styles.tagBorder]}>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <Text style={styles.label14} numberOfLines={1}>
          Search
        </Text>
      </View>
      <Image
        style={styles.listChild}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <View style={styles.createAnAccount}>
        <Text style={[styles.createAnAccount1, styles.tabFlexBox]}>
          Create an account
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.viewSpaceBlock]}
        onPress={() => {}}
      >
        <Text style={[styles.primary, styles.taskTypo]}>
          Sign up with email
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mobileAppHeader: {
    backgroundColor: "#ed8f8f",
  },
  homeLayout: {
    height: 5,
    width: 134,
  },
  taskLayout: {
    width: 70,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  titleSpaceBlock: {
    marginLeft: 20,
    overflow: "hidden",
  },
  pillLayout: {
    width: 120,
    marginLeft: 20,
  },
  pill1Layout: {
    width: 64,
    marginLeft: 20,
  },
  dateLayout: {
    width: 48,
    marginLeft: 20,
    color: Color.colorGray_100,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  ownerLayout: {
    width: 84,
    marginLeft: 20,
  },
  labelClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  tagFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  labelTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  iconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  viewPosition: {
    right: 0,
    left: 0,
  },
  tabsSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  tabFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  containerLayout: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  tagBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  taskTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -187.5,
    width: 375,
    height: 34,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  task: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  title: {
    width: 200,
    marginLeft: 20,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  project: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  priority: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  date: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    overflow: "hidden",
  },
  owner: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  header: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  fig121: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.presetsBody2,
  },
  writeBlogPost: {
    marginLeft: 20,
    overflow: "hidden",
    width: 200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  label: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.colorBlack,
    textAlign: "left",
  },
  tag: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  pill: {
    height: 28,
  },
  pill1: {
    height: 28,
  },
  dec5: {
    textAlign: "right",
    fontFamily: FontFamily.presetsBody2,
  },
  avatarIcon: {
    marginTop: -14,
    marginLeft: -14,
    borderRadius: Border.br_981xl,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  avatar: {
    height: 28,
  },
  dotIcon: {
    maxWidth: "100%",
    height: 24,
    flex: 1,
  },
  task1: {
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  list1: {
    top: 170,
    right: 16,
    left: 16,
    position: "absolute",
    flex: 1,
  },
  homeIndicator3: {
    marginLeft: -67,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
    bottom: 0,
  },
  homeIndicator2: {
    marginTop: 21,
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
    right: 0,
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  container: {
    backgroundColor: "#f4f4f4",
    height: 40,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  filterIcon: {
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconfilter: {
    left: 319,
    height: 40,
    top: 104,
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  label14: {
    fontSize: FontSize.presetsBody2_size,
    lineHeight: 24,
    marginLeft: 12,
    fontFamily: FontFamily.presetsBody2,
    textAlign: "left",
    color: Color.colorGray_100,
    overflow: "hidden",
    flex: 1,
  },
  search: {
    width: 295,
    paddingLeft: 12,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    height: 40,
    top: 104,
    borderRadius: Border.br_5xs,
    left: 16,
  },
  listChild: {
    top: 33,
    left: 140,
    maxHeight: "100%",
    width: 100,
    position: "absolute",
  },
  createAnAccount1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  createAnAccount: {
    top: 67,
    left: 19,
    width: 160,
    height: 27,
    position: "absolute",
  },
  primary: {
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  button: {
    top: 412,
    left: 28,
    width: 327,
    height: 40,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorBlack,
  },
  list: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default List1;
