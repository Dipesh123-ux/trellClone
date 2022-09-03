import React from 'react'

const LandingImage = ({src,head,content,color}) => {
  return (
    <div style={{height:"100%",background:`url(${src})`,backgroundSize:"cover",}} className="" >
        <div className="head">{head}</div>
        <div className="inner-content w-25">{content}</div>
        <div className="ani-btn"></div>
    </div>
  )
}

export default LandingImage