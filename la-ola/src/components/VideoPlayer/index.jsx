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
         <div className=" w-screen h-[30vh]  md:h-[80vh] absolute flex items-center align-middle justify-center" style={{ opacity: isVideoLoaded ? 0 : 1 }} >
            <div id="loading" className="w-20 h-20 md:h-auto md:w-auto "></div>
        </div>
        <video src={videoBg} 
        className = 'mt-20 sm:mt-0 md:mt md:w-full md:h-full object-contain md:object-cover ' 
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        />   
       
    </>
  );
};

export default Video; 