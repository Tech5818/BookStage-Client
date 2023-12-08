import axios from "axios"

const postSearchBooks = async (searchInput) => {
    const { data: { data } } = await axios.post("https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/book/search/all", { bookName: searchInput });

    return data;
}

export default postSearchBooks;