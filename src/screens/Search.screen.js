import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import SearchScreenStyle from "../styles/Home/Search.style";

const SearchScreen = ({ navigation, route }) => {
    const [books, setBooks] = useState(route.params.booksData);

    return <ScrollView>
        {
            books && books.map((book, idx) => {
                return <TouchableOpacity key={idx} onPress={() => navigation.navigate("View", { bookName: book.title })}><View style={SearchScreenStyle.bookWrap}>
                    <Image source={{ uri: book.image }} style={SearchScreenStyle.bookCover} />
                    <Text numberOfLines={1} style={SearchScreenStyle.bookTitle}>{book.title}</Text>
                </View></TouchableOpacity>
            })
        }
    </ScrollView>
}

export default SearchScreen;