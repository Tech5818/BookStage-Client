import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Default_profile from "../../../assets/default_profile.png";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { CurrentConnect } from "./CurrentConnect";

const styles = StyleSheet.create({
  container : {

  },
  profile : {
    borderRadius:50,
    width:100,
    height:100
  }
})

export const Profile = () => {
  const [name, setName] = useState("Guest");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const getNameFromStorage = async () => {
      try {
        const storedName = await AsyncStorage.getItem("name");
        console.log(storedName);
        if (storedName) {
          setName(storedName);
        }
      } catch (error) {
        console.error("Error retrieving name from AsyncStorage:", error);
      }
    };

    getNameFromStorage();
  }, []);

  const submitHandler = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      setIsEdit(false);
    } catch (error) {
      console.error("Error saving name to AsyncStorage:", error);
    }
  };

  const changeHandler = (value) => {
    setName(value);
  };

  return (
    <View>
      <View
      style={styles.profile}
      >
        <Image 
        source={Default_profile} 
        style={styles.profile}
        />
      </View>
      {isEdit ? (
        <View>
          <TextInput value={name} onChangeText={changeHandler} />
          <Button onPress={submitHandler} title="전송" />
        </View>
      ) : (
        <View>
          <Text
          style={{fontSize: 20}}
          >{name}</Text>
          <TouchableOpacity onPress={() => setIsEdit(true)}>
            <View style={{ width: 30, height: 30 }}>
              <FontAwesomeIcon icon={faPenToSquare} size={30} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <CurrentConnect />
    </View>
  );
};
