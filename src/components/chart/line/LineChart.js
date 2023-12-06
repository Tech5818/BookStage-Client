import { View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export const BreakChart = () => {
    const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
    return(
        <View>
            <LineChart data={data}/>
        </View>
    )   
}