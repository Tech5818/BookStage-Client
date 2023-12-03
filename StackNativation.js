import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const StackNavigation = ({name, component}) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name={name}
                    component={component} 
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </>
    )
}