import { Button, View } from "react-native";
import { HomeScreenStyle } from "../styles/Home/Home.style";

const HomeScreen = ({ navigation }) => {
    return <View style={HomeScreenStyle.container}>
        <Button title="Go to view page" onPress={() => navigation.navigate("View")} />
        <Button title="Go to Map page" onPress={() => navigation.navigate("Map")} />
    </View>
}

export default HomeScreen;