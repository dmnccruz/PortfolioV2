import { Dominic, Martin, Baltazar, Cruz, D, M, B, C } from './texts/NameSmall';

const getText = (name, id) => {
  const texts = {
    dominic: <Dominic id={id} />,
    martin: <Martin id={id} />,
    baltazar: <Baltazar id={id} />,
    cruz: <Cruz id={id} />,
    d: <D id={id} />,
    m: <M id={id} />,
    b: <B id={id} />,
    c: <C id={id} />,
  };

  return texts[name];
};

const AnimatedText = ({ name, id }) => {
  return getText(name, id);
};

export default AnimatedText;
