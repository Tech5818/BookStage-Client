import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const FeedIcon = () => {
    return(
        <FontAwesomeIcon
            icon={faHashtag}
            color={ActiveIconColor}
            size={IconsSize}
        />
    )
}