import React,{useState} from 'react'
import VideoList from '../components/videoList'
import {Videos} from '../data/index'
import Modal from '../components/Modal'

const VideoWatch = () => {



  const [selectedVideo,setSelectedVideo] = useState(null);
  const [suggested,setSuggested] = useState([]);
  const [openModal,setOpenModal] = useState(false);
  console.log(suggested)
  // console.log(openModal)

  const showList = () =>{
    return  <div style={{background:"linear-gradient(to left, #e84614, #000000)"}}  className="">
    <div className="upper"></div>
    <div className="container wrap-reels">
       {Videos.map((video)=>(
         <VideoList key={video.id} setOpenModal={setOpenModal} selected={selectedVideo} setSelectedVideo={setSelectedVideo} setSuggested={setSuggested} video={video} />
       ))}
    </div>
  </div>
  }

  if(!openModal){
    return showList()
  }
  else{
    return <Modal suggested={suggested} setVideo={setSelectedVideo} video={selectedVideo} closeModal={setOpenModal} />
  }
 
}

export default VideoWatch