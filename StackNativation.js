import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const StackNavigation = ({name, component, children}) => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name={name}
                    component={component} 
                    options={{headerShown: false}}
                />
                {children}
            </Stack.Navigator>
        </>
    )
}