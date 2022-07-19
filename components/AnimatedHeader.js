import { useEffect, useRef } from 'react';
import styles from '../styles/AnimatedHeader.module.css';
import { animatedText } from '../utils';

const AnimatedHeader = () => {
  const typingRef = useRef(false);

  useEffect(() => {
    if (typingRef.current === false) {
      animatedText([
        'Smart',
        'Beautiful',
        'Data-driven',
        'Interactive',
        'Trackable',
        'Shareable',
        'Automated',
        'Client',
      ]);
    }

    typingRef.current = true;
  }, []);

  return (
    <div className={styles.animatedHeader}>
      <h1>Turn your boring documents into&nbsp;</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h1 className={'typed-text'}></h1>
          <span className={`${styles.cursor} cursor`}>&nbsp;</span>
        </div>
        <h1>&nbsp;Portals</h1>
      </div>
    </div>
  );
};

export default AnimatedHeader;
