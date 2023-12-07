import React from "react";
import { StackNavigation } from "../../StackNavigation";
import { Main } from "../screens/Main";


export const MainStack = () => {
    return(
        <>
            <StackNavigation name="main_screen" component={Main}/>
        </>
    )
}