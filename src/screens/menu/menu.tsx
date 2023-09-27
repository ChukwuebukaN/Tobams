/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import AppLayout from "../../components/app-layout/app-layout";
import SearchIcon from "../../assets/svg/search-icon.svg";
import HeartIcon from "../../assets/svg/heart-icon.svg";
import ActiveHeartIcon from "../../assets/svg/heart-icon-active.svg";
import CartIconWhite from "../../assets/svg/cart-icon-white.svg";
import Inputs from "../../components/inputs/inputs";
import styles from "./style";
import Images from "../../assets/image";
import Buttons from "../../components/buttons/buttons";
import { Screens } from "../../constants/screens";

function Menu({ navigation }) {
  const [isSelected, setIsSelected] = useState({});

  /** Handle Select Button */
  const handleSelectButton = (index) => {
    setIsSelected((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  const ProductCard = () => {
    return (
      <FlatList
        data={data}
        numColumns={2}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate(Screens.PRODUCT, {
                  productDetails: item,
                });
              }}
            >
              <View style={styles.likeContainer}>
                <TouchableOpacity
                  onPress={() => {
                    handleSelectButton(index);
                  }}
                >
                  {isSelected[index] ? <ActiveHeartIcon /> : <HeartIcon />}
                </TouchableOpacity>
              </View>
              <View style={styles.productImageContainer}>
                <Image source={item.productImage} style={styles.productImage} />
              </View>
              <View style={styles.productDetailsContainer}>
                <Text style={styles.productName}>
                  {item.productName.length <= 10 ? item.productName : `${item.productName.slice(0, 10)}..`}
                </Text>
                <Text style={styles.productPrice}>£{item.productPrice}</Text>
              </View>
              <View style={styles.productAddButton}>
                <Buttons
                  text="Add to cart"
                  styling={styles.buttonStyle}
                  textStyling={styles.buttonText}
                  icon={<CartIconWhite />}
                  buttonPress={() =>
                    navigation.navigate(Screens.CART, {
                      productDetails: item,
                    })
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <>
      <View style={styles.search}>
        <Inputs
          inputStyle={styles.input}
          inputLeftIconStyle={styles.leftIcon}
          inputPlaceholder="Search"
          inputBorderRadius={8}
          InputIcon={<SearchIcon />}
          inputPaddingHorizontal="18%"
          inputMarginTop="2.5%"
          inputMarginBottom="3%"
        />
      </View>
      <AppLayout headerTitle="Menu" bodyStyle={{ paddingTop: "20%", paddingBottom: "20%" }}>
        <View style={styles.productsContainer}>
          <ProductCard />
        </View>
      </AppLayout>
    </>
  );
}

const data = [
  {
    id: 1,
    productName: "African Doughnut Mix",
    productPrice: 30,
    productImage: Images.product1,
  },
  {
    id: 2,
    productName: "Efo Riro",
    productPrice: 40,
    productImage: Images.product2,
  },
  {
    id: 3,
    productName: "Asaro (Yam Porridge)",
    productPrice: 50,
    productImage: Images.product3,
  },
  {
    id: 4,
    productName: "Chicken Stew",
    productPrice: 30,
    productImage: Images.product4,
  },
  {
    id: 5,
    productName: "African Doughnut Mix",
    productPrice: 30,
    productImage: Images.product1,
  },
  {
    id: 6,
    productName: "Efo Riro",
    productPrice: 40,
    productImage: Images.product2,
  },
  {
    id: 7,
    productName: "Asaro (Yam Porridge)",
    productPrice: 50,
    productImage: Images.product3,
  },
];
export default Menu;
