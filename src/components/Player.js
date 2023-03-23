const Player = () => {
    return (
        <div className="player">
            <h1>Player</h1>
            <div className="time-control">
                <p>start time</p>
                <input type='range'></input>
                <p>end time</p>
            </div>
        </div>
    )
}
export default Player