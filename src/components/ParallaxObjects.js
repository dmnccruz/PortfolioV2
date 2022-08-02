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

const ParallexImages = ({ translate }) => {
  return (
    <>
      <ParallaxObject
        translate={translate}
        speed={-0.9}
        style={{
          top: -150,
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/5c.png')})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            height: '500px',
            width: '100%',
            opacity: 0.1,
          }}
        ></div>
      </ParallaxObject>
      <ParallaxObject
        translate={translate}
        speed={-0.7}
        style={{
          top: '50px',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/2c.png')})`,
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
        speed={-0.4}
        style={{
          top: '300px',
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/1c.png')})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: '500px',
            width: '100%',
            opacity: 0.1,
          }}
        ></div>
      </ParallaxObject>
      <ParallaxObject
        translate={translate}
        speed={-0.3}
        style={{
          top: '600px',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/4c.png')})`,
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
        speed={-0.6}
        style={{
          top: '900px',
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/3c.png')})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: '500px',
            width: '100%',
            opacity: 0.1,
          }}
        ></div>
      </ParallaxObject>
      <ParallaxObject
        translate={translate}
        speed={-0.7}
        style={{
          top: '1400px',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/2c.png')})`,
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
        speed={-0.5}
        style={{
          top: '1700px',
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/1c.png')})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: '500px',
            width: '100%',
            opacity: 0.1,
          }}
        ></div>
      </ParallaxObject>
      <ParallaxObject
        translate={translate}
        speed={-0.9}
        style={{
          top: '2000px',
          right: 0,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/5c.png')})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            height: '500px',
            width: '100%',
            opacity: 0.1,
          }}
        ></div>
      </ParallaxObject>
    </>
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
      <ParallexImages translate={translate} />
      <ParallexImages translate={translate} />
    </div>
  );
};

export default ParallaxObjects;
