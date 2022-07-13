import AnimatedText from './AnimatedText';
import classes from '../styles/animatedText.module.css';

const AnimatedName = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.letterD}>
          <AnimatedText name={'d'} />
        </div>
        <div className={classes.letterM}>
          <AnimatedText name={'m'} />
        </div>
        <div className={classes.letterB}>
          <AnimatedText name={'b'} />
        </div>
        <div className={classes.letterC}>
          <AnimatedText name={'c'} />
        </div>
        <AnimatedText name={'dominic'} />
        <AnimatedText name={'martin'} />
        <AnimatedText name={'baltazar'} />
        <AnimatedText name={'cruz'} />
      </div>
    </div>
  );
};

export default AnimatedName;
