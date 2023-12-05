import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TextInput, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");

export const SignInForm = () => {
    const [id, setId] = useState();

    return(
        <>
            <Container>
                <IdInput
                    onPress={(inputValue) => {
                        setId(inputValue);
                    }}
                    value={id}
                />
            </Container>
        </>
    )
}

const Container = styled.View`
    align-items: center;
`;
const IdInput = styled(TextInput)`
    width: ${width * 0.6}px;
    elevation: 2;
    background: #fff;
    padding: 8px 15px;
    border-radius: 50px;
    font-size: 16px;
`;