import axios from "axios"

const getOneBookData = async (bookName) => {
    const bookData = await axios.post("https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/book/search", {
        bookName
    });

    return bookData.data;
}

export default getOneBookData;