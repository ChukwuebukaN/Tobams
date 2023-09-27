import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../constants/theme";
const colors = Theme.colors;
const fonts = Theme.fonts;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.tobamsBackground,
    height: hp("6.64%"),
    paddingHorizontal: wp("6.67%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: colors.tobamsBorderGrey,
    borderTopColor: colors.tobamsBackground,
    borderLeftColor: colors.tobamsBackground,
    borderRightColor: colors.tobamsBackground,
    borderWidth: 1,
    zIndex: 90,
  },
  headerArrowLeftIcon: {},
  headerArrowLeft: {
    width: wp("9.60%"),
    height: hp("4.5%"),
    backgroundColor: colors.tobamsWhite,
    borderColor: colors.tobamsBorderGrey,
    borderRadius: 8,
    borderWidth: 1,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerArrowLeft2: {
    paddingHorizontal: wp("1%"),
    paddingVertical: hp("1%"),
    width: wp("10%"),
    height: hp("2.84%"),
  },
  headerTitleText: {
    textAlign: "center",
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsMedium,
  },
  body: {
    paddingHorizontal: wp("6.67%"),
    backgroundColor: colors.tobamsBackground,
    flexGrow: 1,
    paddingTop: hp("1.5%"),
    ...Platform.select({
      ios: {
        paddingBottom: hp("10.29%"),
      },
      android: {
        paddingBottom: hp("8.29%"),
      },
    }),
  },
});

export default styles;
