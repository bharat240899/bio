
import React from 'react';
import ContactForm from '../components/ContactForm';
import MainBanner from '../components/Main_Banner';
import PageTitle from '../components/Pagetitle';
import Messages from '../contents/Messages';
import Team from '../assets/Teamm.jpg';
import '../css/common_styles.css';
import Layout from '../components/Layout';

const Contact = () => {
  const pageTitle = 'page-Contact';
  const { title, description } = Messages.contact.mainbanner;
  const classNames = {
    heading1: 'Intro-text',
    btnClasses: 'btn-gradient',
    textAlignment:'text-start text-white mt-2 hide'
  };
  return (
    <PageTitle pageName={pageTitle}>
      <Layout>
          <MainBanner classNames={classNames} title={title} description={description} image={Team} textOverlay={true}/>
          <ContactForm/>
      </Layout>
    </PageTitle>
  );
};

export default Contact;
