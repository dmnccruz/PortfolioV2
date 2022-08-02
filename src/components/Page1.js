import HeadModel from './HeadModel';
import '../styles/Page1.css';

const Page1 = ({ id }) => {
  return (
    <div className={'Page1'} id={id}>
      <div className={'text'}>
        <h1 className={'name'}>
          <span> D O M I N I C </span>M A R T I N<span> B. </span>C R U Z
        </h1>
        <span>
          __________________________________________________________________________
        </span>
        <h1 className={'subtext'}>
          s o f t w a r e <span> • </span> d e v e l o p e r
        </h1>
      </div>
      {/* <div className={'lineContainer1'}>
        <div></div>
      </div> */}
      <HeadModel />
      {/* <div className={'lineContainer2'}>
        <div></div>
      </div> */}
    </div>
  );
};

export default Page1;
