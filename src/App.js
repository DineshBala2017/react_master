import React, {useState} from "react";
//Styles
import "./styles/App.scss"
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./utils/util-data"
import Libraryset from "./components/Libraryset";
import Nav from "./components/Nav";


function App() {
  
  const [songs , setsongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isPlaying , setisPlaying] = useState(false);
  const [libraraystate , setlibraryState] = useState(false);
  return (
    <div className="App">
     <Nav libraraystate={libraraystate} setlibraryState={setlibraryState}/>
     <Song currentSong={currentSong} />
     <Player isPlaying={isPlaying} 
     setisPlaying ={setisPlaying} 
     currentSong={currentSong} 
     songs={songs}
     setcurrentSong={setcurrentSong}
     setsongs={setsongs}/>
     <Libraryset songs={songs}
      setcurrentSong={setcurrentSong}
      setsongs={setsongs}
      libraraystate={libraraystate} setlibraryState={setlibraryState}/>
    </div>
  );
}

export default App;
