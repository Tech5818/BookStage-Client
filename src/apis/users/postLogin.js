import axios from "axios";

const postLoginHandler = async (email, password) => {
    const { data: { data } } = await axios.post('https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/user/login', { email, password });

    return data;
}

export default postLoginHandler;