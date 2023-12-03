import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStack } from './stacks/MainStack';
import { ChartStack } from './stacks/ChartStack';
import { ProfileStack } from './stacks/ProfileStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='main'>
        <Tab.Screen name='main' component={MainStack} options={{headerShown:false}}/>
        <Tab.Screen name='chart' component={ChartStack} options={{headerShown:false}}/>
        <Tab.Screen name='profile' component={ProfileStack} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  GNB: {
    width: "100%", 
    height: 65,
    alignItems: "center", 
    justifyContent: "space-between", 
    borderTopColor: "#aaa",
    borderTopWidth: 1
  }
});
