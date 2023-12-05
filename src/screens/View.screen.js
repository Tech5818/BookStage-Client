import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import getOneBookData from "../apis/books/getOneBookData";
import ViewScreenStyle from "../styles/View/View.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ViewScreen = ({ navigation }) => {
    const [bookData, setBookData] = useState({
        author: "",
        description: "",
        image: "",
        title: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isPopup, setIsPopup] = useState(false);

    useEffect(() => {
        const loadBookData = async () => {
            const { data } = await getOneBookData("홍길동전");
            setBookData({ author: data.author, description: data.description, image: data.image, title: data.title });
            setIsLoading(false);
        }

        loadBookData();
    }, []);

    const popUpDescriptionHandler = () => {

    }

    return <View style={ViewScreenStyle.container}>
        {isLoading && <Text>Loading...</Text>}
        {
            !isLoading &&
            <View style={ViewScreenStyle.wrap}>
                <Image source={{ uri: bookData.image }} style={ViewScreenStyle.bookImage} />
                <View style={ViewScreenStyle.userAction}>
                    <AntDesign size={20} color="black" name="hearto" />
                    <Feather size={20} color="black" name="bookmark" />
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
    </View>
}

export default ViewScreen;