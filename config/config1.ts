import { isUndefined } from 'util';

const DEFAULT_PORT = !isUndefined(process.env.NODE_ENV)
  ? process.env.NODE_ENV === 'production'
    ? 3333
    : 4444
  : 5555;

console.log('process.env.PORT: ', process.env.PORT);

export default () => {
  console.log('process.env.PORT: ', process.env.PORT);

  return {
    port: parseInt(process.env.PORT, 10) || DEFAULT_PORT,
    database: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT || 5432,
    },
  };
};
