import { TouchableOpacity, Text } from "react-native";
import { MapIcon } from "../icons";
import { BottomBarStyle } from "../../../styles/BottomBar/BottomBar.style";
import { useNavigation } from "@react-navigation/core";

export const Map = ({text, value, isSelect, setSelect}) => {
    const natigation = useNavigation();

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
        natigation.navigate("Map");
    }
    return(
        <TouchableOpacity onPress={handelSelcted} style={BottomBarStyle.BottomMenu}>
            <MapIcon selected={isSelect[value]}/>
            <Text style={isSelect[value] ? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal"}}>{text}</Text>
        </TouchableOpacity>
    )
}