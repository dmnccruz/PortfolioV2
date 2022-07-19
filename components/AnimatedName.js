import AnimatedText from './AnimatedText';
import classes from '../styles/animatedText.module.css';

const AnimatedName = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div id={classes.hoverLetterContainer}></div>
        <div className={classes.letterD}>
          <AnimatedText name={'d'} id={classes.d} />
        </div>
        <div className={classes.letterM}>
          <AnimatedText name={'m'} id={classes.m} />
        </div>
        <div className={classes.letterB}>
          <AnimatedText name={'b'} id={classes.b} />
        </div>
        <div className={classes.letterC}>
          <AnimatedText name={'c'} id={classes.c} />
        </div>
        <AnimatedText name={'dominic'} id={classes.dominic} />
        <AnimatedText name={'martin'} id={classes.martin} />
        <AnimatedText name={'baltazar'} id={classes.baltazar} />
        <AnimatedText name={'cruz'} id={classes.cruz} />
      </div>
    </div>
  );
};

export default AnimatedName;
