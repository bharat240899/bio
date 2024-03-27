// Home.js
import React from 'react';
import MainBanner from '../components/Main_Banner';
import Messages from '../contents/Messages';
import '../css/common_styles.css'; // Note: Use single quotes around the file path
import TechnicalSkills from '../components/Skills';
import MediaGrid from '../components/MediaGrid';
import Dartboard from '../assets/Dartboard.mp4';
import MultiGrid from '../components/MultiGrid';
import Links from '../redirects/Links';
import ReadyRefresh from '../assets/ReadyRefresh.mp4'; // Import your video source
import Coke from '../assets/Coke.mp4'; // Import your video source

const Home = () => {
    const { title, description } = Messages.homepage.mainbanner;
    const classNames = {
        heading1: 'primary-gradient text-center',
        descriptive_text: "text-center text-white"
    };

    //Extract data from Messages
    const mediaTitle = Messages.homepage.gridbanner.title;
    const mediaDescription1 = Messages.homepage.gridbanner.description1;
    const mediaDescription2 = Messages.homepage.gridbanner.description2;
    // Concatenate the two descriptions into a single string
    const mediaDescription = `${mediaDescription1} ${mediaDescription2}`;
    const { title1, description1, title2, description2 } =  Messages.homepage.gridbanner.project;
    const { readyRefresh, CokeGam } = Links;
    
    return (
        <>
            <MainBanner title={title} description={description} classNames={classNames} typewriter={true} />
            <TechnicalSkills />
            <MediaGrid
                mediaType='video'
                mediaSource={Dartboard} // Pass the video source dynamically
                mediaTitle={mediaTitle} // Pass the video title dynamically
                mediaDescription={mediaDescription} 
                headingClasses='secondary-gradient'
                // Pass the combined video description dynamically
            />
            <MultiGrid 
            redirectUrl1={readyRefresh} 
            redirectUrl2={CokeGam}
            mediaType='video'
            mediaData1={ReadyRefresh}
            mediaData2={Coke}
            title1={title1}
            title2={title2}
            description1={description1}
            description2={description2}
            btnText1='See live'
            btnText2='See Live'
            btnClasses='btn-gradient'
            />
        </>
    );
};

export default Home;
