import { server } from '../config';
import axios from 'axios';

export default function Home({ sampleApi }) {
  return (
    <>
      <div className={''}>portfolio</div>
    </>
  );
}

// SAMPLE API
export const getStaticProps = async () => {
  // const res = await fetch(`${server}/api`); // custom api
  // const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); // sample api
  // const sampleApi = await res.data;
  const sampleApi = '';

  return {
    props: { sampleApi },
  };
};
