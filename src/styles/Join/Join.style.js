import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

export const JoinStyle = StyleSheet.create({
    Container: {
        width,
        height: height - 56,
        justifyContent: "center",
        alignItems: "center",
    },
    JoinBox: {
        width: width - 80,
        height: height - 140,
        backgroundColor: "#fff",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    
})