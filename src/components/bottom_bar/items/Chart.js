import { View } from "react-native"
import { ChartIcon } from "../icons"
import { Text } from "react-native"

export const Chart = ({text}) => {
    return(
        <View>
            <ChartIcon/>
            <Text>{text}</Text>
        </View>
    )
}