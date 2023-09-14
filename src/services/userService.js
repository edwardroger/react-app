import API_URL from "./constants";
import axios from "axios";

const GetListUserService = async () => {
    return await axios.get(API_URL + '/user');
}

const GetUserDetailService = (token, string) => {
    return axios.get(API_URL + '/user/detail', {headers: { Authorization: 'Bearer ' + token}})
        .then((result) => result)
        .catch((err) => console.log(err));
}

export {
    GetListUserService,
    GetUserDetailService,
}