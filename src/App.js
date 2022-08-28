import { useEffect, useState } from 'react';
import ScrollIndicator from './components/ScrollIndicator';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import ParallaxObjects from './components/ParallaxObjects';
import './styles/App.css';

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const [atTop, setAtTop] = useState(false);
  const [windowSize, setWindowSize] = useState(null);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setAtTop(true);
    } else {
      setAtTop(false);
    }
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
    setOffsetY(window.scrollY);
  };

  const handleResize = (e) => {
    setWindowSize(e.currentTarget.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   };
  // }, []);

  return (
    <>
      <ParallaxObjects translate={offsetY} />
      <SmoothScroll>
        <div className='App'>
          {atTop ? <ScrollIndicator /> : null}
          <Page1 id={'Page1'} windowSize={windowSize} />
          <Page2 id={'Page2'} />
          <Page3 id={'Page3'} atBottom={atBottom} windowSize={windowSize} />
        </div>
      </SmoothScroll>
    </>
  );
};

export default App;
