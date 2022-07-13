import { useEffect } from 'react';
import Meta from '../components/Meta';
import LandingPage from '../components/LandingPage';
import AnimatedName from '../components/AnimatedName';
import Page1 from '../components/Page1';

const Home = () => {
  useEffect(() => {
    const text = document.querySelectorAll('#cruz svg path');

    for (let i = 0; i < text.length; i++) {
      console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
    }
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
      <Page1 />
    </>
  );
};

export default Home;
