import { StyleSheet } from "react-native";

const ViewScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C0D0C",
        alignItems: "center",
        justifyContent: "center"
    },

    backIcon: {
        position: "absolute",
        top: 30,
        left: 10,
        zIndex: 1
    },

    wrap: {
        height: "auto",
        gap: 30,
    },

    userAction: {
        height: 20,
        flexDirection: "row",
        width: 260,
        alignSelf: "center",
        gap: 10
    },

    bookImage: {
        width: 320,
        height: 360,
        resizeMode: "contain",
    },

    bookTitle: {
        fontSize: 24,
        width: 280,
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    },

    bookAuthor: {
        fontSize: 16,
        width: 240,
        textAlign: "center",
        color: "gray"
    },

    bookDescription: {
        width: 280,
        color: "gray"
    },

    textWrap: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    }
})

export default ViewScreenStyle;