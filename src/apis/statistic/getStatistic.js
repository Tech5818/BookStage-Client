import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import { useState, useEffect } from "react";

export const getStatistic = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      // 여기에서 JWT를 얻어오는 로직이 있다고 가정합니다.
      const getJWT = async () => {
        try {
          // JWT를 얻어오는 비동기 로직
          const Token = await AsyncStorage.getItem('Token');
  
          // JWT를 사용하여 GET 요청 보내기
          const response = await axios.get('https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/user/summary?period=2023-12-04', {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          });
  
          // 응답 데이터를 상태에 설정
          setData(response.data);
        } catch (error) {
          console.error("에러 발생:", error);
        }
      };
  
      getJWT();
    }, []);
    console.log(data)
    return data;
}