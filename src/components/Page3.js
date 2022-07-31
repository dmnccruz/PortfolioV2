import { useState } from 'react';
import '../styles/Page3.css';
import Map from './Map';

console.log(process.env);

const Page3 = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    const errorsObj = {};
  };

  return (
    <div className={'Page3'}>
      {/* <div className={'background'}></div> */}
      <div className={'contactContainer'}>
        <div className={'contactForm'}>
          <h1 className={'header'}>Contact me</h1>
          <input
            placeholder={'subject'}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder={'message'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className={'button'} onClick={() => console.log('send')}>
            send
          </div>
          <div className={'socials'}>
            <div className={'fab socialIcon'}>&#xf08c;</div>
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Page3;
