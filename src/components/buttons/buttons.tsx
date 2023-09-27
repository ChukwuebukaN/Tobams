import React from "react";
import { ActivityIndicator, Platform, Text, TouchableOpacity, View } from "react-native";
import Theme from "../../constants/theme";

function Buttons({
  styling,
  text,
  textStyling,
  text2,
  textStyling2,
  icon,
  buttonPress,
  buttonDisabled,
  loadingColor,
  isLoading,
  isSuccess,
  errorMessage,
  errorViewStyling,
  errorTextStyling,
}) {
  return (
    <View>
      {errorMessage && (
        <View style={errorViewStyling}>
          <Text style={errorTextStyling}>* {errorMessage}</Text>
        </View>
      )}
      <TouchableOpacity
        disabled={buttonDisabled}
        onPress={() => {
          buttonPress?.();
        }}
        style={[
          styling,
          buttonDisabled && { backgroundColor: Theme.colors.closerGrey },
          isSuccess && { backgroundColor: Theme.colors.closerGreen },
        ]}
        s
      >
        {icon && icon}
        {text && (
          <Text style={textStyling}>
            {isLoading ? (
              <View
                style={{
                  ...Platform.select({
                    ios: {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "100%",
                    },
                  }),
                }}
              >
                <ActivityIndicator size="large" color={loadingColor ? { loadingColor } : "#FFFFFF"} />
              </View>
            ) : (
              <>{isSuccess ? "Success!" : text}</>
            )}
          </Text>
        )}
        {text2 && <Text style={textStyling2}>{text2}</Text>}
      </TouchableOpacity>
    </View>
  );
}

export default Buttons;
