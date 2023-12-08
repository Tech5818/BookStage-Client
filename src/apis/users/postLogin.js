import axios from "axios";

const postLoginHandler = async (email, password) => {
    const response = await axios.post('https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/user/login');

    console.log(response);
}

export default postLoginHandler;