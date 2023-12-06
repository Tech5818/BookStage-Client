import axios from "axios"

const getOneBookData = async (bookName) => {
    const bookData = await axios.post("http://192.168.200.116:3000/book/search", {
        bookName
    });

    return bookData.data;
}

export default getOneBookData;