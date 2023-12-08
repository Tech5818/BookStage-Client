import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CurrentConnect = () => {
  const [currentConnect, setCurrentConnect] = useState([]);

  useEffect(() => {
    const initializeCurrentConnect = async () => {
      const day = new Date();
      const today = day.getDate();
      const dayFull = `${day.getFullYear()}-${day.getMonth() + 1}-${today}`;

      if (currentConnect.length === 0) {
        setCurrentConnect([[today, dayFull]]);
        return;
      }
      console.log(currentConnect[currentConnect.length - 1][0]);
      if (today == currentConnect[currentConnect.length - 1][0]) {
        return;
      }

      if (currentConnect.length === 7) {
        currentConnect.shift();
      }

      setCurrentConnect((prevConnect) => [...prevConnect, [today, dayFull]]);
      const result = JSON.stringify(currentConnect);
      AsyncStorage.setItem('curCon', result);
    };

    initializeCurrentConnect();
  }, [currentConnect]);

  useEffect(() => {
    const fetchDataFromStorage = async () => {
      try {
        const curConJson = await AsyncStorage.getItem('curCon');
        const curConArr = JSON.parse(curConJson) || [];

      } catch (error) {
        console.error("AsyncStorage에서 currentConnect를 검색하는 동안 오류 발생:", error);
      }
    };

    fetchDataFromStorage();
  }, []);

  return (
    <View>
      {currentConnect.map((conTime, index) => (
        <Text key={index}>{conTime[1]}</Text>
      ))}
    </View>
  );
};
