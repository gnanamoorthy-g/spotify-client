import axios from "axios";
import { BASE_URL } from "./constants/environment";
import { getAccessToken,getCookie,getAuthToken } from "./utils/utilFunctions";
import { AUTHORIZATION_URI,SCOPE,CLIENT_ID,REDIRECT_URI } from "./constants/environment";
import { TRACK,ALBUM,ARTIST,PLAYLIST,SEARCH } from "./constants/apiRoutes";

const constructRequestConfig = (url,method,token) =>{
    return {
        url,
        method,
        baseURL : BASE_URL,
        headers: { Authorization: `Bearer ${token}` }
    }
}

export const sendRequest = (resourceUrl,isSearch = false,searchParams=null) =>{
    let requestUrl;
    if(isSearch){
        //Search to be implemented;
    }
    else{
        requestUrl = resourceUrl;
    }
    let token;
    token = getAuthToken();
    if(!token) token = getAccessToken();
    if(!token){
        console.log("Token unavailable");
        return;
    }
    let requestConfig = constructRequestConfig(requestUrl,'get',token);
    return axios(requestConfig);
}

export const authorizeApp = () =>{
    const authorization_key = getCookie('authorization_key');
    if(authorization_key) return;
    const width = 900;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const urlParams = new URLSearchParams({
        response_type : 'code',
        client_id : CLIENT_ID,
        scope : SCOPE,
        redirect_uri : REDIRECT_URI,
    });
    const endUrl = `${AUTHORIZATION_URI}?${urlParams.toString()}`;
    window.location.href = endUrl;
    //const target = 'authorize-app'
    //const windowFeatures = `toolbar=no, location=no, directories=no, status=no, menubar=no,popup=${true},width=${width},height=${height},left=${left},top=${top}`;
    //window.open(endUrl,target,windowFeatures);
}