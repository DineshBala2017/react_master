import React , {useRef, useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleRight,faAngleLeft,faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({setsongs,currentSong , setisPlaying , isPlaying , setcurrentSong, songs}) => {

    //UseState

    const [songtime , setsongtime] = useState(
        {
            currentTime:0,
            duration:0
        }
    )

    //UseEffect

    useEffect (async() =>{
        
        const setactive = songs.map((song) => {
            if(song.id===currentSong.id){
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
    }, [currentSong]);
    

    //UseRef
    const audioref = useRef(null);

    //Events

    const Onplayhandler = async () =>{
        if(isPlaying)
        {
            audioref.current.pause();
            await setisPlaying(!isPlaying);
        }
        else
        {
            audioref.current.play();
            await setisPlaying(!isPlaying);
        }
    }

    const Ontimeduration = (e) => {
        const currentTime = e.target.currentTime;
        const duration =  e.target.duration;
        setsongtime({...setsongtime, currentTime: currentTime , duration:duration})

    }

    const timeevent = (time) => {
        return(Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2));
    }

    const onDrageventHandler = (e) => {
        audioref.current.currentTime = e.target.value;
        setsongtime({...setsongtime, currentTime:e.target.value})
    }

    const onloadeddata = () =>{
        if (isPlaying) {
            audioref.current.play();
    }
}

const skiphandler =async (direction) =>
{
let currentIndex = songs.findIndex((song)=>song.id === currentSong.id)
if(direction==='forward')
{
await setcurrentSong(songs[(currentIndex + 1) % songs.length]);
}
if(direction==='back')
{
    if(currentIndex===0)
    {
    await setcurrentSong(songs[songs.length-1]); 
    }
    else{
    await setcurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
}
}

    return(
    <div className="player-container">
        <div className="time-control">
            <p>{timeevent(songtime.currentTime)}</p>
            <input 
            min ={0}
            max={Ontimeduration.duration || 0.00}
            value={Ontimeduration.currentTime}
            onChange={onDrageventHandler}
            type="range"/>
            <p> {songtime.duration ? timeevent(songtime.duration) : '0.00'}</p>
            </div>
        <div className="play-control">
        <FontAwesomeIcon onClick={()=>skiphandler('back')}className="play-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick ={Onplayhandler} className="play" size="2x" icon={
            isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon onClick={()=>skiphandler('forward')} className="play-forward" size="2x" icon={faAngleRight} />
        </div>  
        <audio 
        onTimeUpdate={Ontimeduration} 
        onLoadedMetadata={Ontimeduration}
        onLoadedData ={onloadeddata}
        ref= {audioref} 
        src={currentSong.audio}> </audio>
        </div>
    )};

export default Player;