import React from "react";
import videoBg from '../../assets/VideoBackground.mp4';
import './style.css'

const Video = props => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
      };
  return (
    <> 
        <div className="loading" style={{ opacity: isVideoLoaded ? 1 : 0 }}></div>
        <video src={videoBg} 
        className = 'mt-20 sm:mt-0 md:mt md:w-full md:h-full object-contain md:object-cover ' 
        autoPlay
        muted
        loop
        playsInline
        />   
        <div className=" w-screen h-screen z-50 flex items-center align-middle justify-center" >
            <div id="loading"></div>
        </div>
    </>
  );
};

export default Video; 