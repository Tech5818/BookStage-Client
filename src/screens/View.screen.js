import { useEffect, useRef, useState } from "react";
import { Image, Text, View, Animated, Dimensions } from "react-native";
import getOneBookData from "../apis/books/getOneBookData";
import ViewScreenStyle from "../styles/View/View.style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import BookImage from "../components/View/BookImage.comp";

const ViewScreen = ({ navigation, route }) => {
    const [bookData, setBookData] = useState({
        author: "",
        description: "",
        image: "",
        title: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isShow, setIsShow] = useState(true);
    const heightValue = useRef(new Animated.Value(Dimensions.get("screen").height - 300)).current;
    const bottomValue = useRef(new Animated.Value(0)).current;


    const dragWrap = () => {
        setIsShow(!isShow);
        Animated.parallel([
            Animated.timing(heightValue, {
                toValue: isShow ? Dimensions.get("screen").height - 100 : Dimensions.get("screen").height - 300,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(bottomValue, {
                toValue: isShow ? 350 : 0,
                duration: 300,
                useNativeDriver: false
            })
        ]).start();
    }


    useEffect(() => {
        const loadBookData = async () => {
            const { data } = await getOneBookData(route.params.bookName);
            setBookData({ author: data.author, description: data.description, image: data.image, title: data.title });
            setIsLoading(false);
        }

        loadBookData();
    }, []);

    return <View style={ViewScreenStyle.container}>
        {isLoading && <Text>Loading...</Text>}
        {
            !isLoading &&
            <View style={ViewScreenStyle.wrap}>
                <BookImage source={bookData.image} />
                <Animated.View style={[ViewScreenStyle.textWrap, { height: heightValue, bottom: bottomValue }]}>
                    <TouchableOpacity onPress={dragWrap}>
                        <View style={ViewScreenStyle.bar} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={ViewScreenStyle.bookTitle}>{bookData.title}</Text>
                    <Text style={ViewScreenStyle.bookAuthor}>{bookData.author}</Text>
                    <ScrollView contentContainerStyle={ViewScreenStyle.scrollView}>
                        <Text style={ViewScreenStyle.bookDescription} >{bookData.description}</Text>
                    </ScrollView>
                </Animated.View>
            </View>
        }
    </View >
}

export default ViewScreen;