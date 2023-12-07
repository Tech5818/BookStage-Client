import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TextInput, Dimensions } from "react-native";
import { LoginLogo } from "./LoginLogo";

const {width, height} = Dimensions.get("window");

export const SignInForm = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return(
        <>
            <Container>
                <IdInput
                    onPress={(inputValue) => {
                        setId(inputValue);
                    }}
                    placeholder="아이디(이메일)"
                    value={id}
                />
                <PasswordInput
                    onPress={(inputValue) => {
                        setPassword(inputValue)
                    }}
                    placeholder="비밀번호"
                    value={password}
                    secureTextEntry={true}
                />
                <ConfirmPasswordInput
                    onPress={(inputValue) => {
                        setConfirmPassword(inputValue);
                    }}
                    placeholder="비밀번호 확인"
                    value={confirmPassword}
                    secureTextEntry={true}
                />
            </Container>
        </>
    )
}

const Container = styled.View`
    background: #fff;
    border-radius: 10px;
    width: ${width * 0.8}px;
    align-items: center;
    padding: 20px;
`;
const IdInput = styled(TextInput)`
    width: ${width * 0.65}px;
    padding: 8px 0;
    borderBottomWidth: 0.5px;
    borderBottomColor: #aaa;
    font-size: 16px;
`;
const PasswordInput = styled(IdInput)`

`;
const ConfirmPasswordInput = styled(PasswordInput)`

`;