import React from "react";
import { TRACK } from "../../constants/apiRoutes";
import { sendRequest } from "../../apiController";

const Controls = (props) => {
    const {
        setNowPlaying
    } = props;

    const TRACK_ID = '11dFghVXANMlKmJXsNCbNl'

    const onClickPlay = () =>{
        const trackResponse = sendRequest('get',TRACK,TRACK_ID);
        trackResponse
        .then(response =>{
            setNowPlaying(response.data);
        })
        .catch((error) =>{
            console.log(error,"error");
        });
    }

    return (
        <div className="flex just-cont-center">
            <div></div>
            <div></div>
            <div className="play" onClick={onClickPlay}>
                <span class="material-symbols-outlined">play_arrow</span>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Controls;