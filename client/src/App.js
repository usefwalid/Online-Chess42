import { useState } from "react";
import Landingpage1 from "./landingpage1";
import Room from "./room";
import './App.css';




function App() {
  const [Url,seturlcopied] = useState('');


  const enterRoom = (name) => {
    seturlcopied(name);
  };
  const leaveRoom = () => {
    seturlcopied('');
  };

  const joinRoom = (name) => {
    seturlcopied(name);
  };

  return (
    <div>
      {!Url && <Landingpage1 joinRoom={joinRoom} createRoom={enterRoom} />}    
      {Url && <Room handleSwitchup={leaveRoom} room={Url}/>}    

    </div>
  );
}

export default App;
