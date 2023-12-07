import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const LoginSignIn = () => {
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="login">
                    <Stack.Screen name="로그인" component={Login} options={{headerShown:false}}/>
                    <Stack.Screen name="회원가입" component={SignIn}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}