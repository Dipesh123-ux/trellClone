import React,{useState} from 'react'
import HoverVideoPlayer from 'react-hover-video-player'

const Modal = ({ video, closeModal ,setVideo,suggested}) => {
  const [viideo,setViideo] = useState(video)
  return (
    <div className="background">
      <div className="modal-wrapper">
        <video src={viideo.src} controls className="m-4 modal-video"></video>
        <div className="modal-content d-flex flex-column">
          <h6 className="mt-5 ms-5 me-5">{viideo.title}</h6>
          <hr style={{ height: "4px", background: "grey" }} className="ms-5 me-5" />
          <div className="ms-5 d-flex justify-content-between" >
                <i style={{color:"white",background:"#4FCE5D",fontSize:"30px",borderRadius:"50%"}} className="fa fa-whatsapp" >

                </i>
                <h5 className="me-5">Share</h5>
          </div>
          <hr style={{ height: "4px", background: "grey" }} className="ms-5 me-5" />
          <div className="ms-5 d-flex justify-content-between" >
          <i style={{color:"red",fontSize:"30px"}}className="fa fa-heart" >
                  <a href=""></a>
                </i>
                <h5 className="me-5">Like</h5>
          </div>
          <h6 className="m-5" >Suggested trails</h6>
          <div className="suggested-reels ms-5 me-5">
             {suggested.map((v)=>(
               <div style={{cursor:"pointer"}} onClick={()=>setViideo(v)} className="short-video" > 
      
               <HoverVideoPlayer className="s-v" videoSrc={v.src}/>
               <div className="text-wrap">
                   <p style={{fontSize:"8px"}} className="m-2" >{v.title}</p>
               </div>
           </div>
             ))}
          </div>
        </div>

        <div onClick={()=>closeModal(false)} className="closebutton"><i className="fa fa-close" ></i></div>
      </div>
    </div>
  )
}

export default Modal