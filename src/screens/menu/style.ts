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
    zIndex: 5,
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
    ...Platform.select({
      ios: {
        top: hp("3%"),
      },
      android: {
        top: hp("2.7%"),
      },
    }),
    right: 0,
    left: wp("10.40%"),
    position: "absolute",
    alignSelf: "center",
    width: wp("1%"),
    zIndex: 20,
  },
  productsContainer: {
    ...Platform.select({
      ios: {
        marginBottom: hp("10%"),
      },
      android: {
        // marginBottom: hp("0.7%"),
      },
    }),
  },
  grid: {
    flex: 1,
    alignItems: "",
    flexDirection: "column",
    ma: hp("0.7%"),
    marginVertical: hp("0.7%"),
  },
  cardContainer: {
    width: wp("40.33%"),
    height: hp("26.3%"),
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
    width: wp("24.07%"),
    height: hp("10.76%"),
    resizeMode: "contain",
  },
  productImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  productDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("0.7%"),
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
  productAddButton: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        marginTop: hp("1.5%"),
      },
      android: {
        marginTop: hp("1%"),
      },
    }),
  },
  buttonStyle: {
    // bottom: wp("35.40%"),
    // right: 0,
    // left: 0,
    // position: "absolute",
    width: wp("35.73%"),
    height: hp("4.73%"),
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: wp("1.62%"),
    // marginHorizontal: wp("4.62%"),
    // marginBottom: hp("2.90%"),
    borderRadius: 100,
    backgroundColor: colors.tobamsRed,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: RFValue(12),
    color: colors.tobamsWhite,
    fontFamily: fonts.PoppinsRegular,
  },
});

export default styles;
