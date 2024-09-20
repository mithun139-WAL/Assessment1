import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScreenThreeProps } from "./types";
import { countriesData } from "../assets/images/screenthreedata";

type CountryKey = keyof typeof countriesData;

const ScreenThree: React.FC<ScreenThreeProps> = ({ route }) => {
  const { country } = route.params as { country: CountryKey };
  const countryData = countriesData[country];

  const renderItem = ({ item }: { item: (typeof countryData)[0] }) => (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <Text style={styles.title}>{item.place}</Text>
      </View>
      <View  style={styles.text}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={countryData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ScreenThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    margin: 10,
    elevation: 10,
    backgroundColor: '#fff',
  },
  titleText: {
    backgroundColor: "#b5f5b7",
    paddingHorizontal: 10,
  },
  title: {
    paddingVertical: 10,
    letterSpacing: 1.5,
    fontWeight: "500",
    marginBottom: 10,
  },
  text: {
    padding: 10,
  },
  description: {
    letterSpacing: 1.5,
    lineHeight: 20,
  },
});
