import axios from "axios"

const getRecommendBooksData = async () => {
    const { data: { data: { response: { results: { result } } } } } = await axios.get("https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/book/recommend");
    result.shift();

    return result;
}

export default getRecommendBooksData;