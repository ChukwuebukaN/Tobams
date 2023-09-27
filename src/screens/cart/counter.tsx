import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import MinusIcon from "../../assets/svg/minus-icon.svg";
import MinusIconActive from "../../assets/svg/minus-icon-active.svg";
import PlusIconActive from "../../assets/svg/plus-icon-active.svg";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
          style={styles.counterButton}
        >
          {count < 2 ? <MinusIcon /> : <MinusIconActive />}
        </TouchableOpacity>

        <View>
          <Text style={styles.countNumber}>{count}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={styles.counterButton}
        >
          <PlusIconActive />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Counter;
