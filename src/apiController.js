import axios from "axios";
import { BASE_URL } from "./constants/environment";
import { getAccessToken } from "./utils/utilFunctions";
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

    }
    const token = getAccessToken();
    if(!token){
        console.log("Token unavailable");
        return;
    }
    let requestConfig = constructRequestConfig(requestUrl,method,token)

    return axios(requestConfig)

}