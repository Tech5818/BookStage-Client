import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const ChartIcon = () => {
    return(
        <FontAwesomeIcon
            icon={faChartSimple}
            color={ActiveIconColor}
            size={IconsSize}
        />
    )
}