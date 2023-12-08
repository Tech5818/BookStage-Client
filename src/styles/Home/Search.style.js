import { StyleSheet } from "react-native";

const SearchScreenStyle = StyleSheet.create({
    bookWrap: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        margin: 20,
        gap: 10,
        backgroundColor: "white",
        padding: 10
    },

    bookCover: {
        width: 100,
        height: 80,
        resizeMode: "cover",
    },

    bookTitle: {
        width: 120,
        fontWeight: "bold"
    }
})

export default SearchScreenStyle;