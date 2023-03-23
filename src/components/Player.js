import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight, faPlay} from "@fortawesome/free-solid-svg-icons"

const Player = () => {
    return (
        <div className="player">
                    <div className="time-control">
                <p>start time</p>
                <input type='range'></input>
                <p>end time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
}
export default Player