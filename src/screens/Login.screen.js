import { ScrollView, View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import { LoginStyle } from "../styles/Login/Login.style";
import { useState } from "react";
import postLoginHandler from "../apis/users/postLogin";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ isLogin: { isLogin, setIsLogin } }) => {
    const navigator = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const storeData = async (key, data) => {
        try {
            await AsyncStorage.setItem(key, data);
            return{"success": true}
        } catch(error) {
            console.error(error);
        }
    }

    const SubmitLoginHandler = async () => {
        const data = await postLoginHandler(email, password);

        if (!!data) {
            storeData("Token", data);
            storeData("email", email);
            console.log(data);
            setIsLogin(true);
        }
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={LoginStyle.Container}>
            <Image
                source={require('../../assets/Logo.png')}
                style={LoginStyle.Logo}
            />
            <View style={LoginStyle.Form}>
                <View style={LoginStyle.InputSection}>
                    <TextInput
                        style={LoginStyle.Input}
                        onChangeText={(value) => {
                            setEmail(value);
                        }}
                        value={email}
                        placeholder="이메일을 입력해 주세요"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={LoginStyle.Input}
                        onChangeText={(value) => {
                            setPassword(value);
                        }}
                        value={password}
                        placeholder="비밀번호를 입력해 주세요"
                        secureTextEntry={true}
                    />
                </View>
                <View style={LoginStyle.ButtonSection}>
                    <TouchableOpacity style={LoginStyle.Button} onPress={SubmitLoginHandler}>
                        <Text style={LoginStyle.ButtonText} >
                            로그인
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={LoginStyle.Button} onPress={() => navigator.navigate("Join")}>
                        <Text style={LoginStyle.ButtonText}>
                            회원가입
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={LoginStyle.DesignFirstLine}></View>
            <View style={LoginStyle.DesignSecondLine}></View>
        </ScrollView>
    )
}

export default LoginScreen;