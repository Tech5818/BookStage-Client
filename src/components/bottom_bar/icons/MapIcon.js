import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const MapIcon = () => {
    return(
        <FontAwesomeIcon
            icon={faMap}
            color={ActiveIconColor}
            size={IconsSize}
        />
    )
}