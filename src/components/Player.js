import {useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight, faPlay} from "@fortawesome/free-solid-svg-icons"

const Player = ( {currentSong}) => {

    const audioRef = useRef(null)

    const playSongHandler = () => {
        audioRef.current.play()

    }
    return (
        <div className="player">
                    <div className="time-control">
                <p>start time</p>
                <input type='range'></input>
                <p>end time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio src={currentSong.audio} ref={audioRef} />
        </div>
    )
}
export default Player