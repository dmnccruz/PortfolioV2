import AnimatedText from './AnimatedText';
import classes from '../styles/animatedText.module.css';
import { useState, useRef, useEffect } from 'react';

const AnimatedName = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const boundsRef = useRef(null);
  const divsArrRef = useRef(null);

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div
          id={classes.hoverLetterContainer}
          onMouseOver={(e) => {
            divsArrRef.current = [
              document.getElementById(classes.d),
              document.getElementById(classes.m),
              document.getElementById(classes.b),
              document.getElementById(classes.c),
            ];
            boundsRef.current = e.target.getBoundingClientRect();
          }}
          onMouseMove={(e) => {
            if (!boundsRef.current) return;
            const bounds = boundsRef.current;
            const a = bounds.x + bounds.width / 2;
            const b = bounds.y + bounds.height / 2;
            setTranslate({
              x: e.clientX - a,
              y: e.clientY - b,
            });

            if (
              e.clientX > bounds.x + bounds.width ||
              e.clientY > bounds.y + bounds.height
            ) {
              divsArrRef.current.map((el) => {
                el.style.transform = `translate(0px, 0px)`;
              });
            } else {
              divsArrRef.current.map((el) => {
                el.style.transform = `translate(${translate.x}px, ${translate.y}px)`;
              });
            }
          }}
          onMouseOut={(e) => {
            setTranslate({
              x: 0,
              y: 0,
            });
            divsArrRef.current.map((el) => {
              el.style.transform = `translate(0px, 0px)`;
            });
          }}
        ></div>
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
