import { View, Text } from "react-native";
import { BottomBarStyle } from "../../styles/BottomBar/BottomBar.style";
import { Main } from "./items/Main";
import { useState } from "react";
import { Map } from "./items/Map";
import { Chart } from "./items/Chart";
import { Profile } from "./items/Profile";

export const BottomBar = () => {
    const defaultCurrentSelectButton = {
        main: true,
        map: false,
        chart: false,
        profile:false
    };
    const [currentSelectButton, setCurrentSelectButton] = useState(defaultCurrentSelectButton);

    return(
        <View style={BottomBarStyle.Bar}>
            <View style={BottomBarStyle.BarShadow}></View>
            <View style={BottomBarStyle.BottomMenus}>
                <Main text="홈" value="main" isSelect={currentSelectButton} setSelect={setCurrentSelectButton}/>
                <Map text="지도" value="map" isSelect={currentSelectButton} setSelect={setCurrentSelectButton}/>
                <Chart text="통계" value="chart" isSelect={currentSelectButton} setSelect={setCurrentSelectButton}/>
                <Profile text="프로필" value="profile" isSelect={currentSelectButton} setSelect={setCurrentSelectButton}/>
            </View>
        </View>
    )
}