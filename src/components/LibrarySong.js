import React from 'react';

const LibrarySong = ({song,setsongs,setcurrentSong,songs,id,keys}) => {
    const setsongHandler= async () =>
    {
        const setsong = songs.filter((state)=>state.id===id)
       await setcurrentSong(setsong[0]);
        const setactive = songs.map((song) => {
            if(song.id===id){
            return{
            ...song,
            active:true,
            };
        }
        else{
            return {
                ...song,
                active:false,
            };
        }
        
        });
        await setsongs(setactive);
    }
    return(
        <div  onClick= {setsongHandler} className={`librarySong ${song.active ? "selected" : ""}`}>
          <img alt={song.name}
            src={song.cover}>
            </img>
            <div className="song-details">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>             
            </div>
        </div>
    )};

    export default LibrarySong;