import { TouchableOpacity, Text } from "react-native";
import { FeedIcon } from "../icons";
import { BottomBarStyle } from "../../../styles/BottomBar/BottomBar.style";

export const Feed = ({text, value, isSelect, setSelect}) => {

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
    }
    return(
        <TouchableOpacity onPress={handelSelcted} style={BottomBarStyle.BottomMenu}>
            <FeedIcon selected={isSelect[value]}/>
            <Text style={isSelect[value] ? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal"}}>{text}</Text>
        </TouchableOpacity>
    )
}