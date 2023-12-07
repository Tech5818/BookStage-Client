import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const ProfileIcon = () => {
    return(
        <FontAwesomeIcon
            icon={faUser}
            color={ActiveIconColor}
            size={IconsSize}
        />
    )
}