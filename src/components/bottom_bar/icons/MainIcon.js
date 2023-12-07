import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const MainIcon = () => {
    return(
        <FontAwesomeIcon
            icon={faHouse}
            color={ActiveIconColor}
            size={IconsSize}
        />
    )
}