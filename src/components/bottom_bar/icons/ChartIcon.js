import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { ActiveIconColor, UnActiveIconColor } from "./color/Color";
import { IconsSize } from "./size/Size";

export const ChartIcon = ({selected}) => {
    return(
        <FontAwesomeIcon
            icon={faChartSimple}
            color={selected ? ActiveIconColor : UnActiveIconColor}
            size={IconsSize}
        />
    )
}