import { useEffect, useRef } from 'react';
import classes from '../styles/page1.module.css';
import { animatedText } from '../utils';

const Page1 = () => {
  const typingRef = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      if (typingRef.current === false) {
        animatedText(['Hello!', 'Whats up?', 'Kamusta!']);
      }
      typingRef.current = true;
    }, 2500);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.greeting}>
        <div className={classes.hello}>
          <div className={`text-2 ${classes.greetingText} typed-text`}></div>
          <span className={`${classes.cursor} cursor`}>&nbsp;</span>
        </div>
        <div className={`text-2 ${classes.greetingText}`}>I am</div>
        <div className={`text-1 ${classes.greetingText}`}>Dom.</div>
      </div>
      <div className={classes.about}>
        <div className={`text-6 ${classes.aboutText}`}>
          Former Architect in the Construction industry then pivoted careers
          into Software development in January of 2020.
        </div>
      </div>
      <div className={classes.jobs}>
        <div className={`text-5 ${classes.jobsText}`}>Software Engineer</div>
        <div className={`text-5 ${classes.jobsText}`}>Frontend Developer</div>
        <div className={`text-5 ${classes.jobsText}`}>UI/UX Designer</div>
      </div>
    </div>
  );
};

export default Page1;
