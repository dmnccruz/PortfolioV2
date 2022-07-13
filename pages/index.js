import { useEffect } from 'react';
import Meta from '../components/Meta';
import LandingPage from '../components/LandingPage';
import AnimatedName from '../components/AnimatedName';
import Header from '../components/Header';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';

const Home = () => {
  useEffect(() => {
    // const body = document.getElementsByTagName('body');
    // if (body) {
    //   setTimeout(() => {
    //     body[0].style.overflow =
    //       navigator.userAgent.indexOf('Firefox') != -1 ? 'auto' : 'overlay';
    //   }, 3000);
    // }
    // const text = document.querySelectorAll('#cruz svg path');
    // for (let i = 0; i < text.length; i++) {
    //   console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
    // }
  }, []);

  return (
    <>
      <Meta
        title={'Dominic Martin B. Cruz | Portfolio'}
        keywords={
          'Dominic, Martin, Baltazar, Cruz, Dominic Martin Baltazar Cruz Portfolio, Portfolio'
        }
        description={'Dominic Martin B. Cruz Portfolio'}
      />
      <LandingPage />
      <AnimatedName />
      <Header />
      <Page1 />
      <Page2 />
    </>
  );
};

export default Home;
