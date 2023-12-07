import React from "react";
import { StackNavigation } from "../../StackNavigation";
import { Profile } from "../screens/Profile";


export const ProfileStack = () => {
    return(
        <>
            <StackNavigation name="profile_screen" component={Profile}/>
        </>
    )
}