import { View, Text, StyleSheet } from "react-native";
import { chartConfig } from "../ChartConfig";
import { PieChart } from "react-native-chart-kit";
import { useEffect } from "react";

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:"center",
        // overflow:"hidden",

    },
    pieChart:{
        width:300,
        height:200,
        backgroundColor:"red"
    }
})

export const CircleChart = () => {
  useEffect(()=>{
    genreData = ["장르1", "장르2","장르3","장르4", "기타"],
    perData = ["20", "40", "30", "7", "3"]
    const chartData = [
      {
        name : genreData[0],
        percentage : perData[0],
        //color는 원 그래프에 나올 색
        color: "#000",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
      },
      {
        name : genreData[0],
        percentage : perData[0],
        color: "#000",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
      },
      {
        name : genreData[0],
        percentage : perData[0],
        color: "#000",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
      },
      {
        name : genreData[0],
        percentage : perData[0],
        color: "#000",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
      },
      {
        name : genreData[0],
        percentage : perData[0],
        color: "#000",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12,
      }
    ]
  }, [])
    const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12,
          
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        }
      ];
    return(
        <View style={styles.container}>
            <PieChart
              data={data}
              width={320}
              height={200}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"10"}
              center={[10, 0]}
              absolute
            />
        </View>
    )
}