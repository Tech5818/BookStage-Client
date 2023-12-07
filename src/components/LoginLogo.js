import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export const LoginLogo = () => {
    return(
        <>
            <Container>
                <LogoTitle>
                    Book
                </LogoTitle>
                <LogoSubTitle>
                    Stage
                </LogoSubTitle>
            </Container>
        </>
    )
}

const Container = styled(View)`
    display: flex;
    align-items: center;
`;
const LogoTitle = styled(Text)`
    font-weight: bold;
    font-size: 64px;
`;
const LogoSubTitle = styled(Text)`
    font-weight: bold;
    font-size: 48px;
    color: #EC9C1D;
`;