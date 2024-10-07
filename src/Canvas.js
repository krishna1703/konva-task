import React from 'react'
import {  Layer, Stage, Text } from "react-konva";

const Canvas = ({textinput}) => {

   

  return (
    <div style={{ width: "500px" }}>
  

        <Stage
          width={window.innerWidth}
          height={500}
          style={{ backgroundColor: "gray" }}
        >
          <Layer>
       
           
            <Text text={textinput} fontSize={20} padding={20} />
       <video></video>
          </Layer>
        </Stage>
      </div>
  )
}

export default Canvas;