import { useEffect } from 'react';
import Meta from '../components/Meta';
import LandingPage from '../components/LandingPage';
import AnimatedName from '../components/AnimatedName';
import Header from '../components/Header';
import Gridlines from '../components/Gridlines';
import Page1 from '../components/Page1';

const Home = () => {
  useEffect(() => {
    // const text = document.querySelectorAll('#cruz svg path');
    // for (let i = 0; i < text.length; i++) {
    //   console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
    // }
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
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
      <Gridlines />
      <LandingPage />
      <AnimatedName />
      <Header />
      <Page1 />
    </>
  );
};

export default Home;
