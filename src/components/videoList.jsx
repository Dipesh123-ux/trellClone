import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player'
import {Videos} from '../data/index'

const videoList = ({video,setSelectedVideo,setOpenModal,setSuggested}) => {
  const handleClick = ()=>{
    setSelectedVideo(video);
    setOpenModal(true);
    let suggested = Videos;
    suggested = suggested.filter(v=>v.category === video.category)
    setSuggested(suggested)
  }
  return (
    <div className="long-video" style={{cursor:"pointer"}}  onClick={handleClick}>
      
      <HoverVideoPlayer className="video-design" videoSrc={video.src}/>
  

        <div className="p-2 text-wrap">
            <p className="text-white" >{video.title}</p>
        </div>
    </div>
  )
}

export default videoList