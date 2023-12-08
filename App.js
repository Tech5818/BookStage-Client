import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { HomeScreen, LoginScreen, JoinScreen, ChartScreen, ViewScreen, RecordScreen, MyScreen, MapScreen } from "./src/screens/index";
import { SafeAreaView } from 'react-native';
import { BottomBar } from './src/components/bottom_bar/BottomBar';
import AppStyle from './src/styles/App.style';
import { useEffect, useState } from 'react';

const NavigatorStack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const getUserInfo = async () => {
    try {
      const user = await AsyncStorage.getItem("user");

      if (!!user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch {
      setIsLogin(false);
    }
  }
  
  useEffect(() => {

  },[])

  return (<SafeAreaView style={AppStyle.container}>
    {isLogin ? (
      <NavigationContainer>
        <NavigatorStack.Navigator initialRouteName='Home' >
          <NavigatorStack.Screen name="Home" component={HomeScreen} options={{
            title: "BOOKSTAGE", headerTitleAlign: "center"
          }} />
          <NavigatorStack.Screen name="Join" component={JoinScreen} />
          <NavigatorStack.Screen name="My" component={MyScreen} />
          <NavigatorStack.Screen name="Chart" component={ChartScreen} options={{ title: "통계" }}/>
          <NavigatorStack.Screen name="Record" component={RecordScreen} />
          <NavigatorStack.Screen name="Map" component={MapScreen} options={{ title: "도서관 지도" }} />
          <NavigatorStack.Screen name="View" component={ViewScreen} options={{ headerShown: false }} />
        </NavigatorStack.Navigator>
        <BottomBar/>
    </NavigationContainer>
    ) : (
      <NavigationContainer>
        <NavigatorStack.Navigator>
          <NavigatorStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </NavigatorStack.Navigator>
      </NavigationContainer>
    )}
    
  </SafeAreaView>)
}

