const ParallaxObject = ({ translate, speed, children, style }) => {
  return (
    <div
      style={{
        position: 'absolute',
        transform: `translateY(${translate * speed}px)`,
        height: 'auto',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const ParallaxObjects = ({ translate }) => {
  return (
    <div
      style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
      }}
    >
      <ParallaxObject
        translate={translate}
        speed={-0.1}
        style={{
          top: '150px',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/2.png')})`,
            backgroundPosition: 'left',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: '500px',
            width: '100%',
          }}
        ></div>
      </ParallaxObject>
      <ParallaxObject
        translate={translate}
        speed={-0.2}
        style={{
          top: '250px',
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/1.png')})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: '500px',
            width: '100%',
          }}
        ></div>
      </ParallaxObject>
      <ParallaxObject
        translate={translate}
        speed={-0.05}
        style={{
          bottom: 150,
          height: '500px',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/4.png')})`,
            backgroundPosition: 'left',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            height: '500px',
            width: '100%',
          }}
        ></div>
      </ParallaxObject>
      <ParallaxObject
        translate={translate}
        speed={-0.1}
        style={{
          top: '150px',
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/3.png')})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: '1500px',
            width: '100%',
          }}
        ></div>
      </ParallaxObject>
    </div>
  );
};

export default ParallaxObjects;
