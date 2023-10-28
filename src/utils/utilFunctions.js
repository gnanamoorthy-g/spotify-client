import axios from "axios";
import { CLIENT_ID,CLIENT_SECRET,FETCH_TOKEN_URI,GRANT_TYPE } from "../constants/environment";

export const fetchAccessToken = async () => {
    const postData = new URLSearchParams({
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    });
    try {
        const TOKEN_RESPONSE = await axios.post(
            FETCH_TOKEN_URI,
            postData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
        document.cookie = `token=${TOKEN_RESPONSE.data.access_token};expires=${TOKEN_RESPONSE.data.expires_in};token_type=${TOKEN_RESPONSE.data.token_type};`;
    }
    catch (error) {
        console.log(error)
    }
}

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export const getAccessToken = () =>{
    return getCookie('token') || null
}