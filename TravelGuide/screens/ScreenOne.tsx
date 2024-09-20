import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { continents } from "../assets/images/screenonedata";
import { ScreenOneProps } from "./types";
import { useHeaderHeight } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;

const ScreenOne: React.FC<ScreenOneProps> = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const renderItem = ({
    item,
  }: {
    item: { id: string; name: string; imageUrl: ImageSourcePropType, description:  string };
  }) => (
    <Pressable
      onPress={() => navigation.navigate("ScreenTwo", { continent: item.name })}
    >
      <View style={styles.imageView}>
        <Image source={item.imageUrl } style={styles.images} />
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={styles.imgbg}>
          <Text style={styles.name}>{item.name}</Text>
          <View>
            <Text style={styles.description}>{item.description}</Text>
          </View>

        </LinearGradient>
      </View>
    </Pressable>
  );

  return (
    <View style={[styles.container, { paddingTop: headerHeight }]}>
      <FlatList
        data={continents}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
      />
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imageView: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  images: {
    height: 600,
    margin: 10,
    width: 350,
    borderRadius: 20,
  },
  name: {
    fontSize: 40,
    padding: 20,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 3,
    fontVariant: ['small-caps']
  },
  imgbg: {
    position: 'absolute',
    height: 600,
    margin: 10,
    width: 350,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  description:{
    padding: 20,
    color: '#fff',
    letterSpacing: 1.2
  }
});
