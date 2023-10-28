import axios from "axios";
import { BASE_URL } from "./constants/environment";
import { getAccessToken } from "./utils/utilFunctions";
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

export const sendRequest = (method = "get",type = TRACK, id = null,searchParams=null,searchType = null) =>{
    if(!type) return;
    if(type === SEARCH && !searchParams) return;
    if(type !== SEARCH && !id) return;

    let requestUrl;
    if(type !== SEARCH){
        requestUrl = `${type}/${id}`
    }
    else{
        //Search to be implemented;
    }
    const token = getAccessToken();
    if(!token){
        console.log("Token unavailable");
        return;
    }
    let requestConfig = constructRequestConfig(requestUrl,method,token);
    return axios(requestConfig);
}

export const authorizeApp = () =>{
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