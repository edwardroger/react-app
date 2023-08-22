import API_URL from "./constants";
import axios from "axios";

const GetListUserService = async () => {
    return await axios.get(API_URL + '/user');
}

export {
    GetListUserService,
}