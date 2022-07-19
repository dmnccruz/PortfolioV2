import classes from '../styles/gridlines.module.css';

const Gridlines = () => {
  return (
    <div className={classes.container}>
      <div className={classes.gridLinesContainer}>
        <div className={`${classes.gridLine} ${classes.gridLine1}`}></div>
        <div className={`${classes.gridLine} ${classes.gridLine2}`}></div>
        <div className={`${classes.gridLine} ${classes.gridLine3}`}></div>
        <div className={`${classes.gridLine} ${classes.gridLine4}`}></div>
        <div className={`${classes.gridLine} ${classes.gridLine5}`}></div>
      </div>
    </div>
  );
};

export default Gridlines;
