import { ScrollView,View, Text } from "react-native";
import { CircleChart } from "../components/chart/circle/CircleChart";
import { LineChart } from "../components/chart/line/LineChart";
import { TextChart } from "../components/chart/text/TextChart";

const ChartScreen = () => {
    // 스택헤서 헤더 X
    // 읽은 권수, 읽은 페이지 월 평균 (텍스트)
    // 원 그래프로 장르 그래프 작성 (원)
    // 월별 평균 독서 시간  (막대)
    // 월마다 읽은 책 그래프 (꺾은선)
    return(
        <View>
            <View>
                <Text>
                    차트 스크린
                </Text>
            </View>
            <ScrollView
                horizontal={true}
                showHorizontalScrollIndicator={false}
            >
                <CircleChart />
            </ScrollView>
            <ScrollView
                horizontal={true}
                showHorizontalScrollIndicator={false}
            >
                <LineChart />
            </ScrollView>
            <ScrollView
                horizontal={true}
                showHorizontalScrollIndicator={false}
            >
                <TextChart />
            </ScrollView>
        </View>
    )
}

export default ChartScreen;