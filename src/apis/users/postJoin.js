import axios from "axios"

const postJoinHandler = async (email, password) => {
    const response = await axios.post("https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/user/join", {
        email, password
    });

    console.log(response);
}

export default postJoinHandler;