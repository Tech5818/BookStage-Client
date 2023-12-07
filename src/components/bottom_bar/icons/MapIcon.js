import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor, UnActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const MapIcon = ({selected}) => {
    return(
        <FontAwesomeIcon
            icon={faMap}
            color={selected ? ActiveIconColor : UnActiveIconColor}
            size={IconsSize}
        />
    )
}