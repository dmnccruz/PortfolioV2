import ContactForm from './ContactForm';
import Map from './Map';
import '../styles/Page3.css';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import UseAnimations from 'react-useanimations';

const Page3 = ({ id, atBottom }) => {
  const [date, setDate] = useState(moment.tz(Date.now(), 'Asia/Taipei'));

  useEffect(() => {
    const timeInterval = setInterval(
      () => setDate(moment.tz(Date.now(), 'Asia/Taipei')),
      1000
    );

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={'Page3'} id={id}>
      <div className={'contactContainer'}>
        <ContactForm />
        <Map />
      </div>
      <div className={'footer'}>
        <div className={'date'}>
          <h6>my local time</h6>
          <p>
            {date.format('MMM D YYYY - h:mm:ssa')}, Manila, Philippines, GMT+8
          </p>
        </div>
        <div className={'updated'}>
          <h6>updated</h6>
          <p>Aug 2022</p>
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
