import React from "react"
import ReactPlayer from "react-player"

function App(props) {
  return (
    <div >
      <ReactPlayer
        url={props.url}
      />
    </div>
  )
}

export default App