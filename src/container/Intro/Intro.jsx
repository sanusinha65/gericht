import React from "react";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import "./Intro.css";
import { meal } from "../../constants";
const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVide) => !prevPlayVide);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
  <div className="app__video">
    <video
      src={meal}
      ref={vidRef}
      type="video/mp4"
      Loop
      controls={false}
      muted
    />
    <div className="app__video-overlay flex__center">
      <div
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
      >
        {playVideo ? 
          <BsPauseFill color="white" fontSize={30} />
         : 
          <BsFillPlayFill color="white" fontSize={30} />
        }
      </div>
    </div>
  </div>
  )
};

export default Intro;
