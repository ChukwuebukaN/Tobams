import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../constants/theme";

const colors = Theme.colors;
const fonts = Theme.fonts;

const styles = StyleSheet.create({
  search: {
    height: hp("8.0%"),
    paddingHorizontal: wp("6.67%"),
    top: 0,
    right: 0,
    left: 0,
    position: "absolute",
    flexDirection: "column",
    zIndex: 10,
    ...Platform.select({
      ios: {
        marginTop: hp("13.56%"),
      },
      android: {
        marginTop: hp("6.6%"),
      },
    }),
    backgroundColor: colors.tobamsBackground,
  },
  input: {
    height: hp("5.69%"),
    backgroundColor: colors.tobamsWhite,
    padding: 0,
  },
  leftIcon: {
    top: hp("2.7%"),
    right: 0,
    left: wp("10.40%"),
    position: "absolute",
    alignSelf: "center",
    width: wp("1%"),
    zIndex: 20,
  },
  grid: {
    flex: 1,
    alignItems: "",
    flexDirection: "column",
    marginVertical: hp("0.7%"),
  },
  cardContainer: {
    width: wp("40.33%"),
    height: hp("27.3%"),
    backgroundColor: colors.tobamsWhite,
    borderRadius: 8,
    paddingHorizontal: wp("2.3%"),
    paddingVertical: hp("1.5%"),
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  productImage: {
    width: wp("80%"),
    height: hp("40s%"),
    resizeMode: "contain",
  },
  productImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  productDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("2.5%"),
    marginBottom: hp("1%"),
  },
  productName: {
    fontSize: RFValue(18),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsMedium,
  },
  productPrice: {
    fontSize: RFValue(16),
    color: colors.tobamsRed,
    fontFamily: fonts.PoppinsMedium,
  },
  productDescription: {
    fontSize: RFValue(12),
    color: colors.tobamsFontLightGrey,
    fontFamily: fonts.PoppinsRegular,
    marginBottom: hp("3%"),
  },
  productReadMore: {
    fontSize: RFValue(12),
    color: colors.tobamsRed,
    fontFamily: fonts.PoppinsRegular,
  },
  dropDownContainer: {
    height: hp("7.69%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: colors.tobamsBorderGrey,
    borderBottomColor: colors.tobamsBorderGrey,
    borderLeftColor: colors.tobamsBackground,
    borderRightColor: colors.tobamsBackground,
    borderWidth: 1,
  },
  dropDownContainer2: {
    height: hp("7.69%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: colors.tobamsBackground,
    borderBottomColor: colors.tobamsBorderGrey,
    borderLeftColor: colors.tobamsBackground,
    borderRightColor: colors.tobamsBackground,
    borderWidth: 1,
  },
  dropDownTitle: {
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsMedium,
  },
  counterContainer: {
    marginTop: hp("4%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  counterButton: {
    width: wp("12.80%"),
    height: hp("5.88%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.tobamsWhite,
    borderColor: colors.tobamsBorderGrey,
    borderRadius: 8,
    borderWidth: 1,
  },
  countNumber: {
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsSemiBold,
  },
  productButtons: {
    marginTop: hp("4%"),
  },
  buttonStyle: {
    width: wp("90%"),
    height: hp("5.88%"),
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: wp("1.62%"),
    borderRadius: 100,
    backgroundColor: colors.tobamsRed,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: RFValue(14),
    color: colors.tobamsWhite,
    fontFamily: fonts.PoppinsMedium,
  },
  buttonStyle2: {
    marginTop: hp("2%"),
    width: wp("90%"),
    height: hp("5.88%"),
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: wp("1.62%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.tobamsRed,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonText2: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: RFValue(14),
    color: colors.tobamsRed,
    fontFamily: fonts.PoppinsMedium,
  },
});

export default styles;
