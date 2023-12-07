import { View, Text, StyleSheet } from "react-native";
import { chartConfig } from "../ChartConfig";
import { LineChart } from "react-native-chart-kit";
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection:"column",
        overflow:"hidden",
        width:600,
    }
})

export const BreakChart = () => {
    const data = {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43, 100, 27, 38, 21, 85, 37],
            color: (opacity = 1) => `rgba(30, 30, 30, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };
    return(
        <View style={styles.container}>
            <LineChart
              data={data}
              width={600}
              height={220}
              chartConfig={chartConfig}
              fromZero
            />
        </View>
    )   
}