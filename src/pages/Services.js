import React from 'react';
import MainBanner from '../components/Main_Banner';
import Messages from '../contents/Messages';
import Technology from '../assets/Technology.jpg';
import PageTitle from '../components/Pagetitle';
import Cards from '../components/Cards';
import Layout from '../components/Layout';
const Services = () => {
  const pageTitle = 'page-Services';
  const { title, description } = Messages.services.mainbanner;
  const classNames = {
    heading1: 'Intro-text colour-transistion',
    descriptive_text: 'text-white',
    btnClasses: 'btn-gradient'
  };
  const cardsData = Messages.services.cardsData
  return (
    <>
      <PageTitle pageName={pageTitle}>
        <Layout>
          <MainBanner
            title={title}
            description={description}
            classNames={classNames}
            textOverlay={true}
            image={Technology}
            typewriter={true}
            button='Contact now'
            srcUrl='/contact'
          />
          <Cards cardsData={cardsData} CardTitle='Services' />
        </Layout>
        {/* Call MainBanner component with specified props */}
      </PageTitle>
    </>
  );
};

export default Services;
