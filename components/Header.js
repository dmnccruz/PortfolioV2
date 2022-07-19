import classes from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={classes.container}>
      <h6 className={`text-6 ${classes.navText}`}>about</h6>
      <h6 className={`text-6 ${classes.navText}`}>works</h6>
      <h6 className={`text-6 ${classes.navText}`}>contact</h6>
    </div>
  );
};

export default Header;
