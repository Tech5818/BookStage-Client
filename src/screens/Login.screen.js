import { ScrollView, View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import { LoginStyle } from "../styles/Login/Login.style";
import { useState } from "react";
<<<<<<< HEAD
import postLoginHandler from "../apis/users/postLogin";
=======
import { useNavigation } from "@react-navigation/core";
>>>>>>> e90bb97749bc31ef1b36055f4dffc8051d9752ab

const LoginScreen = () => {
    const navigator = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const SubmitLoginHandler = async () => {
        const data = await postLoginHandler(email, password);
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
<<<<<<< HEAD
                    <TouchableOpacity style={LoginStyle.Button}>
                        <Text style={LoginStyle.ButtonText} onPress={SubmitLoginHandler}>
                            로그인
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={LoginStyle.Button}>
                        <Text style={LoginStyle.ButtonText}>
                            회원가입
                        </Text>
                    </TouchableOpacity>
=======
                        <TouchableOpacity style={LoginStyle.Button}>
                            <Text style={LoginStyle.ButtonText}>
                                로그인
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={LoginStyle.Button}
                            onPress={() => {
                                navigator.navigate("Join");
                            }}
                        >
                            <Text style={LoginStyle.ButtonText}>
                                회원가입
                            </Text>
                        </TouchableOpacity>
>>>>>>> e90bb97749bc31ef1b36055f4dffc8051d9752ab
                </View>
            </View>
            <View style={LoginStyle.DesignFirstLine}></View>
            <View style={LoginStyle.DesignSecondLine}></View>
        </ScrollView>
    )
}

export default LoginScreen;