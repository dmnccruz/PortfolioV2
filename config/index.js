const dev = process.env.NODE_ENV !== 'prodution';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://samplewebsite.com';
