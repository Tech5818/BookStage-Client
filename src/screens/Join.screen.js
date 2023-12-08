import { ScrollView, View, TouchableOpacity, TextInput, Text } from "react-native";
import { JoinStyle } from "../styles/Join/Join.style";

const JoinScreen = () => {
    return(
        <ScrollView 
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={JoinStyle.Container}
        >
            <View style={JoinStyle.JoinBox}>
                <View>
                    <TextInput/>
                    <TextInput/>
                    <TextInput/>
                    <TextInput/>
                </View>
            </View>
        </ScrollView>
    )
}

export default JoinScreen;