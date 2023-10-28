import axios from "axios";
import { CLIENT_ID,CLIENT_SECRET,FETCH_TOKEN_URI,REDIRECT_URI } from "../constants/environment";
import { USER_PROFILE } from "../constants/apiRoutes";
import { sendRequest } from "../apiController";

export const fetchAccessToken = async () => {
    const postData = new URLSearchParams({
        grant_type: 'client_credentials',
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
};

export const fetchUserAccessToken = async () => {
    const authorization_code = getCookie('authorization_key');;
    const postData = new URLSearchParams({
        grant_type: 'authorization_code',
        code : authorization_code,
        redirect_uri : REDIRECT_URI
    });
    try {
        const TOKEN_RESPONSE = await axios.post(
            FETCH_TOKEN_URI,
            postData,
            {
                headers: {
                    "content-Type": "application/x-www-form-urlencoded",
                    'Authorization': 'Basic ' + (btoa(`${CLIENT_ID}:${CLIENT_SECRET}`))
                }
            }
        );
        document.cookie = `auth_token=${TOKEN_RESPONSE.data.access_token};expires=${TOKEN_RESPONSE.data.expires_in};token_type=${TOKEN_RESPONSE.data.token_type};`;
    }
    catch (error) {
        console.log(error)
    }
}

export const fetchUserProfile = async () =>{
    try{
        const user_details = await sendRequest(USER_PROFILE);
        return user_details;
    }
    catch(error){
        console.log(error,"error")
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

export const getAuthToken = () =>{
    return getCookie('auth_token') || null
}