import React, { useState, useEffect } from 'react';
import MainBanner from '../components/Main_Banner';
import Messages from '../contents/Messages';
import Footer from '../layout/Footer'; // Import Footer component
import '../css/common_styles.css'; // Note: Use single quotes around the file path

const Home = () => {
    const { title, description } = Messages.homepage.mainbanner;
    const classNames = {
        heading1: "gradient-text text-center",
        descriptive_text: "text-center"
    };
    //Refactor pending
    // State variable to hold the typed text
    const [typedDescription, setTypedDescription] = useState('');

    useEffect(() => {
        const textToType = description;
        let currentIndex = 0;
        const interval = setInterval(() => {
            setTypedDescription(textToType.substring(0, currentIndex));
            currentIndex++;
            if (currentIndex > textToType.length) {
                clearInterval(interval);
            }
        }, 30); // Typing speed (milliseconds per character)

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
    }, [description]); // Dependency array ensures effect runs when description changes

    return (
        <>
            <MainBanner title={title} description={typedDescription} classNames={classNames} />
            <Footer /> {/* Include Footer component here */}
        </>
    );
};

export default Home;
