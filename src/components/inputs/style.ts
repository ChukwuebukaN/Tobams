import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../constants/theme";
const colors = Theme.colors;
const fonts = Theme.fonts;

const styles = StyleSheet.create({
  inputLabelAndIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputLabelText: {
    textAlign: "left",
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsSemiBold,
  },
  input: {
    fontSize: RFValue(14),
    color: colors.tobamsFontBlack,
    fontFamily: fonts.PoppinsRegular,
    borderColor: colors.tobamsBorderGrey,
    borderWidth: 1,
  },
});

export default styles;
