import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { LoginForm } from "../components/LoginForm";
import { LoginLogo } from "../components/LoginLogo";

export const Login = () => {
    return(
        <Container behavior="height">
            <LoginLogo/>
            <LoginForm/>
        </Container>
    )
}

const Container = styled.KeyboardAvoidingView`
    flex:1;
    justify-content: center;
    align-items: center;
    gap: 45px;
    background: #fff;
`