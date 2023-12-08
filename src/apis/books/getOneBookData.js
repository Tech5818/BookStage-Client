import axios from "axios"

const getOneBookData = async (bookName) => {
    const bookData = await axios.post("http://ec2-13-125-232-69.ap-northeast-2.compute.amazonaws.com:3000/book/search", {
        bookName
    });

    return bookData.data;
}

export default getOneBookData;