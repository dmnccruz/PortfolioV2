import HeadModel from './HeadModel';
import '../styles/Page1.css';

const Page1 = () => {
  return (
    <div className={'Page1'}>
      <div className={'text'}>
        <h1 className={'name'}>D O M I N I C M A R T I N C R U Z</h1>
        <span>
          __________________________________________________________________________
        </span>
        <h1 className={'subtext'}>s o f t w a r e • d e v e l o p e r</h1>
      </div>
      <HeadModel />
    </div>
  );
};

export default Page1;
