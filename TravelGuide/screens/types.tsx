import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  ScreenOne: undefined; 
  ScreenTwo: { continent: string }
  ScreenThree: { country: string };
};

export type ScreenOneNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenOne'>;

export type ScreenTwoNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenTwo'>;

export type ScreenTwoRouteProp = RouteProp<RootStackParamList, 'ScreenTwo'>;

export type ScreenThreeNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenThree'>;

export type ScreenThreeRouteProp = RouteProp<RootStackParamList, 'ScreenThree'>;

export interface ScreenOneProps {
  navigation: ScreenOneNavigationProp;
}

export interface ScreenTwoProps {
  navigation: ScreenTwoNavigationProp;
  route: ScreenTwoRouteProp;
}

export interface ScreenThreeProps {
  navigation: ScreenThreeNavigationProp;
  route: ScreenThreeRouteProp;
}
