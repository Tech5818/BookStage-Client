import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export const CircleChart = () => {
    // const chartConfig = {
    //     backgroundGradientFrom: "#1E2923",
    //     backgroundGradientFromOpacity: 0,
    //     backgroundGradientTo: "#08130D",
    //     backgroundGradientToOpacity: 0.5,
    //     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    //     strokeWidth: 2, // optional, default 3
    //     barPercentage: 0.5,
    //     useShadowColorFromDataset: false // optional
    //   };
    const pieData = [
        {value: 54, color: '#177AD5', text: '54%'},
        {value: 40, color: '#79D2DE', text: '30%'},
        {value: 20, color: '#ED6665', text: '26%'},
    ];
    return(
        <View style={{overflow:"hidden"}}>
            <PieChart
                showText
                textColor="black"
                radius={150}
                textSize={20}
                // showTextBackground
                textBackgroundRadius={26}
                data={pieData}
            />
        </View>
    )
}