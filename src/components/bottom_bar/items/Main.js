import { TouchableOpacity, Text } from "react-native";
import { MainIcon } from "../icons";
import { BottomBarStyle } from "../../../styles/BottomBar/BottomBar.style";
import { useNavigation } from "@react-navigation/core";

export const Main = ({text, value, isSelect, setSelect}) => {
    const navigation = useNavigation();

    const reverseSelect = (value) => {
        for (const key in isSelect) {
            if (key !== value) {
                isSelect[key] = false;
            }
        }
        const newIsSelect = {
            ...isSelect,
            [value]: true
        }
        setSelect(newIsSelect)
    }
    const handelSelcted = () => {
        reverseSelect(value);
        navigation.navigate("Home")
    }
    return(
        <TouchableOpacity onPress={handelSelcted} style={BottomBarStyle.BottomMenu}>
            <MainIcon selcted={isSelect[value]}/>
            <Text style={isSelect[value] ? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal"}}>{text}</Text>
        </TouchableOpacity>
    )
}