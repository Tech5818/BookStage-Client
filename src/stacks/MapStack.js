import React from "react";
import { StackNavigation } from "../../StackNavigation";
import { Map } from "../screens/Map";


export const MapStack = () => {
    return(
        <>
            <StackNavigation name="Map_screen" component={Map}/>
        </>
    )
}