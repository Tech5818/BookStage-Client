import { View, Text } from "react-native";
import { RadioButtonGroup, RadioButtonItem } from "expo-radio-button";
import { BottomBarStyle } from "../../styles/BottomBar/BottomBar.style";
import { Main } from "./items/Main";
import { Feed } from "./items/Feed";
import { useState } from "react";

export const BottomBar = () => {
    const [current, setCurrent] = useState("main");

    return(
        <View style={BottomBarStyle.Bar}>
            <View style={BottomBarStyle.BarShadow}></View>
            <RadioButtonGroup
                containerStyle={BottomBarStyle.RadioStyle}
                selected={current}
                onSelected={(value) => {setCurrent(value)}}
                >
                <RadioButtonItem value="main" label={<Main text="홈"/>} style={BottomBarStyle.RadioItemsStyle}/>
                <RadioButtonItem value="feed" label="feed"/>
            </RadioButtonGroup>
        </View>
    )
}