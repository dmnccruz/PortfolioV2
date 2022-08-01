import HeadModel from './HeadModel';
import '../styles/Page1.css';

const Page1 = ({ id }) => {
  return (
    <div className={'Page1'} id={id}>
      <div className={'text'}>
        <h1 className={'name'}>
          D O M I N I C M A R T I N B. <span>C R U Z</span>
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
