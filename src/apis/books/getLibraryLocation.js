import axios from "axios"

const getLibraryLocation = async () => {
    const { data: { data } } = await axios.get("http://ec2-13-125-232-69.ap-northeast-2.compute.amazonaws.com:3000/book/library");

    const locationArray = [];

    for (let library of data) {
        const { XCNTS, YDNTS, LBRRY_NAME, LBRRY_SE_NAME } = library;
        locationArray.push({ latitude: XCNTS, longitude: YDNTS, name: LBRRY_NAME, desc: LBRRY_SE_NAME });
    }

    return locationArray;
}

export default getLibraryLocation;