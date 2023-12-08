import axios from "axios"

const getLibrarianBooksData = async () => {
    const response = await axios.get("https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/book/librarian");

    console.log(response);
}

export default getLibrarianBooksData;