import React from 'react'
import "./styles/Video.css";
import videoIMG from "./../assets/images/videoImg.jpg"

const Video = (props) => {
  return (
    <div className='video-container'>
      <div className='video-border'>
        <img className='video-img' src={videoIMG}/>
        <span className='video-time'>5:00</span>
      </div>
      <div className='video-details'>
        <p className='video-details_title'>{props.title}</p>
        <p className='video-details_info'>{props.info}</p>
      </div>
    </div>
  )
}

export default Video
