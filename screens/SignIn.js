import React from "react";
import styled from "styled-components/native";
import { SignInForm } from "../components/SignInForm";

export const SignIn = () => {
    return(
        <>
            <Container>
                <SignInForm/>
            </Container>
        </>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;