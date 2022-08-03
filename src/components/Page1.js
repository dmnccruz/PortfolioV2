import HeadModel from './HeadModel';
import '../styles/Page1.css';

const Page1 = ({ id }) => {
  return (
    <div className={'Page1'} id={id}>
      <div className={'text'}>
        <div className={'name'}>
          <h1>D&nbsp;O&nbsp;M&nbsp;I&nbsp;N&nbsp;I&nbsp;C&nbsp;</h1>
          <h2>M&nbsp;A&nbsp;R&nbsp;T&nbsp;I&nbsp;N&nbsp;</h2>
          <h1>B.&nbsp;</h1>
          <h2>C&nbsp;R&nbsp;U&nbsp;Z</h2>
        </div>
        {/* <h1 className={'name'}>
          <span> D&nbsp;O&nbsp;M&nbsp;I&nbsp;N&nbsp;I&nbsp;C</span>
          M&nbsp;A&nbsp;R&nbsp;T&nbsp;I&nbsp;N<span> B. </span>
          C&nbsp;R&nbsp;U&nbsp;Z
        </h1> */}
        <span style={{ zIndex: -1 }}>
          _______________________________________________________________________________________________________________________________________
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
