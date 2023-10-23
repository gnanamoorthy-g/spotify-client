import React, { useState } from "react";
import Controls from "./controls";
import Progress from "./playProgress";
import { sendRequest } from "../../apiController";
import './player.scss'

const Player = () => {
    const [nowPlaying, setNowPlaying] = useState(null);

    return (
        <div className="flex full-ht player">
            <div className="stub"></div>
            <div className="controls">
                <div>
                    <Controls 
                        setNowPlaying={setNowPlaying}
                    />
                    <Progress />
                </div>
            </div>
            <div className="accessories"></div>
        </div>
    )
}

export default Player;