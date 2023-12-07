import { View } from "react-native"
import { ProfileIcon } from "../icons"
import { Text } from "react-native"

export const Profile = ({text}) => {
    return(
        <View>
            <ProfileIcon/>
            <Text>{text}</Text>
        </View>
    )
}