import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { ScreenTwoProps } from "./types";
import { continentData } from "../assets/images/screentwodata";

type ContinentKey = keyof typeof continentData;

const ScreenTwo: React.FC<ScreenTwoProps> = ({ route, navigation }) => {
  const { continent } = route.params as { continent: ContinentKey };
  const dataToShow = continentData[continent];

  const renderItem = ({
    item,
  }: {
    item: (typeof continentData)["asia"][0];
  }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("ScreenThree", {
          country: item.title,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={dataToShow}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingVertical: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    backgroundColor: "#fff",
    gap: 10,
    margin: 10,
    borderRadius: 20,
  },
  imgContainer: {
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  description: {
    color: "gray",
    letterSpacing: 1,
    fontSize: 12,
    paddingRight: 10,
    overflow: "hidden",
    flexShrink: 1,
    width: 250,
    lineHeight: 20,
  },
  title: {
    marginBottom: 10,
    letterSpacing: 2,
    fontWeight: "500",
    fontVariant: ["small-caps"],
    fontSize: 16, 
  },
});
