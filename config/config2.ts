import { registerAs } from '@nestjs/config';

export default registerAs('database2', () => ({
  host: process.env.DATABASE_HOST || 'myhost',
  port: process.env.DATABASE_PORT || 95432,
}));
