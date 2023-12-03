import React from "react";
import { StackNavigation } from "../StackNativation";
import { Profile } from "../screens/Profile";


export const ProfileStack = () => {
    return(
        <>
            <StackNavigation name="profile_screen" component={Profile}/>
        </>
    )
}