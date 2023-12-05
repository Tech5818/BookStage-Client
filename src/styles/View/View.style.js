import { StyleSheet } from "react-native";

const ViewScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },

    wrap: {
        // flex: 1,
        height: "auto",
        gap: 30,
        // justifyContent: "space-around"
    },

    userAction: {
        height: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    bookImage: {
        width: 320,
        height: 360,
        resizeMode: "contain",
    },

    bookTitle: {
        fontSize: 24,
        width: 280,
        textAlign: "center"
    },

    bookAuthor: {
        fontSize: 16,
        width: 240,
        textAlign: "center"
    },

    bookDescription: {
        width: 280,
    },

    textWrap: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    }
})

export default ViewScreenStyle;