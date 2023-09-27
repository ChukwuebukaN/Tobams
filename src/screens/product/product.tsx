/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppLayout from "../../components/app-layout/app-layout";
import Images from "../../assets/image";
import styles from "./style";
import Dots from "../../assets/svg/dots.svg";
import ArrowLeftIcon from "../../assets/svg/arrow-left-icon.svg";
import MinusIcon from "../../assets/svg/minus-icon.svg";
import MinusIconActive from "../../assets/svg/minus-icon-active.svg";
import PlusIconActive from "../../assets/svg/plus-icon-active.svg";
import Buttons from "../../components/buttons/buttons";

function Product({ route, navigation }) {
  const { productDetails } = route.params;
  const [count, setCount] = useState(1);

  /** Displays Product Image Carousel */
  const Carousel = () => {
    return (
      <View style={styles.productImageContainer}>
        <View>
          <Image source={Images.productImage} style={styles.productImage} />
          <View style={styles.productImageContainer}>
            <Dots width="50%" />
          </View>
        </View>
      </View>
    );
  };

  /** Displays Drop Down's */
  const DropDown = () => {
    return (
      <>
        {data.map((item, index) => (
          <View key={item.id} style={index !== 0 ? styles.dropDownContainer2 : styles.dropDownContainer}>
            <Text style={styles.dropDownTitle}>{item.tab}</Text>
            <ArrowLeftIcon width={25} height={25} style={{ transform: [{ rotate: "-90deg" }] }} />
          </View>
        ))}
      </>
    );
  };

  /** Displays Product Counter */
  const Counter = () => {
    return (
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
        <Text style={styles.countNumber}>{count}</Text>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={styles.counterButton}
        >
          <PlusIconActive />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <AppLayout onBackPress={() => navigation.goBack()} bodyStyle={{ paddingTop: "2%", paddingBottom: "15%" }}>
        <Carousel />
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productName}>
            {productDetails.productName.length <= 30
              ? productDetails.productName
              : `${productDetails.productName.slice(0, 30)}..`}
          </Text>
          <Text style={styles.productPrice}>£{productDetails.productPrice}</Text>
        </View>
        <Text style={styles.productDescription}>
          Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls
          and deep-fried until golden brown. It has a doughnut-like texture but slightly o....
          <Text style={styles.productReadMore}>Read more</Text>
        </Text>
        <DropDown />
        <Counter />

        <View style={styles.productButtons}>
          <Buttons text="Add to cart" styling={styles.buttonStyle} textStyling={styles.buttonText} />
          <Buttons text="Subscribe to a Plan" styling={styles.buttonStyle2} textStyling={styles.buttonText2} />
        </View>
      </AppLayout>
    </>
  );
}

const data = [
  {
    id: 1,
    tab: "Ingredients",
    details: "It has a doughnut-like texture but slightly ",
  },
  {
    id: 2,
    tab: "Nutritional Information",
    details: "It has a doughnut-like texture but slightly ",
  },
  {
    id: 3,
    tab: "How to Prepare",
    details: "It has a doughnut-like texture but slightly ",
  },
  {
    id: 4,
    tab: "Dietary Information",
    details: "It has a doughnut-like texture but slightly ",
  },
  {
    id: 5,
    tab: "Storage Information",
    details: "It has a doughnut-like texture but slightly ",
  },
  {
    id: 6,
    tab: "Extra",
    details: "It has a doughnut-like texture but slightly ",
  },
];
export default Product;
