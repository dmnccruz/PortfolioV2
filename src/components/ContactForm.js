import { useState } from 'react';
import axios from 'axios';
import UseAnimations from 'react-useanimations';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [errors, setErrors] = useState({});
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
    e.preventDefault();
    const validateEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    const errorsObj = {};

    if (!validateEmail(inputs.email)) {
      errorsObj['email'] = 'email is invalid.';
    }

    Object.entries(inputs).map((el) => {
      if (el[1] === '') {
        errorsObj[el[0]] = `${el[0]} is required`;
      }
    });

    setErrors(errorsObj);
    if (Object.values(errorsObj).length === 0) {
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
    }
  };

  const handleChange = (input, value) => {
    setErrors({});
    setInputs({ ...inputs, [input]: value });
  };

  return (
    <div className={`contactForm ${status.submitting ? 'disable' : ''}`}>
      {status.submitted ? (
        <div className={'successBackground'}>
          <div
            className={'closeButton'}
            onClick={() => {
              setStatus({
                info: { error: false, msg: null },
                submitted: false,
                submitting: false,
              });
            }}
          >
            <UseAnimations
              animationKey='plusToX'
              size={32}
              autoplay={true}
              strokeColor='rgb(82, 209, 78)'
              fillColor='rgb(82, 209, 78)'
              style={{ transform: 'rotate(45deg)' }}
            />
          </div>
          <UseAnimations
            animationKey='radioButton'
            size={102}
            autoplay={true}
            strokeColor='rgb(82, 209, 78)'
            fillColor='rgb(82, 209, 78)'
          />
          <p>Thank you for reaching out!</p>
        </div>
      ) : null}
      <h1 className={'header'}>say hello.</h1>
      <input
        className={`${errors.email ? 'error' : ''}`}
        placeholder={'email'}
        value={inputs.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <textarea
        className={`${errors.message ? 'error' : ''}`}
        placeholder={'message'}
        value={inputs.message}
        onChange={(e) => handleChange('message', e.target.value)}
      />
      <div className={'button'} onClick={(e) => handleSubmit(e)}>
        {status.submitting ? (
          <UseAnimations
            animationKey='loading2'
            size={20}
            autoplay={true}
            strokeColor='white'
            fillColor='white'
            style={{ marginTop: '4px' }}
          />
        ) : status.submitted ? (
          ''
        ) : (
          'send'
        )}
      </div>
      <div className={'errorsContainer'}>
        {Object.values(errors).length > 0 &&
          Object.values(errors).map((e) => {
            return <p style={{ color: 'white' }}>{e}</p>;
          })}
      </div>
      <div className={'socials'}>
        <UseAnimations
          onClick={() =>
            window.open(
              'https://github.com/dmnccruz',
              '_blank',
              'noopener,noreferrer'
            )
          }
          animationKey='github'
          size={20}
          autoplay={true}
          loop={true}
          strokeColor='white'
          fillColor='white'
          style={{ cursor: 'pointer', marginRight: '5px' }}
        />
        <UseAnimations
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/dominicmartincruz/',
              '_blank',
              'noopener,noreferrer'
            )
          }
          animationKey='linkedin'
          size={26}
          autoplay={true}
          loop={true}
          strokeColor='white'
          fillColor='white'
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
