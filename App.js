import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainStack } from './stacks/MainStack';
import { ChartStack } from './stacks/ChartStack';
import { ProfileStack } from './stacks/ProfileStack';
import { LoginSignIn } from './screens/LoginSignIn';
import { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userInfo, setUserInfo] = useState();
  

  useEffect(() => {
    const getUser = async () => {
      try {
        const User = await AsyncStorage.getItem("@book:userInfo");
        if (User !== null) {
          setUserInfo({"success": true, "value" : User})
        }
        else {
          setUserInfo({"success": false})
        }
      } catch (error) {
        console.error("Error!: ",error)
      }
    }

    if (userInfo === undefined) {
      getUser()
    }
    console.log("mount");
  }, [userInfo])

  return (
    <>
    {
      userInfo !== undefined && userInfo.success ? (
        <NavigationContainer>
          <Tab.Navigator initialRouteName='main'>
            <Tab.Screen name='main' component={MainStack} options={{headerShown:false}}/>
            <Tab.Screen name='chart' component={ChartStack} options={{headerShown:false}}/>
            <Tab.Screen name='profile' component={ProfileStack} options={{headerShown:false}}/>
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <LoginSignIn />
      )
    }
    </>
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
