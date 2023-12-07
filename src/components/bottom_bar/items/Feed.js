import { View } from "react-native"
import { FeedIcon } from "../icons"
import { Text } from "react-native"

export const Feed = ({text}) => {
    return(
        <View>
            <FeedIcon/>
            <Text>{text}</Text>
        </View>
    )
}