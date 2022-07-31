import ContactForm from './ContactForm';
import Map from './Map';
import '../styles/Page3.css';

const Page3 = () => {
  return (
    <div className={'Page3'}>
      <div className={'contactContainer'}>
        {/* <div className={'background'}></div> */}
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default Page3;
