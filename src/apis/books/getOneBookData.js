import axios from "axios"

const getOneBookData = async (bookName) => {
    const bookData = await axios.post("http://10.246.158.175:3000/book/search", {
        bookName
    });

    return bookData.data;
}

export default getOneBookData;