import React from "react";
import { StackNavigation } from "../StackNativation";
import { Chart } from "../screens/Chart";


export const ChartStack = () => {
    return(
        <>
            <StackNavigation name="chart_screen" component={Chart}/>
        </>
    )
}