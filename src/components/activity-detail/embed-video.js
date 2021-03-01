import React from "react"
import ReactPlayer from "react-player"

function App(props) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={props.url}
        width = '100%'
        //height = '100%'
      />
    </div>
  )
}

export default App