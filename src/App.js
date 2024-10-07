import React, { useRef, useState } from "react";
import Canvas from "./Canvas";


const App = () => {
  const [input, setInput] = useState("");
  const [textinput ,setTextInput] = useState("")
  const inputtext = useRef()

   const addtask = ()=>{
   
    setInput("")
    const text = document.getElementById("text")
     text.textContent = input
     const INPUT = text.textContent 
    setTextInput(INPUT) 
   }
  

 
  return (
    <div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:"20"
      }}
    >
      <div>
        <input
          type="text"
          placeholder="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputtext}
        ></input>

        <button onClick={addtask}>Add task</button>

        <div id='text' style={{display:"none"}}></div>
      
     </div>

    </div>
    <Canvas textinput = {textinput}     
    />
   
    </div>
  );
};

export default App;

  /* <img src='' alt='img'></img> */

