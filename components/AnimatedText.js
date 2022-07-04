import Dominic from './texts/Dominic';
import Martin from './texts/Martin';
import Baltazar from './texts/Baltazar';
import Cruz from './texts/Cruz';

const texts = {
  dominic: <Dominic />,
  martin: <Martin />,
  baltazar: <Baltazar />,
  cruz: <Cruz />,
};

const AnimatedText = ({ name }) => {
  return texts[name];
};

export default AnimatedText;
