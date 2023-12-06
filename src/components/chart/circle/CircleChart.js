import { View, Text, StyleSheet } from "react-native";
import { chartConfig } from "../ChartConfig";
import { PieChart } from "react-native-chart-kit";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        overflow:"hidden"
        
    },
    pieChart:{
        width:500,
        height:200,
        backgroundColor:"red"
    }
})

export const CircleChart = () => {
    const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
    return(
        <View style={styles.container}>
            <PieChart
              data={data}
              width={330}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, 0]}
              absolute
            />
        </View>
    )
}