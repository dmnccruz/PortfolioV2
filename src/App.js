import { useEffect, useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import ParallaxObjects from './components/ParallaxObjects';
import './styles/App.css';

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <ParallaxObjects translate={offsetY} />
      <SmoothScroll>
        <div className='App'>
          <Page1 id={'Page1'} />
          <Page2 id={'Page2'} />
          <Page3 id={'Page3'} />
        </div>
      </SmoothScroll>
    </>
  );
};

export default App;
