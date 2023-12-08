import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

export const JoinStyle = StyleSheet.create({
    Container: {
        width,
        height: height - 56,
        justifyContent: "center",
        alignItems: "center",
    },
    Logo: {
        width: 400,
        height: 400
    },
    JoinBox: {
        width: width - 80,
        height: height - 140,
        backgroundColor: "#fff",
        borderRadius: 15,
        alignItems: "center",
        gap: 30
    },
    InputSection: {
        gap: 10
    },
    Input: {
        width: width * 0.7,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        paddingVertical: 7,
        fontSize: 16,
    },
    ButtonSection: {

    },
    Button: {
        width: width * 0.7,
        height: 55,
        backgroundColor: "#EC9C1D",
        justifyContent: "center",
        alignItems: "center"
    },
    ButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    }
})