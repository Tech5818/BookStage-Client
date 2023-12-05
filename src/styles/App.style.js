import { Platform, StatusBar, StyleSheet } from "react-native"

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

export default AppStyle;