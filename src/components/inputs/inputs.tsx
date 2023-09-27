import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import styles from "./style";

const Inputs = ({
  inputLabelTitle,
  inputPlaceholder,
  inputMultiline,
  inputNumberOfLines,
  InputIcon,
  IconActive,
  IconInactive,
  inputSecureTextEntry,
  handleShowIcon,
  inputStyle,
  inputLeftIconStyle,
  inputReturnKeyType,
  inputAutoFocus,
  inputCaretHidden,
  inputAutoComplete,
  inputKeyboardType,
  inputTextContentType,
  inputMaxLength,
  inputMarginTop,
  inputMarginBottom,
  inputBorderRadius,
  inputPaddingHorizontal,
  inputValue,
  inputOnChangeText,
  inputRef,
  inputOnSubmitEditing,
  inputOnContentSizeChange,
  inputAccessoryViewID,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputLabelAndIconContainer}>
        {inputLabelTitle && <Text style={styles.inputLabelText}>{inputLabelTitle}</Text>}
        {inputSecureTextEntry ? (
          <TouchableOpacity onPress={handleShowIcon}>{IconInactive}</TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleShowIcon}>{IconActive}</TouchableOpacity>
        )}
      </View>
      {InputIcon && <TouchableOpacity style={inputLeftIconStyle}>{InputIcon}</TouchableOpacity>}
      <TextInput
        style={[
          inputStyle,
          styles.input,
          inputMarginTop ? { marginTop: inputMarginTop } : { marginTop: hp("1.36%") },
          inputMarginBottom ? { marginBottom: inputMarginBottom } : { marginBottom: hp("3%") },
          inputBorderRadius ? { borderRadius: inputBorderRadius } : { borderRadius: 8 },
          inputPaddingHorizontal
            ? { paddingHorizontal: wp(inputPaddingHorizontal) }
            : { paddingHorizontal: wp("2.84%") },
        ]}
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
        placeholder={inputPlaceholder}
        multiline={inputMultiline}
        numberOfLines={inputNumberOfLines}
        secureTextEntry={inputSecureTextEntry}
        returnKeyType={inputReturnKeyType}
        autoFocus={inputAutoFocus}
        caretHidden={inputCaretHidden}
        autoComplete={inputAutoComplete}
        keyboardType={inputKeyboardType}
        textContentType={inputTextContentType}
        maxLength={inputMaxLength}
        value={inputValue}
        onChangeText={inputOnChangeText}
        ref={inputRef}
        onSubmitEditing={inputOnSubmitEditing}
        onContentSizeChange={inputOnContentSizeChange}
        inputAccessoryViewID={inputAccessoryViewID}
      />
    </View>
  );
};

export default Inputs;
