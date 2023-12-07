import axios from "axios"

const getLibraryLocation = async () => {
    const { data: { data } } = await axios.get("https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/book/library");

    const locationArray = [];

    for (let library of data) {
        const { XCNTS, YDNTS, LBRRY_NAME, LBRRY_SE_NAME } = library;
        locationArray.push({ latitude: XCNTS, longitude: YDNTS, name: LBRRY_NAME, desc: LBRRY_SE_NAME });
    }

    return locationArray;
}

export default getLibraryLocation;