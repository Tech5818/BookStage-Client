import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const BottomBarStyle = StyleSheet.create({
    Bar: {
        width: width,
        height: height*0.07,
        backgroundColor: "#fff",
    },
    BarShadow: {
        height: 1,
        backgroundColor: "#fff",
        elevation: 1
    },
    RadioStyle: {
        height: height*0.07-1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    RadioItemsStyle: {
        display: "none"
    }
})