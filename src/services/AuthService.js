import axios from "axios"
import API_URL from "./constants"

const LoginService = ({email, password}) => {
    return axios.post(API_URL + "/auth/login", {email, password}); //Gọi api: http://localhost:8080/api/v1/auth/login
}

export {
    LoginService,
}