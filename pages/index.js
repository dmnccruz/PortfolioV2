import { useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import Meta from '../components/Meta';

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
      <AnimatedText name={'dominic'} />
      <AnimatedText name={'martin'} />
      <AnimatedText name={'baltazar'} />
      <AnimatedText name={'cruz'} />
    </div>
  );
};

export default Home;
