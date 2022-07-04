import AnimatedText from './AnimatedText';
import classes from '../styles/page1.module.css';

const Page1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <AnimatedText name={'dominic'} />
        <AnimatedText name={'martin'} />
        <AnimatedText name={'baltazar'} />
        <AnimatedText name={'cruz'} />
      </div>
    </div>
  );
};

export default Page1;
