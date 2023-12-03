import React from "react";
import { StackNavigation } from "../StackNativation";
import { Main } from "../screens/Main";


export const MainStack = () => {
    return(
        <>
            <StackNavigation name="main_screen" component={Main}/>
        </>
    )
}