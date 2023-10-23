import axios from "axios";
//require('dotenv').config();


export const fetchAccessToken = async () => {
    const postData = new URLSearchParams({
        grant_type: "client_credentials",
        // client_id: client_id,
        // client_secret: client_secret
    });
    const TOKEN_RESPONSE = await axios.post('https://accounts.spotify.com/api/token',
        postData,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    );
    document.cookie=`token=${TOKEN_RESPONSE.data.access_token};expires=${TOKEN_RESPONSE.data.expires_in};token_type=${TOKEN_RESPONSE.data.token_type}`;
}

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export const getAccessToken = () =>{
    return getCookie('token') || null
}

export const fetchSong = () =>{

}