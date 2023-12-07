import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button } from "react-native";
import { View, Text, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/native";


const { width, height } = Dimensions.get("window");

export const LoginForm = () => {
    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);

    const navigation = useNavigation();

    return(
        <>
            <Container>
                <InputSection>
                    <IdInputSection>
                        <FontAwesomeIcon 
                            icon={faEnvelope}
                            style={{position:"absolute",zIndex:1,left:15}}
                            size={18}
                            color="#aaa"
                         />
                        <IdInput
                            placeholder="아이디 및 이메일"
                            onChangeText={(inputText) => {
                                setId(inputText);
                            }}
                            value={id}
                        />
                    </IdInputSection>
                    <PasswordInputSection>
                        <FontAwesomeIcon 
                            icon={faLock}
                            style={{position:"absolute",zIndex:1,left:15}}
                            size={18}
                            color="#aaa"
                        />
                        <PasswordInput
                            placeholder="비밀번호"
                            secureTextEntry={true}
                            onChangeText={(inputText) => {
                                setPassword(inputText);
                            }}
                            value={password}
                        />
                    </PasswordInputSection>
                </InputSection>
                <ButtonSection>
                    <LoginButton onPress={() => {
                        console.log(id, password, width, height);
                    }}>
                        <ButtonText>
                            로그인
                        </ButtonText>
                    </LoginButton>
                    <SignInButton onPress={() => {
                        navigation.navigate('회원가입')
                    }}>
                        <ButtonText>
                            회원가입
                        </ButtonText>
                    </SignInButton>
                </ButtonSection>
                <Design/>
                <Design2/>
            </Container>
        </>
    )
}

const Container = styled.View`
    width: ${width}px;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: ${height * 0.08}px;
`;
const Input = styled.TextInput`
    width: ${width * 0.7}px;
    padding: 8px 15px 8px 40px;
    border-radius: 50px;
    background: #fff;
    elevation: 2;
    font-size: 16px;
`;
const IdInputSection = styled.View`
    position: relative;
    diaplay: flex;
    justify-content: center;
`;
const IdInput = styled(Input)`

`;
const PasswordInputSection = styled(IdInputSection)`
`;
const PasswordInput = styled(Input)`
`;
const InputSection = styled.View`
    display: flex;
    gap: 10px;
`;
const LoginButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width * 0.7}px;
    height: 45px;
    border-radius: 50px;
    background: #EC9C1D;
    elevation: 2;
`;
const SignInButton = styled(LoginButton)`
`;
const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
const ButtonSection = styled.View`
    display: flex;
    gap: 10px;
`;
const Design = styled.View`
    position: absolute;
    width: ${width*1.3}px;
    height: ${height}px;
    background: #F8AC35;
    transform: rotate(60deg);
    z-index: -2;
    bottom: -220%;
`;
const Design2 = styled(Design)`
    transform: rotate(-60deg);
    z-index: -1;
    background: #DA8C16;
    bottom: -260%;
`;