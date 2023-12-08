import { Dimensions, StyleSheet } from "react-native"

export const HomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    searchInput: {
        borderWidth: 1,
        borderColor: "gray",
        width: Dimensions.get("screen").width - 100,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 10
    },

    RecommendSection: {
        marginVertical: 20
    },

    recommendBookImage: {
        width: 100,
        height: 120
    },

    RecommendWrap: {
        width: 120,
        height: 140,
        direction: "column",
        alignItems: "center",
        margin: 10
    },

    Title: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 30
    }
})