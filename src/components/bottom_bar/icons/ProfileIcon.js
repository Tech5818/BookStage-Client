import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor, UnActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const ProfileIcon = ({selected}) => {
    return(
        <FontAwesomeIcon
            icon={faUser}
            color={selected ? ActiveIconColor : UnActiveIconColor}
            size={IconsSize - 2}
        />
    )
}