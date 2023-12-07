import { View, Text } from "react-native";
import { MainIcon } from "../icons";

export const Main = ({text}) => {
    return(
        <View>
            <MainIcon/>
            <Text>{text}</Text>
        </View>
    )
}