import {useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight, faPlay, faPause} from "@fortawesome/free-solid-svg-icons"

const Player = ( {currentSong, isPlaying, setIsPlaying}) => {
    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    const audioRef = useRef(null)
    // Event Handlers
    const playSongHandler = () => {
       if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(!isPlaying)
       } else {
        audioRef.current.play()
        setIsPlaying(!isPlaying)
       }
    }
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current
        , duration: duration})
    }
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    
    return (
        <div className="player">
                    <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                min={0} 
                max={songInfo.duration} 
                value={songInfo.currentTime}
                onChange={dragHandler}
                type='range'
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon 
                onClick={playSongHandler} 
                className="play" 
                size="2x"
                icon={isPlaying ? faPause : faPlay}
                
                />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio 
            onTimeUpdate={timeUpdateHandler} 
            src={currentSong.audio} 
            ref={audioRef} 
            onLoadedMetadata={timeUpdateHandler}
            />
        </div>
    )
}
export default Player