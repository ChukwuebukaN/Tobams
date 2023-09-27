/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import AppLayout from "../../components/app-layout/app-layout";
import Images from "../../assets/image";
import styles from "./style";
import DeleteIcon from "../../assets/svg/delete-icon.svg";
import Buttons from "../../components/buttons/buttons";
import Counter from "./counter";

function Cart({ navigation }) {
  const CartCard = () => {
    return (
      <FlatList
        data={data}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.productImageContainer}>
              <Image source={item.productImage} style={styles.productImage} />
              <View style={styles.productDetailsContainer}>
                <Text style={styles.productName}>
                  {item.productName.length <= 18 ? item.productName : `${item.productName.slice(0, 18)}..`}
                </Text>
                <Text style={styles.productPrice}>£{item.productPrice}</Text>
                <TouchableOpacity>
                  <DeleteIcon />
                </TouchableOpacity>
              </View>
            </View>
            <Counter />
          </View>
        )}
      />
    );
  };

  return (
    <>
      <AppLayout
        onBackPress={() => navigation.goBack()}
        headerTitle="Cart"
        bodyStyle={{ paddingTop: "0%", paddingBottom: "5%" }}
      >
        <CartCard />
        <View style={styles.checkoutButton}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total
              <Text style={styles.itemText}> (3 items)</Text>
            </Text>
            <Text style={styles.totalText}>£90</Text>
          </View>
          <Buttons text="Checkout - £90" styling={styles.buttonStyle} textStyling={styles.buttonText} />
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
export default Cart;
