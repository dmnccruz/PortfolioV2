import { useEffect } from 'react';
import Meta from '../components/Meta';
import Page1 from '../components/Page1';

const Home = () => {
  useEffect(() => {
    const text = document.querySelectorAll('#cruz svg path');

    for (let i = 0; i < text.length; i++) {
      console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
    }
  }, []);

  return (
    <div>
      <Meta
        title={'Dominic Martin B. Cruz | Portfolio'}
        keywords={
          'Dominic, Martin, Baltazar, Cruz, Dominic Martin Baltazar Cruz Portfolio, Portfolio'
        }
        description={'Dominic Martin B. Cruz Portfolio'}
      />
      <Page1 />
    </div>
  );
};

export default Home;
