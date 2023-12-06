import { View, Text } from "react-native"
import { BarChart } from "react-native-gifted-charts";

export const StickChart = () => {
    const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
    return(
        <View>
            <BarChart 
                data={barData}
            />
        </View>
    )
}