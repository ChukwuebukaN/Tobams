import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../constants/theme";

const colors = Theme.colors;
const fonts = Theme.fonts;

const styles = StyleSheet.create({
  cardContainer: {
    height: hp("13.59%"),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("4%"),
  },
  productImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: wp("24.53%"),
    height: hp("11.10%"),
    resizeMode: "contain",
  },
  productDetailsContainer: {
    height: hp("10.59%"),
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: hp("0.7%"),
  },
  productName: {
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsMedium,
  },
  productPrice: {
    fontSize: RFValue(14),
    color: colors.tobamsRed,
    fontFamily: fonts.PoppinsMedium,
  },
  counterContainer: {
    marginVertical: hp("0.5%"),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  counterButton: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.tobamsWhite,
    borderRadius: 8,
  },
  countNumber: {
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsSemiBold,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("2.5%"),
    marginBottom: hp("2%"),
  },
  totalText: {
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsMedium,
  },
  itemText: {
    fontSize: RFValue(14),
    color: colors.tobamsFontGrey,
    fontFamily: fonts.PoppinsRegular,
  },
  checkoutButton: {
    marginTop: hp("4%"),
    ...Platform.select({
      ios: {
        marginBottom: hp("17%"),
      },
      android: {
        // marginBottom: hp("0.7%"),
      },
    }),
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
