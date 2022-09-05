import ContactForm from './ContactForm';
import Map from './Map';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import UseAnimations from 'react-useanimations';
import HandModel from './HandModel';
import '../styles/Page3.css';

const Page3 = ({ id, atBottom, windowSize }) => {
  const [date, setDate] = useState(moment.tz(Date.now(), 'Asia/Taipei'));
  const [handShake, setHandShake] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(
      () => setDate(moment.tz(Date.now(), 'Asia/Taipei')),
      1000
    );

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={'Page3'} id={id}>
      <HandModel handShake={handShake} windowSize={windowSize} />
      <div className={'contactContainer'}>
        <ContactForm handShake={handShake} setHandShake={setHandShake} />
        <Map windowSize={windowSize} />
      </div>
      <div className={'footer'}>
        <div className={'date'}>
          <h6>Manila, Philippines</h6>
          <p>{date.format(`MMM D 'YY - h:mm:ssA`)}, GMT+8</p>
        </div>
        <div className={'updated'}>
          <h6>updated</h6>
          <p>Aug '22</p>
        </div>
      </div>
      <div
        className={'backToTop'}
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        style={{ display: atBottom ? 'flex' : 'none' }}
      >
        <UseAnimations
          animationKey='arrowUp'
          size={32}
          autoplay={true}
          strokeColor='white'
          fillColor='white'
          style={{ marginTop: '4px' }}
        />
      </div>
    </div>
  );
};

export default Page3;
