import { View } from "react-native"
import { MapIcon } from "../icons"
import { Text } from "react-native"

export const Map = ({text}) => {
    return(
        <View>
            <MapIcon/>
            <Text>{text}</Text>
        </View>
    )
}