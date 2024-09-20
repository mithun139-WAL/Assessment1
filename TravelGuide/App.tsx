import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import ScreenOne from "./screens/ScreenOne";
import ScreenThree from "./screens/ScreenThree";
import ScreenTwo from "./screens/ScreenTwo";
import { RootStackParamList } from "./screens/types";

const Stack = createStackNavigator<RootStackParamList>();

const headerOptions = {
  headerShown: true,
  headerTitle: () => (
    <View style={styles.headerLeft}>
      <TouchableHighlight style={styles.headerRight}>
        <Image
          source={require("./assets/images/world.jpg")}
          style={styles.headerImage}
        />
      </TouchableHighlight>
      <Text style={styles.headerTitle}>Travel Guide</Text>
    </View>
  ),
  headerStyle: {
    backgroundColor: "#4CAF50",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={headerOptions}
        />
        <Stack.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={{
            headerTitle: "Countries",
            headerStyle: {
              backgroundColor: "#4CAF50",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ScreenThree"
          component={ScreenThree}
          options={{
            headerTitle: "Places",
            headerStyle: {
              backgroundColor: "#4CAF50",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    fontVariant: ["small-caps"],
    paddingHorizontal: 10,
    margin: 10,
  },
  headerRight: {
    marginLeft: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
  },
});
