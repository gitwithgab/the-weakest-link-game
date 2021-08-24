import Sound from "react-sound";
import BgMusic from "../assets/media/welcomeAudio.mp3";

import React from 'react'

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    return (
        <div>
            <Sound 
                url={BgMusic} 
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishPlaying={handleSongFinishedPlaying}/>
        </div>
    )
}

export default PlaySound
