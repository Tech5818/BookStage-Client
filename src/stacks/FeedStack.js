import React from "react";
import { StackNavigation } from "../../StackNavigation";
import { Feed } from "../screens/Feed";


export const FeedStack = () => {
    return(
        <>
            <StackNavigation name="feed_screen" component={Feed}/>
        </>
    )
}