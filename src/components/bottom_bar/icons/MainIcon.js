import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor, UnActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const MainIcon = ({selcted}) => {
    return(
        <FontAwesomeIcon
            icon={faHouse}
            color={selcted ? ActiveIconColor : UnActiveIconColor}
            size={IconsSize}
        />
    )
}