import { useState } from 'react';
import '../styles/Page3.css';
import Map from './Map';
import axios from 'axios';

const Page3 = () => {
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const validateEmail = (email) => {
    //   const re =
    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // };
    // const errorsObj = {};
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_KEY}`,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div className={'Page3'}>
      {/* <div className={'background'}></div> */}
      <div className={'contactContainer'}>
        <div className={'contactForm'}>
          <h1 className={'header'}>Contact me</h1>
          <input
            placeholder={'email'}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <textarea
            placeholder={'message'}
            value={inputs.message}
            onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
          />
          <div className={'button'} onClick={(e) => handleSubmit(e)}>
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
