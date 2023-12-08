import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, LoginScreen, JoinScreen, ChartScreen, ViewScreen, RecordScreen, MyScreen, MapScreen, SearchScreen } from "./src/screens/index";
import { SafeAreaView } from 'react-native';
import { BottomBar } from './src/components/bottom_bar/BottomBar';
import AppStyle from './src/styles/App.style';

const NavigatorStack = createStackNavigator();

export default function App() {
  return (<SafeAreaView style={AppStyle.container}>
    {isLogin ? (
      <NavigationContainer>
        <NavigatorStack.Navigator initialRouteName='Home' >
          <NavigatorStack.Screen name="Home" component={HomeScreen} options={{
            title: "BOOKSTAGE", headerTitleAlign: "center"
          }} />
          <NavigatorStack.Screen name="My" component={MyScreen} />
          <NavigatorStack.Screen name="Chart" component={ChartScreen} options={{ title: "통계" }} />
          <NavigatorStack.Screen name="Record" component={RecordScreen} />
          <NavigatorStack.Screen name="Map" component={MapScreen} options={{ title: "도서관 지도" }} />
          <NavigatorStack.Screen name="View" component={ViewScreen} options={{ headerShown: false }} />
        </NavigatorStack.Navigator>
        <BottomBar />
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <NavigatorStack.Navigator initialRouteName="Login">
          <NavigatorStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <NavigatorStack.Screen name="Join" component={JoinScreen} options={{ title: "회원가입" }} />
        </NavigatorStack.Navigator>
      </NavigationContainer>
    )}

  </SafeAreaView>)
}

