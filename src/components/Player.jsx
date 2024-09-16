import { useState,useRef } from "react";


export default function Player() {
  const inputName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState('');
  function handleClick(){
    setEnterPlayerName(inputName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ? enterPlayerName:'unknow entity'}</h2>
      <p>
        <input type="text" 
        ref={inputName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
      
    </section>
  );
}
