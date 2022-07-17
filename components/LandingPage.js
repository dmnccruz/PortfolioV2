import classes from '../styles/landingPage.module.css';

const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={`${classes.bar} ${classes.bar1}`}>
        <div className={classes.gradientShadow}></div>
      </div>
      <div className={`${classes.bar} ${classes.bar2}`}>
        <div className={classes.gradientShadow}></div>
      </div>
      <div className={`${classes.bar} ${classes.bar3}`}>
        <div className={classes.gradientShadow}></div>
      </div>
      <div className={`${classes.bar} ${classes.bar4}`}>
        <div className={classes.gradientShadow}></div>
      </div>
      <div className={`${classes.bar} ${classes.bar5}`}>
        <div className={classes.gradientShadow}></div>
      </div>
      <div className={`${classes.bar} ${classes.bar6}`}>
        <div className={classes.gradientShadow}></div>
      </div>
    </div>
  );
};

export default LandingPage;
