import { useState, useRef } from 'react';

const StickyHoverComponent = ({ children, className, id, style, divs }) => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const boundsRef = useRef(null);
  const divsArrRef = useRef(null);

  return (
    <div
      id={id || ''}
      className={className || ''}
      style={style || {}}
      onMouseOver={(e) => {
        divsArrRef.current = divs;
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
            document.getElementById(el).style.transform = `translate(0px, 0px)`;
          });
        } else {
          divsArrRef.current.map((el) => {
            document.getElementById(
              el
            ).style.transform = `translate(${translate.x}px, ${translate.y}px)`;
          });
        }
      }}
      onMouseOut={(e) => {
        setTranslate({
          x: 0,
          y: 0,
        });
        divsArrRef.current.map((el) => {
          document.getElementById(el).style.transform = `translate(0px, 0px)`;
        });
      }}
    >
      {children}
    </div>
  );
};

export default StickyHoverComponent;
