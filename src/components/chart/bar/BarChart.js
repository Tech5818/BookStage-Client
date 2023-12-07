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
        // backgroundColor:"#ccc"
    }
})

export const StickChart = () => {
    const data = {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        datasets: [
          {
            data: [5, 7, 2, 10, 3, 3, 2, 5, 1, 3, 8, 2],
          }
        ],
        
      };
    return(
        <View style={styles.container}>
            <BarChart
              style={styles.graph}
              data={data}
              width={450}
              height={200}
              chartConfig={chartConfig}
            //   verticalLabelRotation={30}
              showBarTops
              fromZero
            />
        </View>
    )
}