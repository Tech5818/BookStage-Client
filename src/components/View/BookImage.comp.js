import { Image } from "react-native"
import ViewScreenStyle from "../../styles/View/View.style"

const BookImage = (props) => {
    return <Image source={{ uri: props.source }} style={ViewScreenStyle.bookImage} />
}

export default BookImage;