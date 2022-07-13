import { Dominic, Martin, Baltazar, Cruz, D, M, B, C } from './texts/NameSmall';

const texts = {
  dominic: <Dominic />,
  martin: <Martin />,
  baltazar: <Baltazar />,
  cruz: <Cruz />,
  d: <D />,
  m: <M />,
  b: <B />,
  c: <C />,
};

const AnimatedText = ({ name }) => {
  return texts[name];
};

export default AnimatedText;
