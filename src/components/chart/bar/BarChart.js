import { View, Text, StyleSheet } from "react-native"
import { chartConfig } from "../ChartConfig";
import { BarChart } from "react-native-chart-kit";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        overflow:"hidden"
    },
    graph : {
        backgroundColor:"#ccc"
    }
})

export const StickChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
    return(
        <View style={styles.container}>
            <BarChart
              style={styles.graph}
              data={data}
              width={250}
              height={200}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
              
            />
        </View>
    )
}