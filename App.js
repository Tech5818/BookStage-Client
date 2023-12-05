import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, LoginScreen, JoinScreen, ChartScreen, ViewScreen, RecordScreen, MyScreen } from "./src/screens/index";

const NavigatorStack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <NavigatorStack.Navigator initialRouteName='Home' >
      <NavigatorStack.Screen name="Home" component={HomeScreen} options={{ title: "Bookstage", headerTitleAlign: "center" }} />
      <NavigatorStack.Screen name="Login" component={LoginScreen} />
      <NavigatorStack.Screen name="Join" component={JoinScreen} />
      <NavigatorStack.Screen name="My" component={MyScreen} />
      <NavigatorStack.Screen name="Chart" component={ChartScreen} />
      <NavigatorStack.Screen name="Record" component={RecordScreen} />
      <NavigatorStack.Screen name="View" component={ViewScreen} />
    </NavigatorStack.Navigator>
  </NavigationContainer>;
}

