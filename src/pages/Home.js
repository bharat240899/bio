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
import Experience from '../components/Experiences';
import PageTitle from '../components/Pagetitle';
import BioPic from '../assets/BioPic.jpg';
import Layout from '../components/Layout';

const Home = () => {
    const pageTitle = 'page-home'
    const { title, description } = Messages.homepage.maingrid_banner;
    const { promo_title, promo_description } = Messages.homepage.promobanner
    const classNames = {
        heading1: 'primary-gradient text-center',
        descriptive_text: "text-white",
        textAlignment: 'text-center bg-dark p-5',
        btnClasses: 'btn-gradient'
    };
    const btnClasses = 'btn-gradient'


    // Extract data from Messages
    const mediaTitle = Messages.homepage.gridbanner.title;
    const mediaDescription1 = Messages.homepage.gridbanner.description1;
    const mediaDescription2 = Messages.homepage.gridbanner.description2;
    // Concatenate the two descriptions into a single string
    const mediaDescription = `${mediaDescription1} ${mediaDescription2}`;
    const { title1, description1, title2, description2 } = Messages.homepage.gridbanner.project;
    const { readyRefresh, CokeGam } = Links;
    const { header, data } = Messages.homepage.experiences;


    return (
        <PageTitle pageName={pageTitle}>
            <Layout>
                <MediaGrid
                    headingClasses='primary-gradient'
                    mediaTitle={title}
                    mediaDescription={description}
                    mediaType='image' mediaSource={BioPic}
                    button={true}
                    btnText='Contact Now'
                    btnClasses={btnClasses}
                    mediaOnRight='false'
                    srcUrl={'/contact'}
                    typewriter={true}
                    primaryHeader={true}
                    externalredirect={false}
                />
                <TechnicalSkills />
                <MainBanner
                    title={promo_title}
                    description={promo_description}
                    classNames={classNames}
                    primaryHeader={false}
                    button={'View Services'}
                    btnClasses={'btn-gradient'}
                    srcUrl={'/services'} />
                <MediaGrid
                    mediaType='video'
                    mediaSource={Dartboard} // Pass the video source dynamically
                    mediaTitle={mediaTitle} // Pass the video title dynamically
                    mediaDescription={mediaDescription}
                    headingClasses='primary-gradient'

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
                    btnText1='Visit Site'
                    btnText2='Visit Site'
                    btnClasses={btnClasses}
                    compTitle='Live Projects'
                    headingClasses='primary-gradient'
                />
                <Experience header={header} data={data} />
            </Layout>
        </PageTitle>
    );
};

export default Home;
