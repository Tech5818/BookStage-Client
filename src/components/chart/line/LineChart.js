import { View, Text, StyleSheet } from "react-native";
import { chartConfig } from "../ChartConfig";
import { LineChart } from "react-native-chart-kit";
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection:"column",
        overflow:"hidden",
        // backgroundColor:"blue",
        width:250
    }
})

export const BreakChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };
    return(
        <View style={styles.container}>
            <LineChart
              data={data}
              width={200}
              height={220}
              chartConfig={chartConfig}

            />
        </View>
    )   
}