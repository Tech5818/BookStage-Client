import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import getOneBookData from "../apis/books/getOneBookData";
import ViewScreenStyle from "../styles/View/View.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import BookImage from "../components/home/BookImage.comp";

const ViewScreen = ({ navigation }) => {
    const [bookData, setBookData] = useState({
        author: "",
        description: "",
        image: "",
        title: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isPopup, setIsPopup] = useState(false);
    const [isPressedHeart, setIsPressedHeart] = useState(false);
    const [isPressedBookmark, setIsPressedBookmark] = useState(false);

    useEffect(() => {
        const loadBookData = async () => {
            const { data } = await getOneBookData("홍길동전");
            setBookData({ author: data.author, description: data.description, image: data.image, title: data.title });
            setIsLoading(false);
        }

        loadBookData();
    }, []);

    const popUpDescriptionHandler = () => {
        setIsPopup(true);
    }

    const clickHeartIconHandler = () => {
        // call api
        setIsPressedHeart(!isPressedHeart);
    }

    const clickBookMarkHandler = () => {
        // call api
        setIsPressedBookmark(!isPressedBookmark);
    }

    return <View style={ViewScreenStyle.container}>
        <AntDesign name="arrowleft" size={24} color="white" style={ViewScreenStyle.backIcon} onPress={() => navigation.navigate("Home")} />
        {isLoading && <Text>Loading...</Text>}
        {
            !isLoading &&
            <View style={ViewScreenStyle.wrap}>
                <BookImage source={bookData.image} />
                <View style={ViewScreenStyle.userAction}>
                    <AntDesign size={20} color={isPressedHeart ? "red" : "white"} name="heart" onPress={() => clickHeartIconHandler()} />
                    <FontAwesome size={20} color={isPressedBookmark ? "red" : "white"} name="bookmark" onPress={() => clickBookMarkHandler()} />
                </View>
                <View style={ViewScreenStyle.textWrap}>
                    <Text numberOfLines={1} style={ViewScreenStyle.bookTitle}>{bookData.title}</Text>
                    <Text style={ViewScreenStyle.bookAuthor}>{bookData.author}</Text>
                    <TouchableOpacity onPress={popUpDescriptionHandler}>
                        <Text style={ViewScreenStyle.bookDescription} numberOfLines={5}>{bookData.description}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        {
            isPopup && <View style={ViewScreenStyle.popup}></View>
        }
    </View>
}

export default ViewScreen;