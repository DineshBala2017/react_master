
import React from 'react';
import LibrarySong from './LibrarySong';

const Libraryset = ({songs,setsongs,setcurrentSong,libraraystate}) => {



    return(
        <div className={`library ${libraraystate ? 'set-library' : ''}`} >
            <h2>Library</h2>
            <div className="lib">
              {songs.map ((song) => (
                  <LibrarySong songs={songs} 
                  setcurrentSong={setcurrentSong} 
                  setsongs={setsongs}
                  song={song}
                  id={song.id} 
                  key={song.id}/>
              ))}
                  
            </div>
        </div>
    )};

    export default Libraryset;
